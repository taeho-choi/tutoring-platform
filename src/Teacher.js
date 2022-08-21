import "./Teacher.css";
import { Link } from "react-router-dom";

const Teacher = () => {
  return (
    <div className="Teacher">
      <div className="topArea">
        <div className="logo">LOGO</div>
        <div className="pageInfo">|　Teacher</div>
        <div className="hello">
          Hello, <a>Taeho Choi</a>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
