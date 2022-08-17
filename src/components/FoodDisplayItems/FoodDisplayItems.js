import { FoodDisplayItem } from "../FoodDisplayItem/FoodDisplayItem";
import "./FoodDisplayItems.scss";
export const FoodDisplayItems = (props) => {
  const foodType = props.foodType;
  const foodItems = props.foodItems;
  return (
    <div className="FoodDisplayItems">
      {/* Heading for food category */}
      <h1 className="FoodDisplayItems__foodType">{foodType}</h1>
      {/* Div with all food products belonging to given category */}
      <div className="FoodDisplayItems__grid">
        {foodItems.map((foodItem) => (
          <FoodDisplayItem key={foodItem.name} foodItem={foodItem} />
        ))}
      </div>
    </div>
  );
};
