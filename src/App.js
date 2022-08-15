import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          exact
          path="/"
          render={() => (
            <>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
