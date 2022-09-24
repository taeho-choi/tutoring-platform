import "./App.css";
import { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import MainPage from "./MainPage";
import SideMenu from "./SideMenu";
import Teacher from "./Teacher";
import TeacherContent from "./TeacherContent";
import TeacherSideMenu from "./TeacherSideMenu";
import RightMenu from "./RightMenu";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  // firebase
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <SideMenu />
              <MainPage />
            </>
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <>
              <LoginPage />
            </>
          )}
        />
        <Route
          exact
          path="/signup"
          render={() => (
            <>
              <SignUp />
            </>
          )}
        />
        <Route
          exact
          path="/teacher"
          render={() => (
            <>
              {!isLoggedIn ? (
                <>
                  <Teacher
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                </>
              ) : (
                <>
                  <TeacherSideMenu />
                  <RightMenu />
                  <Teacher
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                  <TeacherContent />
                </>
              )}
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
