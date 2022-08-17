import "./Header.scss";
import bell_icon from "./../../svg/notification-bell.svg";
export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__brand">
        <div className="Header__brand--logo"></div>
        <h1 className="Header__brand--text">Dazzie</h1>
      </div>

      <div className="Header__profile">
        <div className="Header__profile--notification-icon">
          <img src={bell_icon} alt="Notification Bell" />
        </div>
        <div className="Header__profile--user">
          <div className="Header__profile--user-image"></div>
          <div className="Header__profile--user-info">
            <div className="Header__profile--user-info-name">Sumanto</div>
            <div className="Header__profile--user-info-job">Cashier</div>
          </div>
        </div>
      </div>
    </div>
  );
};
