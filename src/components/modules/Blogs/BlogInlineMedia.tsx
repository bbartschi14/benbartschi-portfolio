import "./BlogInlineMedia.css";

interface Props {
  image: string;
  subtitle: JSX.Element;
  //   fill: number; // 0 - 100
}

const BlogInlineMedia = (props: Props) => {
  return (
    <div className="BlogInlineMedia-wrapper">
      <img src={props.image} className="BlogInlineMedia-image" />
      <div className="BlogInlineMedia-subtitle">{props.subtitle}</div>
    </div>
  );
};

export default BlogInlineMedia;
