import "./FoodDisplayItem.scss";
export const FoodDisplayItem = ({ foodItem }) => {
  console.log(foodItem);
  return (
    <div className={foodItem.trending ? "FoodTrending" : "FoodDisplayItem"}>
      <div className="FoodDisplayItem__image">
        <img src={foodItem.imageLoc} alt={`${foodItem.name}`} />
      </div>
      <div className="FoodDisplayItem__name">{foodItem.name}</div>
      <div className="FoodDisplayItem__price">${foodItem.price}</div>
    </div>
  );
};
