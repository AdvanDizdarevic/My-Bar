import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import AllDrinksPage from "./pages/AllDrinks";
import FavouritesPage from "./pages/Favourite";
import NewDrinkPage from "./pages/NewDrink";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllDrinksPage />
        </Route>
        <Route path="/new-drink">
          <NewDrinkPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
