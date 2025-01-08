import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CityState, ICity } from "Types/types";
import { throttleFunc } from "Utils/throttle";

// Define an async thunk
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (city: string, { dispatch, rejectWithValue }) => {
    dispatch(setLoading());

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_WEATHER_URL}&q=${encodeURIComponent(city)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      dispatch(updateCityData(data));
      dispatch(setSucceeded());
      return data;
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(setFailed(errorMessage));
      return rejectWithValue(errorMessage);
    }
  }
);
export const throttledFetchData = throttleFunc(
  (city: string) => fetchData(city),
  2000 // Throttle requests to once every 2 seconds
);

const initialState: CityState = {
  allCities: [], //Use a map to ensure no duplicate entries and prevent having to iterate to check on each city added
  status: "idle",
  error: null,
  cityData: undefined,
  loading: false,
};

const citiesWeatherSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.status = "loading";
    },
    setSucceeded: (state) => {
      state.status = "succeeded";
    },
    setFailed: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    updateCityData: (state, action: PayloadAction<any>) => {
      const city = action.payload;
      const newCityName = city.location.name.toLocaleLowerCase();
      //Check to ensure that the new city does not exist.  If it does, then just update it, otherwise just push it
      let selectedCity = state.allCities.find(
        ({ location: { name } }: ICity) =>
          name.toLocaleLowerCase() === newCityName
      );

      if (!selectedCity) {
        //add it to allCities
        state.allCities.push(city);
      } else {
        //Update the selectedCity
        selectedCity = city;
      }

      //Iterate through each city and set selected to false, except for the new city
      state.allCities = state.allCities.reduce<ICity[]>((acc, city) => {
        // Your logic here to process each city and push to acc
        //This will set the new city selected property to true and reset all others to false
        city.selected = city.location.name.toLocaleLowerCase() === newCityName;
        acc.push(city);
        return acc;
      }, []);

      /*
        Change the type for ICity with a selected?:
        When a new city is added, set selected to true.

        Find the old one and set it to false
        Use reduce to iterate once

        Steps
          Push the new city 
          Use reduce and iterate through the array, using the name to setselected to true if the new city name matches
          a city in the allCities array.
          Otherwise set each one to false.

          GET RID OF THE SELECTEDCITY PROPERTY



        Get the selectedCity
        
        get the new city from the action.payload

        What do I want to do
          I want to replace the selected city with the new city
          I want to take the currently selectedCIty and check to see if it's in the allCitties array
            if it's in there, then overwrite the data.
            If it's not in there, then add it. 
       */
      // Clone the selectedCity
      // const selectedCity = state.selectedCity;
      // if (selectedCity) {
      //   const tempSelectedCity = JSON.parse(JSON.stringify(state.selectedCity));
      //   const allCities = JSON.parse(JSON.stringify(state.allCities));

      //   // Check to see if the selectedCity exists in the allCities array
      //   let findCity = allCities.find(
      //     ({ location: { name } }: ICity) =>
      //       name === tempSelectedCity.location.name
      //   );

      //   // If so, overwrite it
      //   if (findCity) {
      //     findCity = city;
      //   }
      // } else {
      //   // Add it to the allCities collection
      //   state.allCities.push(city);
      // }

      // // Set the selectedCity to the incoming city
      // state.selectedCity = city;
    },
  },
});

export const { setLoading, setSucceeded, setFailed, updateCityData } =
  citiesWeatherSlice.actions;
export const cityWeatherReducer = citiesWeatherSlice.reducer;
