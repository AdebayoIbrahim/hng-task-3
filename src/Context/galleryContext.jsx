import React, { createContext, useState } from "react";
const GalleryContext = createContext();
export const GalleryContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  //   const [authenticate, setAuth] = useState(false);

  return (
    <GalleryContext.Provider value={{ user, setUser }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryContext;
