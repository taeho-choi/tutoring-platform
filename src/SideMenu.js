import "./SideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="TopArea">
        <div className="Logo">LOGO</div>
        <Link to="/login">
          <button className="StudentLogin">Student Login</button>
        </Link>
        <Link to="/login">
          <button className="ElseLogin">Parent Login</button>
        </Link>
        <Link to="/login">
          <button className="ElseLogin">Teacher Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
