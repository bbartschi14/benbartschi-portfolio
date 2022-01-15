import BlogButtonRow from "../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../modules/Blogs/BlogsTypes";
import image from "../../../resources/websiteCover.png";
import BlogCallout from "../../modules/Blogs/BlogCallout";
import BlogCodeBlock from "../../modules/Blogs/BlogCodeBlock";
const websiteSceneData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogCallout icon="camera">This is an important callout!</BlogCallout>
          <BlogCallout icon="check">This is an important callout!</BlogCallout>

          <BlogParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </BlogParagraph>
          <BlogInlineMedia
            image={image}
            subtitle={<>Example subtitle. Shows with slightly smaller text and less bright.</>}
          />
          <BlogParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </BlogParagraph>
          <BlogCodeBlock
            code={`const x = 2;\nlet y = 4;`}
            language={"javascript"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogButtonRow
            buttons={[
              { text: "View Live Project", linkTo: "/", iconType: "link" },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/benbartschi-portfolio",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
    { header: "Middle" },
    { header: "Conclusion" },
    { header: "Conclusion2" },
    { header: "Conclusion3" },
    { header: "Conclusion4" },
    { header: "Conclusion5" },
    { header: "Conclusion6" },
    { header: "Conclusion7" },
  ],
};

export default websiteSceneData;
