import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter.jsx";
import Header from "./Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter></BrowserRouter>
  </React.StrictMode>
);
