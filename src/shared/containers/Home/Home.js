var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Home } from "Components/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCities, selectCityData, selectError, selectLoading, selectSelectedCity, selectStatus, } from "Selectors/selectors";
import { fetchData } from "Store";
var HomeContainer = function () {
    var dispatch = useDispatch();
    var allCities = useSelector(selectAllCities);
    var selectedCity = useSelector(selectSelectedCity);
    var cityData = useSelector(selectCityData);
    var loading = useSelector(selectLoading);
    var status = useSelector(selectStatus);
    var error = useSelector(selectError);
    //const [selectedCity, setSelectedCity] = useState<ICity>();
    var _a = __read(useState("london"), 2), city = _a[0], setCity = _a[1];
    //const [allCities, setAllCities] = useState<ICity[]>([]);
    var _b = __read(useState([]), 2), previosulySelectcedCities = _b[0], setPreviosulySelectcedCities = _b[1];
    var _c = __read(useState(false), 2), isLoadingCitySearch = _c[0], setIsLoadingCitySearch = _c[1];
    var citySearchFetchError = false;
    var onCitySearchClick = function (e) {
        e.preventDefault();
        dispatch(fetchData());
    };
    var onPreviouslySelectedCityClick = function (city) { return function (e) {
        e.preventDefault();
        console.log(city);
    }; };
    var onCitySearchChange = function (e) {
        console.log(e);
    };
    console.log("\n    isLoadingCitySearch  ".concat(isLoadingCitySearch, "\n    "));
    return (_jsx(Home, { selectedCity: selectedCity, city: city, allCities: allCities, previouslySelectedCities: previosulySelectcedCities, isLoadingCitySearch: isLoadingCitySearch, citySearchFetchError: citySearchFetchError, onCitySearchClick: onCitySearchClick, onPreviouslySelectedCityClick: onPreviouslySelectedCityClick, onCitySearchChange: onCitySearchChange }));
};
export { HomeContainer as Home };
//# sourceMappingURL=Home.js.map