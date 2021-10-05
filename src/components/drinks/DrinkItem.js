import classes from "./DrinkItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function DrinkItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const isFavorite = favoriteCtx.isFavorite(props.id);

  function toggleFavorite() {
    if (isFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image: props.image,
        name: props.name,
        ingredients: props.ingredients,
        preparation: props.preparation,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <p>{props.preparation}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>{isFavorite ?'Remove from Favorites':'Add to Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default DrinkItem;
