import React from "react";

const NewsNavigation = () => {
  return (
    <div className="news-nav">
      <ul>
        <li>
          <a href="/news/create">Create News</a>
        </li>
        <li>
          <a href="/news/all">All News</a>
        </li>
      </ul>
    </div>
  );
};

export default NewsNavigation;
