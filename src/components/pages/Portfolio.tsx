import ProjectCover from "../modules/ProjectCover";
import websiteCover from "../../resources/websiteCover.png";
import treedocsCover from "../../resources/treedocsCover.jpg";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BlogTemplate from "../modules/Blogs/BlogTemplate";
import { BlogData } from "../modules/Blogs/BlogsTypes";
import webSceneData from "../pages/blogs/BlogWebsiteScene";
interface Props {}

export interface ProjectInfo {
  coverImage: string;
  projectName: string;
  projectMonth: number;
  projectYear: number;
  tags: Array<string>;
  blogData: BlogData;
  path: string;
}

const projectArray: Array<ProjectInfo> = [
  {
    coverImage: websiteCover,
    projectName: "Website Scene, <i>Desktop</i>",
    projectMonth: 0,
    projectYear: 2022,
    tags: ["Blender", "React", "Three.js"],
    blogData: webSceneData,
    path: "website-scene",
  },
  {
    coverImage: websiteCover,
    projectName: "Content Creation App, <i>Chi Studio</i>",
    projectMonth: 0,
    projectYear: 2022,
    tags: ["C++", "Graphics", "Tools"],
    blogData: { sections: [] },
    path: "chi-studio",
  },
  {
    coverImage: websiteCover,
    projectName: "Visualization Tool, <i>BeyondCAD</i><sup>TM</sup>",
    projectMonth: 0,
    projectYear: 2022,
    tags: ["UE4", "C++", "UI", "Tools"],
    blogData: {
      sections: [
        { header: "Introduction" },
        { header: "Middle" },
        { header: "Conclusion" },
        { header: "Conclusion2" },
        { header: "Conclusion3" },
        { header: "Conclusion4" },
        { header: "Conclusion5" },
        { header: "Conclusion6" },
        { header: "Conclusion7" },
      ],
    },
    path: "beyondcad-dev",
  },
  {
    coverImage: treedocsCover,
    projectName: "Code Planner, <i>TreeDocs</i>",
    projectMonth: 0,
    projectYear: 2022,
    tags: ["React", "MongoDB", "Tools"],
    blogData: { sections: [] },
    path: "tree-docs",
  },
];

const Portfolio = (props: Props) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={projectArray.map((project, i) => {
            return <ProjectCover key={i} info={project} />;
          })}
        />
        {projectArray.map((project, i) => {
          return <Route key={i} path={project.path} element={<BlogTemplate project={project} />} />;
        })}
      </Routes>
    </>
  );
};

export default Portfolio;
