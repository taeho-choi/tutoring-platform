import "./SignUp.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const history = useHistory();

  const onSignUp = async () => {
    if (idRef.current.value === "") {
      alert("아이디를 입력하세요.");
      return;
    }

    if (pwRef.current.value === "") {
      alert("비밀번호를 입력하세요.");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      idRef.current.value,
      pwRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.replace("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (error.code === "auth/invalid-email") {
          alert("유효하지 않은 이메일입니다.");
        } else if (error.code === "auth/email-already-in-use") {
          alert("이미 가입된 이메일입니다.");
        } else {
          alert(errorCode);
        }
      });
  };

  const onPressEnter = (e) => {
    if (e.key == "Enter") {
      onSignUp();
    }
  };

  return (
    <div className="SignUp">
      <div className="SignUpBox">
        <div className="Logo">Sign Up</div>
        <input placeholder="ID" ref={idRef} onKeyPress={onPressEnter}></input>
        <input
          placeholder="Password"
          type={"password"}
          ref={pwRef}
          onKeyPress={onPressEnter}
        ></input>
        <button className="signUpBtn" onClick={onSignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
