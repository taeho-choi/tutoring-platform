import "./LoginPage.css";
import { useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const LoginPage = () => {
  const history = useHistory();
  const idRef = useRef();
  const pwRef = useRef();

  const signIn = async () => {
    if (idRef.current.value === "") {
      alert("아이디를 입력하세요.");
      return;
    }

    if (pwRef.current.value === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }

    const auth = getAuth();

    signInWithEmailAndPassword(auth, idRef.current.value, pwRef.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        history.replace("/teacher");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      });
  };

  const onPressEnter = (e) => {
    if (e.key == "Enter") {
      signIn();
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginBox">
        <div className="Logo">Teacher Login</div>
        <input placeholder="ID" ref={idRef} onKeyPress={onPressEnter}></input>
        <input
          placeholder="Password"
          type={"password"}
          ref={pwRef}
          onKeyPress={onPressEnter}
        ></input>
        <button className="loginBtn" onClick={signIn}>
          Sign in
        </button>

        <Link to="/signup">
          <button className="signup">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
