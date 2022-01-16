import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import clothImage from "../../../../resources/archive/clothsim/in action.jpg";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import clothVideo from "../../../../resources/archive/clothsim/cloth sim1.mp4";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
const clothSimData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogInlineMedia
            image={clothVideo}
            isVideo
            subtitle={<>Simulation showing wind and object intersection.</>}
          />
          <BlogParagraph>An OpenGL scene for physical simulation, including</BlogParagraph>
          <ul>
            <li>Circular motion (stable trapezoidal integration vs. unstable forward euler)</li>
            <li>Structural spring pendulum</li>
            <li>Cloth (with structural, shear, and flex springs)</li>
          </ul>
          <BlogButtonRow
            buttons={[
              {
                text: "View Github Repo",
                linkTo: "https://github.com/bbartschi14/physical-simulation",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "UI Features",
      content: (
        <>
          <BlogParagraph>
            The cloth simulation comes with a number of interactive UI buttons, such as
          </BlogParagraph>
          <ul>
            <li>Change gravitational force</li>
            <li>Toggle wind and adjust wind strength</li>
            <li>Unpin the cloth from the frame</li>
            <li>Visualize normals as colors</li>
            <li>Toggle diffuse and normal texture maps</li>
          </ul>
        </>
      ),
    },
  ],
};

const clothSimProjectData = {
  coverImage: clothImage,
  projectName: "OpenGL Cloth Sim",
  projectMonth: 9,
  projectYear: 2020,
  tags: ["C++", "OpenGL"],
  blogData: clothSimData,
  path: "cloth-Sim",
};

export default clothSimProjectData;
