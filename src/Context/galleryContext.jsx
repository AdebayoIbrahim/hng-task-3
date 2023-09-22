import React, { createContext, useState } from "react";
import { Images } from "../data/images";
const GalleryContext = createContext();
export const GalleryContextProvider = ({ children }) => {
  const [images, setImages] = useState(Images);
  //   const [authenticate, setAuth] = useState(false);
  //searchvalue
  const Search = (value) => {
    const filtered = images.filter((img) => {
      return img.tags[0]
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase());
    });
    console.log(filtered);
    setImages(filtered);
  };

  return (
    <GalleryContext.Provider value={{ images, setImages, Search }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
