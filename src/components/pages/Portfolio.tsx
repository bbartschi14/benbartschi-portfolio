import websiteSceneProjectData from "./blogs/portfolio/WebsiteSceneBlogData";
import chiStudioProjectData from "./blogs/portfolio/ChiStudioBlogData";
import beyondCADProjectData from "./blogs/portfolio/BeyondCADBlogData";
import Icon from "../modules/Blogs/Icon";
import ArrowButton from "../modules/ArrowButton";
import ProjectRoot, { ProjectInfo } from "../modules/ProjectRoot";
import treeDocsProjectData from "./blogs/portfolio/TreeDocsBlogData";
interface Props {}

const projectArray: Array<ProjectInfo> = [
  chiStudioProjectData,
  websiteSceneProjectData,
  beyondCADProjectData,
  treeDocsProjectData,
];

const Portfolio = (props: Props) => {
  return (
    <>
      <ProjectRoot
        rootName="Portfolio"
        projects={projectArray}
        rootPath="/portfolio"
        rootContent={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ArrowButton text="View Archived Projects" path="/archive" />
          </div>
        }
      />
    </>
  );
};

export default Portfolio;
