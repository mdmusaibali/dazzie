import "./NavigationBar.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as UserIcon } from "./../../svg/user.svg";
import { ReactComponent as DiscountCouponIcon } from "./../../svg/discount-coupon.svg";
import { ReactComponent as PackageIcon } from "./../../svg/Package.svg";
import { ReactComponent as CustomerIcon } from "./../../svg/customer.svg";
import { ReactComponent as OrdersIcon } from "./../../svg/orders.svg";
import { ReactComponent as SettingsIcon } from "./../../svg/seettings.svg";
export const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      {/* NavLinks leads to change in route. */}
      <ul className="NavigationBar__list">
        <li className="NavigationBar__list-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            {/* <AllProducts__icon /> */}
            {<UserIcon />}
          </NavLink>
        </li>

        <li className="NavigationBar__list-item">
          <NavLink
            to="/packages"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            <PackageIcon />
          </NavLink>
        </li>

        <li className="NavigationBar__list-item">
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            <OrdersIcon />
          </NavLink>
        </li>

        <li className="NavigationBar__list-item">
          <NavLink
            to="/customers"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            <CustomerIcon />
          </NavLink>
        </li>

        <li className="NavigationBar__list-item">
          <NavLink
            to="/discounts"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            <DiscountCouponIcon />
          </NavLink>
        </li>

        <li className="NavigationBar__list-item">
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            <UserIcon />
          </NavLink>
        </li>

        <li className="NavigationBar__list-item">
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "LinkActive" : "")}
          >
            <SettingsIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
