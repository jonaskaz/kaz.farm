import { useState, useEffect } from "react";
import API from "../api";

export const useGalleryFetch = () => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    let imgs = await API.getImages();
    setImages(imgs.data.images);
  };
  useEffect(() => {
    getImages();
  }, []);
  return images;
};
