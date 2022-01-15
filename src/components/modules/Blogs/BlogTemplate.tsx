import "./BlogTemplate.css";
import TableOfContents from "../Blogs/TableOfContents";
import { BlogData } from "./BlogsTypes";
import BlogSection from "./BlogSection";
import { useWindowDimensions } from "../../modules/WindowHelpers";
import { ProjectInfo } from "../../pages/Portfolio";
import { Tags } from "../ProjectCover";

const monthsArray: Array<string> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Props {
  project: ProjectInfo;
}

const BlogTemplate = (props: Props) => {
  const { height, width } = useWindowDimensions();

  return (
    <div className="BlogTemplate-outerWrapper">
      <div className="BlogTemplate-banner">
        <img className="BlogTemplate-bannerImage" src={props.project.coverImage}></img>
        <div className="BlogTemplate-bannerInfoContainer">
          <div
            className="BlogTemplate-title"
            dangerouslySetInnerHTML={{ __html: props.project.projectName }}
          ></div>
          <div className="BlogTemplate-bannerSubtitleRow">
            {monthsArray[props.project.projectMonth] +
              " " +
              props.project.projectYear +
              " • Ben Bartschi"}
          </div>
          <Tags tags={props.project.tags} />
        </div>
      </div>
      <div className="BlogTemplate-pageWrapper">
        <div className="BlogTemplate-contentWrapper">
          {props.project.blogData.sections.map((section, i) => {
            return <BlogSection key={i} data={section} />;
          })}
        </div>
        {width >= 950 ? <TableOfContents /> : null}
      </div>
    </div>
  );
};

export default BlogTemplate;
