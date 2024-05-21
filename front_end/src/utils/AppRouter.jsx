import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
import CreateNews from "../pages/CreateNews";
import AllNews from "../pages/AllNews";
import { Routes, Route, Link } from "react-router-dom";
import AllEvents from "../pages/AllEvents";
import CreateEvents from "../pages/CreateEvents";
import LoginPage from "../pages/LoginPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/news/create" element={<CreateNews />} />
      <Route path="/events/create" element={<CreateEvents />} />
      <Route path="/news/all" element={<AllNews />} />
      <Route path="/events/all" element={<AllEvents />} />
    </Routes>
  );
};

export default AppRouter;
