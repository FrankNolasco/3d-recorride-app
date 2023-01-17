import React from "react";

const useLoaderImagesArray = () => {
  const [images, setImages] = React.useState([]);
  const loadImages = (src, size, mimeType) => {
    const imagesArray = [];
    for (let i = 1; i <= size; i++) {
      const image = new Image();
      image.src = `${src}${i}${mimeType}`;
      image.onload = () => {
        imagesArray[i] = image;
      };
    }
    setImages(imagesArray);
  };

  return [images, loadImages];
};

export default useLoaderImagesArray;
