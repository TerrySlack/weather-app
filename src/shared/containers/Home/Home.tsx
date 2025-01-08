import { useState, ChangeEvent, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCities,
  // selectError,
  selectLoading,
  selectSelectedCity,
} from "Selectors/selectors";
import { throttledFetchData } from "Store/slices/cityWeatherSlice";
import { AppDispatch } from "Store/store";
import { useHighlightOnFocus } from "Hooks/useSelectText";
import { CitySearch } from "Components/CitySearch";
import { CityDetails } from "Components/CityDetails";
import { CityButtons } from "Components/CityButtons";

function HomeContainer() {
  const [city, setCity] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const allCities = useSelector(selectAllCities);
  const selectedCity = useSelector(selectSelectedCity);
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // Select the text in an input box, on focus
  const { ref, onFocus } = useHighlightOnFocus();

  const citySearchFetchError = false;

  const onCitySearchClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(throttledFetchData(city));
  };

  const onPreviouslySelectedCityClick =
    (previousCity: string) => (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setCity(previousCity);
      dispatch(throttledFetchData(previousCity));
    };

  // TODO:  Debounce this
  const onCitySearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCity(value);
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-black text-white p-6">
        <h1 className="text-4xl mb-6">Weather App</h1>
        <CitySearch
          ref={ref}
          city={city}
          isLoading={loading}
          onSearchClick={onCitySearchClick}
          onChange={onCitySearchChange}
          onFocus={onFocus}
        />
      </div>
      {citySearchFetchError && <p>Error fetching weather data.</p>}
      {/* This should only render the current city */}
      {selectedCity && <CityDetails city={selectedCity} />}
      {allCities && allCities.length > 0 && (
        <CityButtons
          cities={allCities}
          onCityClick={onPreviouslySelectedCityClick}
        />
      )}
    </div>
  );
}

export { HomeContainer as Home };
