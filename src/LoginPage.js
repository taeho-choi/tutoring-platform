import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginBox">
        <div className="Logo">Sign in</div>
        <input placeholder="ID"></input>
        <input placeholder="Password" type={"password"}></input>
        <Link to="/">
          <button className="loginBtn">Sign in</button>
        </Link>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
};

export default LoginPage;
