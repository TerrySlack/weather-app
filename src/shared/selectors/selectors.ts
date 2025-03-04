import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "Store/store";
import { CityState, ICity } from "Types/types";

const selectCityState = (state: RootState) => state.cityState;

export const selectAllCities = createSelector(
  [selectCityState],
  ({ allCities }: CityState) => allCities
);

export const selectCityData = createSelector(
  [selectCityState],
  ({ cityData }: CityState) => cityData
);

export const selectLoading = createSelector(
  [selectCityState],
  ({ loading }: CityState) => loading
);

export const selectStatus = createSelector(
  [selectCityState],
  ({ status }: CityState) => status
);

export const selectError = createSelector(
  [selectCityState],
  ({ error }: CityState) => error
);

export const selectSelectedCity = createSelector(
  [selectAllCities],
  (allCities) => allCities.find(({ selected }: ICity) => selected)
);
