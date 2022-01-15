import "./BlogParagraph.css";

interface Props {
  children?: React.ReactNode;
}

const BlogParagraph = (props: Props) => {
  return <p className="BlogParagraph-wrapper">{props.children}</p>;
};

export default BlogParagraph;
