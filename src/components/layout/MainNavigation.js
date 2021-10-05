import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation(param) {

    const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
        <img src='./martini.png' alt='logo'/>
      <nav>
        <ul>
          <li>
            <Link to="/">All Drinks</Link>
          </li>
          <li>
            <Link to="/new-drink">Add New Drink</Link>
          </li>
          <li>
            <Link to="/favourites"> Favourites <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
