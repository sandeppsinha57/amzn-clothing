import React from "react";

import "./preview-collection.style.scss";

import CollectionItem from "../collection-item/collection-item.component";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otheItems }) => (
            <CollectionItem key={id} {...otheItems}></CollectionItem>
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
