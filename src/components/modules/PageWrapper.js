import "./PageWrapper.css";

const PageWrapper = (props) => {
  return (
    <>
      <div className="PageWrapper">
        <div
          className="PageWrapper-inner"
          style={props.maxWidth ? { maxWidth: props.maxWidth } : {}}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default PageWrapper;
