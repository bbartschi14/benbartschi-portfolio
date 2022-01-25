import { Link } from "react-router-dom";
import "./BlogInlineLink.css";
import Icon from "./Icon";

interface Props {
  path: string;
  children?: React.ReactNode;
  isRelative?: boolean;
}

const BlogInlineLink = (props: Props) => {
  return props.isRelative ? (
    <Link to={props.path} className="BlogInlineLink-wrapper">
      {props.children}
      <Icon type="externalLink" style={{ marginLeft: "4px" }} />
    </Link>
  ) : (
    <a href={props.path} target={"_blank"} className="BlogInlineLink-wrapper">
      {props.children}
      <Icon type="externalLink" style={{ marginLeft: "4px" }} />
    </a>
  );
};

export default BlogInlineLink;
