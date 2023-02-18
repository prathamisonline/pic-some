import React from "react";
import { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    );
    const data = await res.json();
    setAllPhotos(data);
  };

  useEffect(() => {
    getData();
  }, []);

  function toggleFavorite(id) {
    const newArrayPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);

        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(newArrayPhotos);
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
