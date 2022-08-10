import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginBox">
        <div className="Logo">PROJECT_NAME</div>
        <input placeholder="ID"></input>
        <input placeholder="Password"></input>
        <button className="loginBtn">Sign in</button>
      </div>
    </div>
  );
};

export default LoginPage;
