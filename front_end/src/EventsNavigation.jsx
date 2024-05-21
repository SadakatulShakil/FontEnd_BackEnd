import React from "react";

const EventsNavigation = () => {
  return (
    <div className="events-nav">
      <ul>
        <li>
          <a href="/news/create">Create Events</a>
        </li>
        <li>
          <a href="/news/all">All Events</a>
        </li>
      </ul>
    </div>
  );
};

export default EventsNavigation;
