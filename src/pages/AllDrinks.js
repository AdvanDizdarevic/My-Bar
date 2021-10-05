import DrinksList from "../components/drinks/DrinksList";
import { useState, useEffect } from "react";

function AllDrinksPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDrinks, setLoadedDrinks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-my-bar-4e5f5-default-rtdb.firebaseio.com/drinks.json")
      .then((response) => {

        return response.json();
      }).then((data) => {
        
        const drinks = [];
        for (const key in data) {
          const drink = {
            id: key,
            ...data[key],
          };
          console.log(drink);
          drinks.push(drink);
        }
        
        setIsLoading(false);
        setLoadedDrinks(drinks);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      {/* <h1>All drinks page</h1> */}
     
      <DrinksList drinks={loadedDrinks} />
    </section>
  );
}

export default AllDrinksPage;
