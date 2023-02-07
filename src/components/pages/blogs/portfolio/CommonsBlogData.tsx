import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import Icon from "../../../modules/Blogs/Icon";
import BlogInlineCode from "../../../modules/Blogs/BlogInlineCode";
import { ProjectInfo } from "../../../modules/ProjectRoot";
import cover from "../../../../resources/portfolio/commons/cover.png";
import city0 from "../../../../resources/portfolio/commons/City_Scene_Screenshot_0.png";
import city3 from "../../../../resources/portfolio/commons/City_Scene_Screenshot_3.png";
import camera from "../../../../resources/portfolio/commons/customcamera_2.png";
import commons0 from "../../../../resources/portfolio/commons/commons_home_pre.png";
import commons1 from "../../../../resources/portfolio/commons/commons_home.png";
import timelapse from "../../../../resources/portfolio/commons/commons_timelapse_short_Trim.mp4";
import BlogInlineLink from "../../../modules/Blogs/BlogInlineLink";
const commonsData: BlogData = {
  sections: [
    {
      header: "Every ambitious project needs a strong foundation.",
      content: (
        <>
          <BlogParagraph>
            Whether designing video game levels or laying out an animation sequence, Commons allows
            you to quickly iterate and collaborate on the perfect solution.
          </BlogParagraph>
          <BlogInlineMedia
            image={city0}
            compareImage={city3}
            isCompare
            subtitle={<>1 minute (left) vs 10 minutes (right)</>}
          ></BlogInlineMedia>
          <BlogButtonRow
            buttons={[
              {
                text: "View Live Site",
                linkTo: "https://commons.herokuapp.com/",
                iconType: "link",
              },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/commons",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "Share ideas and give feedback in real-time.",
      content: (
        <>
          <BlogParagraph>
            3D environments are difficult to visualize. Get your team on the same page and overcome
            communication barriers by showing instead of telling.
          </BlogParagraph>
          <BlogInlineMedia isVideo image={timelapse}></BlogInlineMedia>
        </>
      ),
    },
    {
      header: "Setup custom cameras to track compositions.",
      content: (
        <>
          <BlogParagraph>
            Finding the right eye-line for your scene can be a challenge. Commons allows you to
            quickly setup and save custom camera views to help you find the perfect shot,
            maintaining it each iteration.
          </BlogParagraph>
          <BlogInlineMedia image={camera}></BlogInlineMedia>
        </>
      ),
    },
    {
      header: "Continue with your 3D package of choice.",
      content: (
        <>
          <BlogParagraph>
            When you're ready to move into production, export your scene and use it as a base for
            your favorite software, like Blender, Maya, or Unity.
          </BlogParagraph>
          <BlogInlineMedia isCompare image={commons0} compareImage={commons1}></BlogInlineMedia>
        </>
      ),
    },
    {
      header: "Conclusion",
      content: (
        <>
          <BlogParagraph>
            I created Commons in January 2023 as a submission to MIT's web programming competition.
            Commons won{" "}
            <BlogInlineLink path="https://weblab.mit.edu/winners/">first place!</BlogInlineLink>
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Live Site",
                linkTo: "https://commons.herokuapp.com/",
                iconType: "link",
              },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/commons",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const commonsProjectData: ProjectInfo = {
  coverImage: cover,
  projectName: "Collaborative 3D Canvas, <i>Commons</i>",
  projectMonth: 0,
  projectYear: 2023,
  tags: ["Multi-User", "React", "Design"],
  blogData: commonsData,
  path: "commons",
};

export default commonsProjectData;
