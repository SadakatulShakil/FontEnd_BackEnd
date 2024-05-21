import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/admin_logo.png";
import NewsNavigation from "./NewsNavigation";
import EventsNavigation from "./EventsNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";

function Header() {
  const [showNewsNav, setShowNewsNav] = useState(false);
  const [showEventsNav, setShowEventsNav] = useState(false);

  const toggleNewsNav = () => {
    setShowNewsNav(!showNewsNav);
  };
  const toggleEventsNav = () => {
    setShowEventsNav(!showEventsNav);
  };

  return (
    <div class="container">
      <nav>
        <ul>
          <li>
            <a class="logo">
              <img src={logo} alt=""></img>
              <span class="nav-item">Shark</span>
            </a>
          </li>
          <li onClick={"/dashboard"}>
            <a href="/dashboard">
              <i class="fas fa-home"></i>
              <span class="nav-item">Dashboard</span>
            </a>
          </li>
          <li onClick={"/profile"}>
            <a href="/profile">
              <i class="fas fa-user"></i>
              <span class="nav-item">Profile</span>
            </a>
          </li>
          <li onClick={toggleEventsNav}>
            <a href="#">
              <i class="fas fa-wallet"></i>
              <span class="nav-item">Events</span>
            </a>
            {showEventsNav && <EventsNavigation />}
          </li>

          <li onClick={toggleNewsNav}>
            <a href="#">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">News</span>
            </a>
            {showNewsNav && <NewsNavigation />}
          </li>
          <li onClick={"/members"}>
            <a href="/members">
              <i class="fas fa-tasks"></i>
              <span class="nav-item">Members</span>
            </a>
          </li>
          <li onClick={"/settings"}>
            <a href="/settings">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Settings</span>
            </a>
          </li>
          <li onClick={"/help"}>
            <a href="/help">
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help</span>
            </a>
          </li>
          <li onClick={"/help"}>
            <a href="#" class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
