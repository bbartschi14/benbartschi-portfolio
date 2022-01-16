import { BlogData } from "../modules/Blogs/BlogsTypes";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import BlogTemplate from "../modules/Blogs/BlogTemplate";
import ProjectCover from "../modules/ProjectCover";

export interface ProjectInfo {
  coverImage: string;
  projectName: string;
  projectMonth: number;
  projectYear: number;
  tags: Array<string>;
  blogData: BlogData;
  path: string;
}

interface Props {
  projects: Array<ProjectInfo>;
  rootPath: string;
  rootContent: JSX.Element;
  coverBottomPadding?: number; // % 0-100
}
const ProjectRoot = (props: Props) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {props.projects.map((project, i) => {
                return (
                  <ProjectCover
                    key={i}
                    info={project}
                    coverBottomPadding={props.coverBottomPadding}
                  />
                );
              })}
              {props.rootContent}
            </>
          }
        />
        {props.projects.map((project, i) => {
          return (
            <Route
              key={i}
              path={project.path}
              element={
                <BlogTemplate
                  key={i}
                  project={project}
                  nextProject={props.projects[(i + 1) % props.projects.length]}
                  rootPath={props.rootPath}
                />
              }
            />
          );
        })}
      </Routes>
    </>
  );
};

export default ProjectRoot;
