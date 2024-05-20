import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../src/App";
import CreateNews from "../src/pages/CreateNews";
import AllNews from "../src/pages/AllNews";
import { Routes, Route, Link } from "react-router-dom";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<App />} />
      <Route path="/news/create" element={<CreateNews />} />
      <Route path="/news/all" element={<AllNews />} />
    </Routes>
  );
};

export default AppRouter;
