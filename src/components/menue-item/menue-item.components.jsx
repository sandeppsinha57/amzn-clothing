import React from "react";

import { withRouter } from "react-router-dom";

import "./menue-items.style.scss";

const MenueItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenueItem);
