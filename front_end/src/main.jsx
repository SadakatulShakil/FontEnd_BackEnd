import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter.jsx";
import CreateNews from "./pages/CreateNews.jsx";
import AllNews from "./pages/AllNews.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    <h1>Footer</h1>
  </React.StrictMode>
);
