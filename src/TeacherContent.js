import "./TeacherContent.css";
import { Link } from "react-router-dom";

const TeacherContent = () => {
  return (
    <div className="TeacherContent">
      <div className="paddingBox"></div>
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
      <div className="teacherInfo">
        <img src="img/myPhoto.png" />
        <div className="name">Taeho Choi</div>
        <div className="job">Web Developer</div>
        <div className="about">About</div>
        <div className="aboutDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <div className="testContainer">
        <div className="zoomCode">
          <div className="cardName">ZOOM CODE</div>
          <hr />
          <div className="lesson">
            <div className="lessonName">Lesson 1</div>
            <hr id="zoomHr" />
            <div className="lessonCode">ID : 1bbu3u2kbb1</div>
            <div className="lessonPw">PW : aaa123</div>
          </div>
        </div>

        {/* teacherDetails */}
        <div className="teacherDetails">
          <div className="cardName">Teacher Details</div>
          <hr />
          <div className="detailsContainerLeft">
            <div className="detailsName">Country</div>
            <div className="detailsDesc">South Korea</div>
            <div className="detailsName">Country</div>
            <div className="detailsDesc">South Korea</div>
          </div>
          <div className="detailsContainerRight">
            <div className="detailsName">E-Mail</div>
            <div className="detailsDesc">taehodev@gmail.com</div>
            <div className="detailsName">E-Mail</div>
            <div className="detailsDesc">taehodev@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherContent;
