import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";
const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite } = useContext(Context);
  return (
    <div className={`${className} image-container`}>
      <img
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        alt="images"
        src={img.url}
        className="image-grid"
      />
      {hovered && (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      )}
      {hovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
};

export default Image;
