import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";

function AllEvents() {
  const [users, setUser] = useState([]);

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
      <section class="main">
        <section class="main-course">
          <div class="main-top">
            <h1>All Events (count = {users.length})</h1>
          </div>
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

export default AllEvents;
