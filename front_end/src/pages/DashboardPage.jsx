import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import "../App.css";
import { useEffect } from "react";
import Header from "../utils/Header";

function DashboardPage() {
  const [users, setUser] = useState([]);
  const [news, setNews] = useState([]);

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

  useEffect(() => {
    console.log("test2");
    axios
      .get("http://localhost:3000/api/news")
      .then((response) => {
        console.log({ res: response });
        setNews(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div class="container">
      <Header />
      <section class="main">
        <div class="main-top">
          <h1>Dashboard</h1>
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
            <h5>{news.length}</h5>
          </div>
          <div class="card">
            <i class="fas fa-wallet"></i>
            <h3>Total Events</h3>
            <h5>120</h5>
          </div>
          <div class="card">
            <i class="fas fa-tasks"></i>
            <h3>Today Events</h3>
            <h5>2</h5>
          </div>
        </div>

        <section class="main-course">
          <h1>All Users</h1>
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
      </section>
    </div>
  );
}

export default DashboardPage;
