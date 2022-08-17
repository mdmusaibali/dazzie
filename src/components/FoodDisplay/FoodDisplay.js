import { FoodDisplayItems } from "../FoodDisplayItems/FoodDisplayItems";
import "./FoodDisplay.scss";
export const FoodDisplay = (props) => {
  const foodItems = props.foodItems;
  return (
    // Splitting Food Display based on category. I.e showing foods with different categories.
    <div className="FoodDisplay">
      {foodItems.map((item) => (
        <FoodDisplayItems
          foodType={item.foodType}
          foodItems={item.foodItems}
          key={item.foodType}
        />
      ))}
    </div>
  );
};
