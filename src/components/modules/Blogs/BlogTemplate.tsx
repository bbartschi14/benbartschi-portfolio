import "./BlogTemplate.css";
import TableOfContents from "../Blogs/TableOfContents";
import { BlogData } from "./BlogsTypes";
import BlogSection from "./BlogSection";
import { useWindowDimensions } from "../../modules/WindowHelpers";
import { Tags } from "../ProjectCover";
import BlogButtonRow from "./BlogButtonRow";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { ProjectInfo } from "../ProjectRoot";

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
  nextProject: ProjectInfo;
  rootPath: string;
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Link
          to={props.rootPath + "/" + props.nextProject.path}
          className="BlogButtonRow-button u-noselect"
          style={{ display: "flex", flexDirection: "row", marginBottom: "16px" }}
        >
          <div>
            <div>Next Project:</div>
            <div
              className="BlogTemplate-nextProject"
              dangerouslySetInnerHTML={{ __html: props.nextProject.projectName }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon type="arrowRight" style={{ fontSize: "24px", margin: "0px 12px 0px 24px" }} />
          </div>
        </Link>
        <Link
          to={props.rootPath}
          className="BlogButtonRow-button u-noselect"
          style={{ display: "flex", flexDirection: "row", opacity: 0.75 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon type="arrowLeft" style={{ fontSize: "24px", margin: "0px 12px 0px 6px" }} />
          </div>
          <div>
            <div>Return to {props.rootPath}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogTemplate;
