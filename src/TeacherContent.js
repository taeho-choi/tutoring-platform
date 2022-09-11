import "./TeacherContent.css";
import { Link } from "react-router-dom";

const TeacherContent = () => {
  return (
    <div className="TeacherContent">
      <div className="paddingBox"></div>
      <div className="testContainer">
        <div className="profileContainer">
          <img src="img/myPhoto.png" />
          <div id="name">Taeho Choi</div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <div className="cardFront">
              <div id="logo">LOGO</div> <div id="name">taeho choi</div>
              <i class="fas fa-mouse-pointer" id="cursor"></i>
            </div>
            <div className="cardBack">
              <div id="logo">LOGO</div>
              <div id="nameKor">
                최태호<a>Web Developer</a>
              </div>
              <div id="nameEng">TAEHO CHOI</div>
              <div id="describe">
                Ｍ　+82 010-2737-8623
                <br />
                Ｅ　abcabc123@naver.com
                <br />
                Ｃ　HTML/CSS, JavaScript, TypeScript
              </div>
              <hr></hr>

              <div className="icons">
                <i class="fa-brands fa-facebook fa-2x"></i>
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="teacherInfo">
        <div className="name">Taeho Choi</div>
        <div className="job">Web Developer</div>
        <div className="about">About</div>
        <div className="aboutDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </div>
  );
};

export default TeacherContent;
