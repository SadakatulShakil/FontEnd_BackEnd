import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";
import Header from "../utils/Header";

function CreateEvents() {
  const [users, setUser] = useState([]);
  const [products, setProduct] = useState([]);

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
      <Header />
      <section class="main">
        <div class="main-top">
          <h1>Create Events</h1>
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

export default CreateEvents;
