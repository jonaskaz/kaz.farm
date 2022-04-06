import React from "react";
import ImageGrid from "../components/ImageGrid";
import Thumb from "../components/Thumb";
import { useGalleryFetch } from "../hooks/useGalleryFetch";

const Gallery = () => {
  let images = useGalleryFetch();
  if (images.length == 0) {
    return <div>No images to display...</div>;
  }
  return (
    <ImageGrid
      header={"Image Gallery"}
      content={images.map((image) => (
        <Thumb
          image={image.image}
          title={image.title}
          description={image.description}
        ></Thumb>
      ))}
    />
  );
};

export default Gallery;
