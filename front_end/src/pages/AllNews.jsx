import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import logo from "../assets/admin_logo.png";
import axios from "axios";
import { useEffect } from "react";

function AllNews() {
  const [users, setUser] = useState([]);
  const [showNewsNav, setShowNewsNav] = useState(false);

  const toggleNewsNav = () => {
    setShowNewsNav(!showNewsNav);
  };

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
            <a href="/dashboard">
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
        <h1>All News (count = {users.length})</h1>
        <div class="course-box">
          <div className="product-list">
            <div className="title">
              <span>Name</span>
              <span>Email</span>
              <span>Phone</span>
              <span>Action</span>
            </div>
            <div className="list">
              {users.map((user) => (
                <div key={user._id} className="product">
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                  <span>
                    <button>Action</button>
                  </span>{" "}
                  {/* Assuming this is your "buy" icon */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllNews;
