import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import image1 from "../../../../resources/archive/waxmodel/wax-1.png";
import image2 from "../../../../resources/archive/waxmodel/wax-2.png";
import image3 from "../../../../resources/archive/waxmodel/wax-3.png";
import image4 from "../../../../resources/archive/waxmodel/wax-4.png";
import cover from "../../../../resources/archive/waxmodel/wax-cover.png";
import image5 from "../../../../resources/archive/waxmodel/wax-5.png";
import image6 from "../../../../resources/archive/waxmodel/wax-6.png";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";

const waxLightEnclosureData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            A volumetric shell of varying densities which allows both direct and diffused light to
            emanate outwards. Created by dripping, contracting, and stretching wax.
          </BlogParagraph>
          <BlogInlineMedia
            image={image1}
            subtitle={
              <>Final wax enclosure on a black backdrop. Lit from the inside with tea lights.</>
            }
          />
          <BlogParagraph>
            For the first project of How to Design (almost) Anything, a studio class in the MIT
            Department of Architecture, I was tasked with creating a light enclosure out of wax.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Video",
                linkTo: "https://www.youtube.com/watch?v=8_92JdE7FG0",
                iconType: "youtube",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "Process",
      content: (
        <>
          <BlogParagraph>
            To begin, I sat down and brainstormed all the potential ways I could interact with the
            wax. Melting, stretching, cutting, drilling, carving, etc. My only exposure to wax
            before this was the occasional candle, so I honestly had no clue what it was like to
            form and design an object out of the material. I quickly became interested in the
            ability of wax to melt, run, and then harden while still in motion. By using a balloon
            and a heat-gun on low, I was able to begin forming wax into spherical shell shapes. My
            goal was to create an enclosure with varying thicknesses and opacities, creating varying
            intensities of directional light and being verstatile for both blocking or permitting
            the passage of the light.
          </BlogParagraph>
          <BlogInlineMedia
            image={image2}
            subtitle={<>Using a heat gun to melt wax over a balloon.</>}
          />
          <BlogParagraph>
            Once I was able to dial in the technique, I began to create a few initial models by
            allowing the wax to harden then popping the balloon.
          </BlogParagraph>
          <BlogInlineMedia image={image3} subtitle={<>Initial model.</>} />
          <BlogInlineMedia
            image={image4}
            subtitle={<>Second model. The balloon was popped before the wax hardened</>}
          />
          <BlogParagraph>
            After significant iteration and experimentation, my final design involved popping the
            balloon while the wax was still somewhat maleable, allowed for the wax's texture to
            shrivel and develop unique ridges. Following that, the wax would be remolded onto a
            hemisphere in order to create the volumetric space.
          </BlogParagraph>
          <BlogInlineMedia image={image5} subtitle={<>Wax flattened after removing balloon.</>} />
          <BlogInlineMedia image={image6} subtitle={<>Top down view of the final model.</>} />
        </>
      ),
    },
    {
      header: "Reflections",
      content: (
        <>
          <BlogParagraph>
            I was quite satisfied with the final model, with its ability to interact with the light
            and rest as a beautiful object. The iteration process proved to be immensely valuable,
            and has since played a major role in my design work.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Video",
                linkTo: "https://www.youtube.com/watch?v=8_92JdE7FG0",
                iconType: "youtube",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const waxLightEnclosureProjectData = {
  coverImage: cover,
  projectName: "Wax Light Enclosure",
  projectMonth: 10,
  projectYear: 2019,
  tags: ["Modeling", "Photography", "Studio"],
  blogData: waxLightEnclosureData,
  path: "wax-Light-Enclosure",
};

export default waxLightEnclosureProjectData;
