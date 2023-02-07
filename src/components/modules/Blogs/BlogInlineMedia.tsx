import "./BlogInlineMedia.css";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

interface Props {
  image: string;
  subtitle: JSX.Element;
  isVideo?: boolean;
  isCompare?: boolean;
  compareImage?: string;
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
            playsInline
            muted
            loop
            style={{ maxWidth: props.maxWidthPixels }}
          >
            <source src={props.image} />
          </video>
        ) : props.compareImage ? (
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={props.image} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={props.compareImage} alt="Image two" />}
          />
        ) : (
          <img
            alt="blog"
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
