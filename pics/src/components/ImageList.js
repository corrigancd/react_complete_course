import "./ImageList.css";
import React from "react";

import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}></ImageCard>;
  });

  return (
    <div>
      <div>ImageList</div>
      <div className="image-list">{images}</div>
      <br></br>
      <div>Found: {images.length} images </div>
    </div>
  );
};

export default ImageList;
