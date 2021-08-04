import React from "react";
import "./gallery.css";
import Image from "./image";

function importAll(images) {
  return images.keys().map(images);
}

const gallery = importAll(require.context('../images/pics/', false, /\.png$/));
// console.log(gallery[0]);

const Gallery = () => {
  return (
    <div className="gallery">
      {gallery.map((image) => {
        return <Image key={image.default} image={image}></Image>
      })}
    </div>
  );
};
export default Gallery;
