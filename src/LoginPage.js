import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginBox">
        <div className="Logo">Sign in</div>
        <input placeholder="ID"></input>
        <input placeholder="Password" type={"password"}></input>
        <button className="loginBtn">Sign in</button>
      </div>
    </div>
  );
};

export default LoginPage;
