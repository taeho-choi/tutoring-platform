import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import SideMenu from "./SideMenu";
import Teacher from "./Teacher";
import TeacherContent from "./TeacherContent";
import TeacherSideMenu from "./TeacherSideMenu";

function App() {
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
          path="/teacher"
          render={() => (
            <>
              <Teacher />
              <TeacherSideMenu />
              <TeacherContent />
            </>
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
