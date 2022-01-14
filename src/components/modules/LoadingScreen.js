import "./LoadingScreen.css";

const LoadingScreen = (props) => {
  return (
    <div className="LoadingScreen-wrapper">
      <p>Preparing scene</p>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
