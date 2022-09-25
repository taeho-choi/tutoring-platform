import "./App.css";
import { useState, useEffect } from "react";
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
import { collection, doc, getDoc, query, getDocs } from "firebase/firestore";
import db from "./firestore";

function App() {
  useEffect(() => {
    console.log("App Effect");
    printData();
  }, []);

  // firebase
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sss, setSss] = useState(false);

  // get firestore Database
  const [data, setData] = useState(true);

  const initData = async () => {
    const q = query(collection(db, "users"));

    getDocs(q).then((res) => {
      res.forEach((doc) => {
        setData((prevData) => [doc.data(), ...prevData]);
        console.log(doc.data());
      });
    });
  };

  const initData2 = async () => {
    const docs = await getDocs(query(collection(db, "users")));

    docs.forEach((doc) => {
      console.log(doc.data());
      setData((prevData) => [doc.data(), ...prevData]);
      console.log(data);
    });
  };

  const printData = () => {
    console.log(sss);
    setSss(true).then(console.log("asd"));
    setTimeout(() => {
      console.log(sss);
    }, 2000);
  };

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
                    userData={data}
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
