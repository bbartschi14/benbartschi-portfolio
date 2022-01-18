import "./BlogInlineMedia.css";

interface Props {
  image: string;
  subtitle: JSX.Element;
  isVideo?: boolean;
  maxWidthPixels?: number;
  //   fill: number; // 0 - 100
}

const BlogInlineMedia = (props: Props) => {
  return (
    <div className="BlogInlineMedia-wrapper">
      <div className="BlogInlineMedia-imageWrapper">
        {props.isVideo ? (
          <video
            className="BlogInlineMedia-image"
            autoPlay
            muted
            loop
            style={{ maxWidth: props.maxWidthPixels }}
          >
            <source src={props.image} />
          </video>
        ) : (
          <img
            src={props.image}
            className="BlogInlineMedia-image"
            style={{ maxWidth: props.maxWidthPixels }}
          />
        )}
      </div>
      <div className="BlogInlineMedia-subtitle">{props.subtitle}</div>
    </div>
  );
};

export default BlogInlineMedia;
