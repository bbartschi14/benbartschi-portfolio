import { Link } from "react-router-dom";
import Icon from "./Blogs/Icon";

interface Props {
  text: string;
  path: string;
}
const ArrowButton = (props: Props) => {
  return (
    <Link
      to={props.path}
      className="BlogButtonRow-button u-noselect"
      style={{ display: "flex", flexDirection: "row", opacity: 0.75 }}
    >
      <div>
        <div>{props.text}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon type="arrowRight" style={{ fontSize: "24px", margin: "0px 12px 0px 24px" }} />
      </div>
    </Link>
  );
};

export default ArrowButton;
