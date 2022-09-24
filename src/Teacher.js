import "./Teacher.css";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const Teacher = ({ isLoggedIn, setIsLoggedIn }) => {
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

  const onSignOut = () => {
    signOut(getAuth());
    history.replace("/");
  };

  const needSignIn = () => {
    history.replace("/");
  };

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
                Hello, {getAuth().currentUser.email}{" "}
                <a onClick={onSignOut}>SignOut</a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Teacher;
