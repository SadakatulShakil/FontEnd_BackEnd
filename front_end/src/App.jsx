import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./assets/admin_logo.png";
import icon from "./assets/user.png";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    console.log("test");
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
  return (
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="#" class="logo">
              <img src={logo} alt=""></img>
              <span class="nav-item">Shark</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-home"></i>
              <span class="nav-item">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="">
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
          <li>
            <a href="">
              <i class="fas fa-chart-bar"></i>
              <span class="nav-item">News</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-tasks"></i>
              <span class="nav-item">Members</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Settings</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help</span>
            </a>
          </li>
          <li>
            <a href="" class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>

      <section class="main">
        <div class="main-top">
          <h1>Summery</h1>
          <i class="fas fa-user-cog"></i>
        </div>
        <div class="main-skills">
          <div class="card">
            <i class="fas fa-users"></i>
            <h3>Total members</h3>
            <h5>120</h5>
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
            <h3>New member today</h3>
            <h5>120</h5>
          </div>
        </div>

        <section class="main-course">
          <h1>My courses</h1>
          <div class="course-box">
            <div className="product-list">
              <div className="title">
                <span>Name</span>
                <span>Price</span>
                <span>Action</span>
              </div>
              <div className="list">
                {products.map((product) => (
                  <div key={product._id} className="product">
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                    <span>
                      <button>Buy Now</button>
                    </span>{" "}
                    {/* Assuming this is your "buy" icon */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
