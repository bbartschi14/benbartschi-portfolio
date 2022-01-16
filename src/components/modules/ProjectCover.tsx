import { Link } from "react-router-dom";
import "./ProjectCover.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectInfo } from "./ProjectRoot";

interface Props {
  info: ProjectInfo;
  coverBottomPadding?: number; // %
}

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

const getMonthName = (index: number): string => {
  return monthsArray[index];
};

interface TagProps {
  tags: Array<string>;
}
const Tags = (props: TagProps) => {
  return (
    <div className="ProjectCover-tagContainer">
      {props.tags.map((tag, i) => {
        return (
          <div key={i} className="ProjectCover-tag u-noselect">
            {tag}
          </div>
        );
      })}
    </div>
  );
};

const ProjectCover = (props: Props) => {
  return (
    <div className="ProjectCover-root">
      <Link
        to={props.info.path}
        className="ProjectCover-wrapper"
        style={props.coverBottomPadding ? { paddingBottom: props.coverBottomPadding + "%" } : {}}
      >
        <div className="ProjectCover-imageWrapper">
          <img className="ProjectCover-image" src={props.info.coverImage}></img>
          <div className="ProjectCover-goTo">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </Link>
      <div className="ProjectCover-details">
        <div
          className="ProjectCover-title"
          dangerouslySetInnerHTML={{ __html: props.info.projectName }}
        ></div>
        {/* <div className="ProjectCover-date">
          {getMonthName(props.info.projectMonth) + " " + props.info.projectYear}
        </div> */}
        <Tags tags={props.info.tags} />
      </div>
    </div>
  );
};

export default ProjectCover;

export { Tags };
