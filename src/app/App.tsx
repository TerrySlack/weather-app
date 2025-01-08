import "../tailwind.css";
import { AppRoutes } from "../routes";

import { Provider } from "react-redux";
import { store } from "../shared/store";
// Render the app
export const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
