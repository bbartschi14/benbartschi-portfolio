import "./BlogInlineCode.css";

interface Props {
  children?: React.ReactNode;
}

const BlogInlineCode = (props: Props) => {
  return <span className="BlogInlineCode-wrapper">{props.children}</span>;
};

export default BlogInlineCode;
