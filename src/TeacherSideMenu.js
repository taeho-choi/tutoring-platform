import "./TeacherSideMenu.css";
import { Link } from "react-router-dom";

const TeacherSideMenu = () => {
  return (
    <div className="TeacherSideMenu">
      <div className="box">
        <div className="info">
          <div className="profile">
            <img id="profileImg" src="img/myPhoto.png" />
            <div className="name">Taeho Choi</div>
            <div className="introduce">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="follow">Follow</div>
          </div>
          <div className="Menu">
            <div className="MenuButton">📞 Something</div>
            <div className="MenuButton">📃 Something</div>
            <div className="MenuButton">📁 Something</div>
            <div className="MenuButton">🔑 Something</div>
            <div className="MenuButton">🎧 Something</div>
            <div className="MenuButton">🥇 Something</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSideMenu;
