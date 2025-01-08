import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Home } from "Containers/Home";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route>404: Page not found</Route>
    </Routes>
  </BrowserRouter>
);
