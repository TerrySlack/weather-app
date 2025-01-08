import { jsx as _jsx } from "react/jsx-runtime";
export var CityButtons = function (_a) {
    var cities = _a.cities, onCityClick = _a.onCityClick;
    return (_jsx("div", { children: cities.map(function (city) { return (_jsx("button", { onClick: onCityClick(city), children: city }, city)); }) }));
};
//# sourceMappingURL=CityButtons.js.map