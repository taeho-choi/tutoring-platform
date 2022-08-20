import "./Teacher.css";
import { Link } from "react-router-dom";

const Teacher = () => {
  return (
    <div className="Teacher">
      <div className="topArea">
        <div className="logo">LOGO</div>
        <div className="pageInfo">|　Teacher</div>
        <div className="hello">
          Hello, <a>TaehoChoi</a>
        </div>
      </div>
      <div className="bg">
        <div className="box">
          <img id="profile" src="img/profile.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
