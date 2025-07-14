import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoritesIds, setFavoritesIds] = useState([]);

  function addFavorite(id) {
    setFavoritesIds((current) => [...current, id]);
    // console.log("pressed", id, favoritesIds);
  }

  function removeFavorite(id) {
    setFavoritesIds((current) => current.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoritesIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
