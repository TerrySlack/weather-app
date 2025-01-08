import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var CityDetails = function (_a) {
    var _b = _a.city, location = _b.location, current = _b.current;
    /*
      current:is_Day
      Use this to determine if it's a night time theme or a day time t heme.
    */
    return (_jsxs("div", { children: [_jsx("h2", { children: _jsxs("span", { children: [_jsx("img", { src: current.condition.icon, alt: current.condition.text }), location.name, ", ", location.region, ", ", location.country] }) }), _jsxs("p", { children: ["Local Time: ", location.localtime] }), _jsxs("p", { children: ["Temperature: ", current.temp_c, "\u00B0C (", current.temp_f, "\u00B0F)"] }), _jsxs("p", { children: ["Condition: ", current.condition.text] }), _jsxs("p", { children: ["Humidity: ", current.humidity, "%"] }), _jsxs("p", { children: ["Wind: ", current.wind_kph, " kph (", current.wind_mph, " mph)"] })] }));
};
//# sourceMappingURL=CityDetails.js.map