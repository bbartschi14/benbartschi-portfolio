import "./BlogCallout.css";
import Icon from "./Icon";

interface Props {
  icon: string;
  children?: React.ReactNode;
}

const BlogCallout = (props: Props) => {
  return (
    <div className="BlogCallout-wrapper">
      <Icon type={props.icon} style={{ fontSize: "24px" }} />
      <div className="BlogCallout-content">{props.children}</div>
    </div>
  );
};

export default BlogCallout;
