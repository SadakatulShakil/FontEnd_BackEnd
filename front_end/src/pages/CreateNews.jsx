import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import logo from "../assets/admin_logo.png";
import axios from "axios";
import { useEffect } from "react";

function CreateNews() {
  const [users, setUser] = useState([]);
  const [products, setProduct] = useState([]);
  const [showNewsNav, setShowNewsNav] = useState(false);

  const toggleNewsNav = () => {
    setShowNewsNav(!showNewsNav);
  };

  useEffect(() => {
    console.log("test2");
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        console.log({ res: response });
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("test1");
    axios
      .get("http://localhost:3000/api/users/all")
      .then((response) => {
        console.log({ res: response });
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <a>
              <i class="fas fa-home"></i>
              <span class="nav-item">Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-user"></i>
              <span class="nav-item">Profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-wallet"></i>
              <span class="nav-item">Events</span>
            </a>
          </li>
          <li onClick={toggleNewsNav}>
            <a>
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">News</span>
            </a>
            {showNewsNav && <NewsNavigation />}
          </li>
          <li>
            <a>
              <i class="fas fa-tasks"></i>
              <span class="nav-item">Members</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-cog"></i>
              <span class="nav-item">Settings</span>
            </a>
          </li>
          <li>
            <a>
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help</span>
            </a>
          </li>
          <li>
            <a class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>

      <section class="main-course">
        <div class="main-top">
          <h1>Summery</h1>
          <i class="fas fa-user-cog"></i>
        </div>
        <div class="main-skills">
          <div class="card">
            <i class="fas fa-users"></i>
            <h3>Total members</h3>
            <h5>{users.length}</h5>
          </div>
          <div class="card">
            <i class="fas fa-chart-bar"></i>
            <h3>Total news</h3>
            <h5>120</h5>
          </div>
          <div class="card">
            <i class="fas fa-wallet"></i>
            <h3>Total Events</h3>
            <h5>120</h5>
          </div>
          <div class="card">
            <i class="fas fa-tasks"></i>
            <h3>Total Products</h3>
            <h5>{products.length}</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateNews;
