import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";

// Function to truncate content string to a maximum number of words
function truncateContent(content, maxWords) {
  const words = content.split(" ");
  if (words.length <= maxWords) {
    return content;
  }
  const truncatedWords = words.slice(0, maxWords);
  return `${truncatedWords.join(" ")}...`;
}

function AllNews() {
  const [news, setNews] = useState([]);
  const maxContentWords = 10;
  useEffect(() => {
    console.log("test1");
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
      <section class="main">
        <section class="main-course">
          <div class="main-top">
            <h1>All News ({news.length})</h1>
          </div>
          <div class="course-box">
            <div className="product-list">
              <div className="title">
                <span>Title</span>
                <span>author</span>
                <span>Content</span>
                <span>Action</span>
              </div>
              <div className="list">
                {news.map((allNews) => (
                  <div key={allNews._id} className="product">
                    <span>{allNews.title}</span>
                    <span>{allNews.author}</span>
                    <span>
                      {truncateContent(allNews.content, maxContentWords)}
                    </span>
                    <span>
                      <button>Details</button>
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

export default AllNews;
