import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../utils/Header";

function CreateNews() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for empty submission
    if (!title || !author || !content) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    // Call the add news API
    axios
      .post("http://localhost:3000/api/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        toast.success("News added successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTitle("");
        setAuthor("");
        setContent("");
        setImage(null);
      })
      .catch((error) => {
        console.log(error);
        setSuccessMessage("");
      });
  };

  return (
    <div className="container">
      <Header />
      <section className="main">
        <div className="main-top">
          <h1>Create News</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              placeholder="Enter author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              placeholder="Enter content (max 500 words)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={500}
              required
            />
          </div>

          <div>
            <label htmlFor="image">Image (optional):</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
      </section>
      <ToastContainer />
    </div>
  );
}

export default CreateNews;
