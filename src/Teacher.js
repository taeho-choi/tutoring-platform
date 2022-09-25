import "./Teacher.css";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import db from "./firestore";
import app from "./firebase";

const Teacher = ({ isLoggedIn, setIsLoggedIn, userData }) => {
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        needSignIn();
      }
    });
  }, []);

  // Auth
  const onSignOut = () => {
    signOut(getAuth());
    history.replace("/");
  };

  const needSignIn = () => {
    history.replace("/");
  };

  // Firestore
  const docRef = doc(db, "users", "x145789@naver.com");

  return (
    <div className="Teacher">
      {!isLoggedIn ? (
        <></>
      ) : (
        <>
          {" "}
          <div className="topArea">
            <Link to="/">
              <div className="logo">LUA</div>
            </Link>
            <input id="search" placeholder="Search classes"></input>

            {!isLoggedIn ? (
              <div className="hello">invalid user</div>
            ) : (
              <div className="hello">
                Hello, {userData[0].name} <a onClick={onSignOut}>SignOut</a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Teacher.defaultProps = {
  userData: [{ name: "temp" }],
};

export default Teacher;
