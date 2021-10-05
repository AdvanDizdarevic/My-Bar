import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import DrinksList from "../components/drinks/DrinksList";

function FavouritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <h1 color="white">You have no favorites</h1>;
  } else {
    content = <DrinksList drinks={favoriteCtx.favorite} />;
  }

  return (
    <section>
      <h1 color="white">Favourite Drinks Page</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
