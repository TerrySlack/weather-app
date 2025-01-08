import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var CitySearch = function (_a) {
    var city = _a.city, isLoading = _a.isLoading, onSearchClick = _a.onSearchClick, onChange = _a.onChange;
    return (_jsxs("div", { children: [_jsx("input", { className: "col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pl-10 pr-3 text-base text-white outline-none placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6", type: "text", placeholder: "Enter city", defaultValue: city, onChange: onChange }), _jsx("button", { onClick: onSearchClick, disabled: isLoading || city.length === 0, children: isLoading ? "Loading..." : "Search" })] }));
};
//# sourceMappingURL=CitySearch.js.map