import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import cover from "../../../../resources/archive/strobelab/multiflash.jpg";
import pop0 from "../../../../resources/archive/strobelab/pop0.jpg";
import pop1 from "../../../../resources/archive/strobelab/pop1.jpg";
import solargraph0 from "../../../../resources/archive/strobelab/solargraph0.png";
import solargraph1 from "../../../../resources/archive/strobelab/solargraph1.jpg";
import milkdrop from "../../../../resources/archive/strobelab/milkdrop.mp4";
import cube from "../../../../resources/archive/strobelab/cube.mp4";
import match from "../../../../resources/archive/strobelab/match.mp4";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";

const strobeLabData: BlogData = {
  sections: [
    {
      header: "Gallery",
      content: (
        <>
          <BlogParagraph>
            Photos and videos I captured of my labs for MIT course 6.163 Strobe Lab.
          </BlogParagraph>
          <BlogInlineMedia
            image={cover}
            subtitle={<>Multiflash long exposure of an egg cracking on a table.</>}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={pop0}
            subtitle={<>Audio-triggered strobe setup capturing two nested balloons mid pop.</>}
            maxWidthPixels={600}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={pop1}
            subtitle={<>Audio-triggered strobe setup capturing a water balloon mid pop.</>}
            maxWidthPixels={600}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={solargraph0}
            subtitle={<>Solargraph captured on film paper in a pinhole camera over a month.</>}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={milkdrop}
            isVideo
            subtitle={<>Slow motion milk drop, capturing the "milk crown" phenomenon.</>}
            maxWidthPixels={700}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={cube}
            isVideo
            subtitle={
              <>
                Slow motion glass cube dropped into water. Used for studying surface tension break
                and air bubble formations.
              </>
            }
            maxWidthPixels={700}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={match}
            isVideo
            subtitle={
              <>Slow motion flaming paper dropped into water. Used for studying smoke formation.</>
            }
            maxWidthPixels={700}
          ></BlogInlineMedia>
        </>
      ),
    },
  ],
};

const strobeLabProjectData = {
  coverImage: cover,
  projectName: "MIT Strobe Lab",
  projectMonth: 1,
  projectYear: 2020,
  tags: ["Photography", "High Speed Video"],
  blogData: strobeLabData,
  path: "strobe-lab",
};

export default strobeLabProjectData;
