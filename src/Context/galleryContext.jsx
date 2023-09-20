import React, { createContext, useState } from "react";
import { Images } from "../data/images";
const GalleryContext = createContext();
export const GalleryContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [images, setImages] = useState(Images);
  //   const [authenticate, setAuth] = useState(false);
  //searchvalue
  const Search = (value) => {
    const filtered = images.filter((img) => {
      return img.tags[0].includes(value);
    });
    console.log(filtered);
    setImages(filtered);
  };

  return (
    <GalleryContext.Provider
      value={{ user, setUser, images, setImages, Search }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
