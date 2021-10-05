import DrinkItem from "./DrinkItem";
import classes from "./DrinksList.module.css";
function DrinksList(props) {
    console.log(props);
  return (
    <ul className={classes.list}>
      {props.drinks.map((drink) => (
        <DrinkItem
          key={drink.id}
          id={drink.id}
          image={drink.image}
          name={drink.name}
          ingredients={drink.ingredients}
          preparation={drink.preparation}
        />
      ))}
    </ul>
  );
}
export default DrinksList;
