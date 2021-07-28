import React from "react";

import "./menue-items.style.scss";

const MenueItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span classname="subitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenueItem;
