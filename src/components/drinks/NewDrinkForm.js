import Card from "../ui/Card";
import classes from "./NewDrinkForm.module.css";
import { useRef } from "react";

function NewDrinkForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const ingredientsInputRef = useRef();
  const preparationInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredIngredients = ingredientsInputRef.current.value;
    const enteredPreparation = preparationInputRef.current.value;
    const drinkData ={
        name:enteredName,
        image:enteredImage,
        ingredients:enteredIngredients,
        preparation:enteredPreparation
    } ;
    props.onAddDrink(drinkData);
   
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Drink name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Drink image</label>
          <input type="text" required id="image" ref={imageInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="ingredients">Drink ingredients</label>
          <input type="text" required id="ingredients" ref={ingredientsInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="preparation">Drink preparation</label>
          <textarea type="text" required id="preparation" rows="5" ref={preparationInputRef}></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add drink</button>
        </div>
      </form>
    </Card>
  );
}
export default NewDrinkForm;
