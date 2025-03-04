import { MouseEvent } from "react";
import { ICity } from "Types/types";
import { getRandomColor, getRandomTailwindColorClass } from "Utils/randomColor";

type CityButtonsProps = {
  cities: ICity[];
  onCityClick: (city: string) => (e: MouseEvent<HTMLButtonElement>) => void;
};

export const CityButtons = ({ cities, onCityClick }: CityButtonsProps) => (
  <div className="flex justify-center min-h-screen bg-black p-6">
    <div className="flex flex-wrap justify-center gap-4 max-w-screen-md w-full">
      {cities.map(({ location: { name } }: ICity) => (
        <button
          key={name}
          onClick={onCityClick(name)}
          className={`${getRandomTailwindColorClass()} text-white p-2 rounded hover:bg-purple-500 w-32 h-32`}
        >
          {name}
        </button>
      ))}
    </div>
  </div>
);
