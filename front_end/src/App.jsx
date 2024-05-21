// // App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./utils/Header";
import AppRouter from "./utils/AppRouter";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import CreateNews from "./pages/CreateNews";
import CreateEvents from "./pages/CreateEvents";
import AllNews from "./pages/AllNews";
import AllEvents from "./pages/AllEvents";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/news/create" element={<CreateNews />} />
        <Route path="/events/create" element={<CreateEvents />} />
        <Route path="/news/all" element={<AllNews />} />
        <Route path="/events/all" element={<AllEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
