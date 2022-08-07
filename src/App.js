import "./App.css";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          exact
          path="/"
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
