import { BlogButton } from "./BlogsTypes";
import "./BlogButtonRow.css";
import { Link } from "react-router-dom";
import Icon from "./Icon";

interface Props {
  buttons: Array<BlogButton>;
}

const BlogButtonRow = (props: Props) => {
  return (
    <div className="BlogButtonRow-wrapper">
      {props.buttons.map((button, i) => {
        const interior: JSX.Element = (
          <>
            {button.text}
            <Icon key={i} type={button.iconType} style={{ marginLeft: "12px" }} />
          </>
        );
        return button.linkTo[0] == "/" ? (
          <Link key={i} to={button.linkTo} className="BlogButtonRow-button u-noselect">
            {interior}
          </Link>
        ) : (
          <a
            key={i}
            href={button.linkTo}
            target="_blank"
            className="BlogButtonRow-button u-noselect"
          >
            {interior}
          </a>
        );
      })}
    </div>
  );
};

export default BlogButtonRow;
