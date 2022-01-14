import "./Reel.css";

const Reel = (props) => {
  return (
    <>
      <div className="Reel-wrapper">
        <div className="video-outside">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/8kU8g1PfAvg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="Reel-video"
          />
        </div>
      </div>
    </>
  );
};

export default Reel;
