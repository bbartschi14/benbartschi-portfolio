import "./BlogInlineLink.css";
import Icon from "./Icon";

interface Props {
  path: string;
  children?: React.ReactNode;
}

const BlogInlineLink = (props: Props) => {
  return (
    <a href={props.path} target={"_blank"} className="BlogInlineLink-wrapper">
      {props.children}
      <Icon type="externalLink" style={{ marginLeft: "4px" }} />
    </a>
  );
};

export default BlogInlineLink;
