import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import cover from "../../../../resources/archive/robot/robotCover.png";
import image from "../../../../resources/archive/robot/robot-1.png";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";

const robotCharacterData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            The development of a Robot character, including modeling, shading, rigging, and creating
            a custom UI panel add-on.
          </BlogParagraph>
          <BlogInlineMedia
            image={image}
            subtitle={<>Final render in Blender Cycles.</>}
          ></BlogInlineMedia>
        </>
      ),
    },

    {
      header: "Breakdown",
      content: (
        <>
          <BlogParagraph>Full breakdown in progress! See current demo in my reel:</BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Reel",
                linkTo: "https://www.youtube.com/watch?v=8kU8g1PfAvg&t=15s",
                iconType: "youtube",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const robotCharacterProjectData = {
  coverImage: cover,
  projectName: "Robot Character Creation",
  projectMonth: 0,
  projectYear: 2021,
  tags: ["Blender", "Python", "Character"],
  blogData: robotCharacterData,
  path: "robot-character",
};

export default robotCharacterProjectData;
