import "./TeacherContent.css";
import { Link } from "react-router-dom";

const TeacherContent = () => {
  return (
    <div className="TeacherContent">
      <div className="paddingBox"></div>
      <div className="teacherInfo">
        <img src="img/myPhoto.png" />
        <div className="name">Taeho Choi</div>
      </div>
      <div className="testContainer">
        <div className="testBox1"></div>
        <div className="testBox2"></div>
      </div>
      <div className="teacherInfo"></div>
    </div>
  );
};

export default TeacherContent;
