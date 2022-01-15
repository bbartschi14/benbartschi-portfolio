import "./LoadingScreen.css";
import logo from "../../resources/logo512.png";
const LoadingScreen = (props) => {
  return (
    <div className="LoadingScreen-wrapper">
      <img src={logo} className="LoadingScreen-logo"></img>

      <p>Preparing scene</p>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
