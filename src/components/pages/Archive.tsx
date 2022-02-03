import ProjectRoot, { ProjectInfo } from "../modules/ProjectRoot";
import clarinetKeyframeAutomationProjectData from "./blogs/archive/ClarinetKeyframeAutomationBlogData";
import clothSimProjectData from "./blogs/archive/ClothSimBlogData";
import customChessSetProjectData from "./blogs/archive/CustomChessSetBlogData";
import generativeArtWebsiteProjectData from "./blogs/archive/GenerativeArtWebsiteBlogData";
import pendulumModelProjectData from "./blogs/archive/PendulumModelBlogData";
import photoCompetitionProjectData from "./blogs/archive/PhotoCompetitionBlogData";
import proceduralBuildingProjectData from "./blogs/archive/ProceduralBuildingGenBlogData";
import robotCharacterProjectData from "./blogs/archive/RobotCharacterBlogData";
import shortFilmsProjectData from "./blogs/archive/ShortFilmsBlogData";
import waxLightEnclosureProjectData from "./blogs/archive/WaxLightEnclosureBlogData";
import strobeLabProjectData from "./blogs/archive/StrobeLabBlogData";
import ArrowButton from "../modules/ArrowButton";

interface Props {}

const projectArray: Array<ProjectInfo> = [
  strobeLabProjectData,
  robotCharacterProjectData,
  proceduralBuildingProjectData,
  shortFilmsProjectData,
  clothSimProjectData,
  clarinetKeyframeAutomationProjectData,
  generativeArtWebsiteProjectData,
  photoCompetitionProjectData,
  waxLightEnclosureProjectData,
  pendulumModelProjectData,
  customChessSetProjectData,
];

const Archive = (props: Props) => {
  return (
    <ProjectRoot
      rootName="Archive"
      rootSubtitle="Projects from before Summer 2021"
      projects={projectArray}
      rootPath="/archive"
      rootContent={
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ArrowButton text="View Porfolio" path="/portfolio" />
        </div>
      }
      coverBottomPadding={35}
    />
  );
};

export default Archive;
