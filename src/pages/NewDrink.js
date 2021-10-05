import NewDrinkForm from "../components/drinks/NewDrinkForm";
import { useHistory } from "react-router-dom";

function NewDrinkPage() {
  const history = useHistory();
  function addDrinkHandler(drinkData) {
    // console.log(drinkData);
    fetch(
      "https://react-my-bar-4e5f5-default-rtdb.firebaseio.com/drinks.json",
      {
        method: "POST",
        body: JSON.stringify(drinkData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1 color="white">New Drinks Page</h1>
      <NewDrinkForm onAddDrink={addDrinkHandler} />
    </section>
  );
}

export default NewDrinkPage;
