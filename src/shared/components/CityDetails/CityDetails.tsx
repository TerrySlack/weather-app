import { ICity } from "Types/types";

type CityDetailsProps = {
  city: ICity;
};

export const CityDetails = ({
  city: { location, current },
}: CityDetailsProps) => (
  /*
    current:is_Day
    Use this to determine if it's a night time theme or a day time t heme.
  */
  <div className="flex items-center justify-center pb-8">
    <div className="w-1/3 max-w-screen-sm bg-black text-purple-400 border-4 border-goldenrod p-6">
      <h3 className="font-semibold mb-4 flex justify-between items-center">
        <span>
          {location.name}, {location.region}, {location.country}
        </span>
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="ml-4"
        />
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-left font-semibold">Local Time:</div>
        <div className="text-right">{location.localtime}</div>

        <div className="text-left font-semibold">Temperature:</div>
        <div className="text-right">
          {current.temp_c}°C ({current.temp_f}°F)
        </div>

        <div className="text-left font-semibold">Condition:</div>
        <div className="text-right">{current.condition.text}</div>

        <div className="text-left font-semibold">Humidity:</div>
        <div className="text-right">{current.humidity}%</div>

        <div className="text-left font-semibold">Wind:</div>
        <div className="text-right">
          {current.wind_kph} kph ({current.wind_mph} mph)
        </div>
      </div>
    </div>
  </div>
);
