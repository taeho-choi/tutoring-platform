import "./TeacherSideMenu.css";
import { Link } from "react-router-dom";

const TeacherSideMenu = () => {
  return (
    <div className="TeacherSideMenu">
      <div className="box">
        <div className="info">
          <div className="profile">
            <img id="profileImg" src="img/profile.jpg" />
            <div className="name">Taeho Choi</div>
          </div>
          <div className="Menu">
            <div className="MenuButton">
              <i class="fa-regular fa-file fa-fw"></i>　Profile
            </div>
            <div className="MenuButton">
              <i class="fa-regular fa-pen-to-square fa-fw"></i>　Classes
            </div>
            <div className="MenuButton">
              <i class="fa-regular fa-comments fa-fw"></i>　Messages
            </div>
            <div className="MenuButton">
              <i class="fa-regular fa-calendar-days fa-fw"></i>　Schedule
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSideMenu;
