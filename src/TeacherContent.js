import "./TeacherContent.css";
import { Link } from "react-router-dom";

const TeacherContent = () => {
  return (
    <div className="TeacherContent">
      <div className="paddingBox"></div>
      <div className="testContainer">
        <div className="profileContainer">
          <img src="img/profile.jpg" />
          <div id="name">Taeho Choi</div>
          <div id="test">2</div>
          <div id="test">4</div>
          <div id="test">35</div>
          <div id="test2">Classes</div>
          <div id="test2">Following</div>
          <div id="test2">Followers</div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <div className="cardFront">
              <div id="logo">LOGO</div> <div id="name">taeho choi</div>
              <i className="fas fa-mouse-pointer" id="cursor"></i>
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
                <i className="fa-brands fa-facebook fa-2x"></i>
                <i className="fa-brands fa-twitter fa-2x"></i>
                <i className="fa-brands fa-instagram fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="infoDiv">
        <i className="fa-solid fa-location-dot fa-fw"></i>　Seoul, South
        Korea(Republic of Korea)
        <br />
        <i className="fa-solid fa-school fa-fw"></i>　TECH UNIVERSITY OF KOREA
        <div className="major">
          <a id="hashTag">#GameEngineering</a> <a id="hashTag">#Front-end</a>
        </div>
      </div>

      <div className="zoomDiv">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Zoom</title>
          <path d="M4.585 13.607l-.27-.012H1.886l3.236-3.237-.013-.27a.815.815 0 00-.796-.796l-.27-.013H0l.014.27c.034.438.353.77.794.796l.27.013h2.43L.268 13.595l.014.269c.015.433.362.78.795.796l.27.013h4.046l-.014-.27c-.036-.443-.35-.767-.795-.795zm3.238-4.328h-.004a2.696 2.697 0 10.003 0zm1.141 3.841a1.619 1.619 0 11-2.289-2.288 1.619 1.619 0 012.289 2.288zM21.84 9.28a2.158 2.158 0 00-1.615.73 2.153 2.153 0 00-1.619-.732 2.148 2.148 0 00-1.208.37c-.21-.233-.68-.37-.949-.37v5.395l.27-.013c.45-.03.778-.349.796-.796l.013-.27v-1.889l.014-.27c.01-.202.04-.382.132-.54a1.078 1.079 0 011.473-.393 1.078 1.079 0 01.393.392c.093.16.12.34.132.54l.014.271v1.889l.013.269a.83.83 0 00.795.796l.27.013v-2.967l.012-.27c.01-.2.04-.384.134-.543.3-.514.96-.69 1.473-.39a1.078 1.079 0 01.393.393c.092.16.12.343.13.54l.015.27v1.889l.013.269c.028.443.35.77.796.796l.27.013v-3.237a2.158 2.158 0 00-2.16-2.156zm-10.263.788a2.697 2.698 0 103.811 3.816 2.697 2.698 0 00-3.811-3.816zm3.05 3.052a1.619 1.619 0 11-2.289-2.29 1.619 1.619 0 012.289 2.29z" />
        </svg>
        <div id="zoomId">ROOM CODE :</div>
        <a id="id">1b3bo98hf9hfwn3b</a>
        <div id="zoomPw">PASSWORD :</div>
        <a id="pw">passwordpassword</a>
      </div>

      <hr id="pageHr" />

      <div className="classesDiv">
        <div id="title">My Classes</div>
        <div className="class">
          <div className="classInfo"></div>
        </div>
        <div className="class">
          <div className="classInfo"></div>
        </div>
        <div className="class">
          <div className="classInfo"></div>
        </div>
        <div className="class">
          <div className="classInfo"></div>
        </div>
      </div>
    </div>
  );
};

export default TeacherContent;
