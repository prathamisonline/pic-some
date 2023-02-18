import { useContext } from "react";
import React from "react";
import Image from "../Component/Image";
import { getClass } from "../Utils";
import { Context } from "../Context";

const Images = () => {
  const { allPhotos } = useContext(Context);
  // console.log(allPhotos);
  const imageElements = allPhotos.map((img, index) => (
    <Image key={img.id} className={getClass(index)} img={img} />
  ));
  return <main className="photos">{imageElements}</main>;
};

export default Images;
