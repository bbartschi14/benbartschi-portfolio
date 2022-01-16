import "./BlogInlineMedia.css";

interface Props {
  image: string;
  subtitle: JSX.Element;
  isVideo?: boolean;
  //   fill: number; // 0 - 100
}

const BlogInlineMedia = (props: Props) => {
  return (
    <div className="BlogInlineMedia-wrapper">
      {props.isVideo ? (
        <video className="BlogInlineMedia-image" autoPlay muted loop>
          <source src={props.image} />
        </video>
      ) : (
        <img src={props.image} className="BlogInlineMedia-image" />
      )}
      <div className="BlogInlineMedia-subtitle">{props.subtitle}</div>
    </div>
  );
};

export default BlogInlineMedia;
