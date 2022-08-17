import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";
import { FoodItemsFilter } from "../../components/FoodItemsFilter/FoodItemsFilter";
import { Search } from "../../components/Search/Search";

// Let's say we get this DUMMY data from the API
const DUMMY_FOOD_ITEMS_LIST = [
  {
    foodType: "Food",
    foodItems: [
      {
        name: "Sashimi",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/Sashimi.jpg",
      },
      {
        name: "Unagi - Grilled Eel",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/unagi.jpg",
      },
      {
        name: "Soba - Buckwheat Noodles",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/soba.jpg",
      },
      {
        name: "Onigiri - Rice Balls",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/onigiri.jpg",
      },
      {
        name: "Yakitori - Grilled Chicken",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/Yakitori.jpg",
      },
      {
        name: "Miso Soup",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/Miso Soup.jpg",
      },
    ],
  },
  {
    foodType: "Drinks",
    foodItems: [
      {
        name: "Amazake",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/amazake.jpg",
      },
      {
        name: "Royal Milk Tea",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/Royal Milk Tea.jpg",
      },
      {
        name: "Flavored Soyamilk Drinks",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/soya milk.jpg",
      },
    ],
  },
  {
    foodType: "Snacks",
    foodItems: [
      {
        name: "Egg puff",
        price: 1,
        trending: true,
        imageLoc: "./asset/img/egg puffs.jpg",
      },
    ],
  },
  {
    foodType: "Packages",
    foodItems: [
      {
        name: "Sashimi + Amazake",
        price: 44,
        trending: false,
        imageLoc: "./asset/img/combo.jpg",
      },
    ],
  },
];

export const FoodItems = () => {
  // State to manage current Filter such as All,Food, drinks and etc...
  const [selectedFilter, setSelectedFilter] = useState("All");

  //State to manage data recieved from api and data after filter is applied
  const [foodItemsList, setFoodItemsList] = useState(DUMMY_FOOD_ITEMS_LIST);

  //Function to apply filter. Filters API data array and sets filtered array as new state.
  const filterChangeHandler = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFoodItemsList(DUMMY_FOOD_ITEMS_LIST);
      return;
    }
    const newFoodItems = DUMMY_FOOD_ITEMS_LIST.filter(
      (item) => item.foodType === filter
    );
    setFoodItemsList(newFoodItems);
  };

  return (
    <Card>
      {/* search bar to get search result for food */}
      <Search />
      {/* filter bar to select filter */}
      <FoodItemsFilter
        onChangeFilter={filterChangeHandler}
        currentFilter={selectedFilter}
      />
      {/* Component to display filtered API data according to user filter */}
      <FoodDisplay foodItems={foodItemsList} />
    </Card>
  );
};
