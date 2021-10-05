import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorite: [],
  totalFavorites: 0,
  addFavorite: (favoriteDrink) => {},
  removeFavorite: (drinkId) => {},
  isFavorite: (drinkId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteDrink) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteDrink);
    });
  }
  function removeFavoriteHandler(drinkId) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((drink) => drink.id !== drinkId);
    });
  }
  function itemIsFavoriteHandler(drinkId) {
    return userFavorites.some((drink) => drink.id === drinkId);
  }



  const context = {
    favorite: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
