import React from "react";

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      <h2>All News</h2>
      <ul>
        {news.map((newsItem) => (
          <li key={newsItem.id}>{newsItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
