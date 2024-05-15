import { useState } from "react";
import reactLogo from "./assets/react.svg";
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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Wellcome to Shakil's Project</h1>
      <p>Total Products: {products.length}</p>
      <div className="card-container">
        {products.map((product) => (
          <div key={product._id} className="card">
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
