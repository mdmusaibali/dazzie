import "./FoodItemsFilter.scss";
export const FoodItemsFilter = (props) => {
  const changeFilterHandler = (filter) => {
    props.onChangeFilter(filter);
  };
  return (
    <div className="FoodItemsFilter">
      <ul className="FoodItemsFilter__list">
        <li
          onClick={changeFilterHandler.bind(null, "All")}
          className={props.currentFilter === "All" ? "FoodItemActive" : ""}
        >
          All
        </li>
        <li
          onClick={changeFilterHandler.bind(null, "Food")}
          className={props.currentFilter === "Food" ? "FoodItemActive" : ""}
        >
          Food
        </li>
        <li
          onClick={changeFilterHandler.bind(null, "Drinks")}
          className={props.currentFilter === "Drinks" ? "FoodItemActive" : ""}
        >
          Drinks
        </li>
        <li
          onClick={changeFilterHandler.bind(null, "Snacks")}
          className={props.currentFilter === "Snacks" ? "FoodItemActive" : ""}
        >
          Snacks
        </li>
        <li
          onClick={changeFilterHandler.bind(null, "Packages")}
          className={props.currentFilter === "Packages" ? "FoodItemActive" : ""}
        >
          Packages
        </li>
      </ul>
    </div>
  );
};
