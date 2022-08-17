import { ReactComponent as SearchIcon } from "./../../svg/SEARCH.svg";
import "./Search.scss";
export const Search = () => {
  return (
    <div className="Search">
      <div className="Search__input--wrapper">
        <SearchIcon className="Search__input--wrapper-icon" />
        <input
          type="text"
          className="Search__input"
          placeholder="Search Here..."
        />
      </div>
    </div>
  );
};
