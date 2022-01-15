import "./BlogSection.css";
import { BlogSectionData } from "./BlogsTypes";

interface Props {
  data: BlogSectionData;
}

const BlogSection = (props: Props) => {
  return (
    <div id={"toc" + props.data.header} className="BlogSection-wrapper">
      <h2 className="BlogSection-header">{props.data.header}</h2>
      {props.data.content}
    </div>
  );
};

export default BlogSection;
