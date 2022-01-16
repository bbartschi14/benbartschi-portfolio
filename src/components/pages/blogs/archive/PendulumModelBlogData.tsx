import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import image1 from "../../../../resources/archive/pendulummodel/pendulum-1.png";
import image2 from "../../../../resources/archive/pendulummodel/pendulum-2.png";
import image3 from "../../../../resources/archive/pendulummodel/pendulum-3.png";
import image4 from "../../../../resources/archive/pendulummodel/pendulum-4.png";
import image5 from "../../../../resources/archive/pendulummodel/pendulum-5.png";
import image6 from "../../../../resources/archive/pendulummodel/pendulum-6.png";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";

const pendulumModelData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            Unique network of chains woven within a structure by combining the regular motions of a
            pendulum with fixed magnets in space.
          </BlogParagraph>
          <BlogInlineMedia image={image1} subtitle={<>Close up of final armature.</>} />
          <BlogParagraph>
            Unique network of chains woven within a structure by combining the regular motions of a
            pendulum with fixed magnets in space.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Video",
                linkTo: "https://www.youtube.com/watch?v=8ovvt_ukpE4",
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
            In order to find inspiration and precedents, I researched existing pendulum mechanisms
            along with general manufacturing techniques. Some initial ones that caught my eye
            included weaving, knitting looms, 3D printing (extrusion technology), and Petros Vrellis
            string art. I set out putting some screws in a block of wood and using metal bead chain
            to weave through the poles.
          </BlogParagraph>
          <BlogInlineMedia image={image2} subtitle={<>Early stage test run.</>} />
          <BlogParagraph>
            It was fascinating, but I was disappointed with the lack of depth and realized that the
            chain would just rest on the bottom plane. While fiddling in the shop, I decided to
            stick some magnets to the tops of the screws, and lo and behold:
          </BlogParagraph>
          <BlogInlineMedia image={image3} subtitle={<>Second iteration test run.</>} />
          <BlogParagraph>
            From there, I set out to create a more robust and variable base board by drilling holes
            through a piece of plywood and using wooden dowels of varying heights as the new nodes.
            Then came many more experiments, varying the number of poles, spacing, and number of
            magnets.
          </BlogParagraph>
          <BlogInlineMedia
            image={image4}
            subtitle={<>Repeated tests with controlled variables.</>}
          />
          <BlogParagraph>
            With plenty of experience and data now under my belt, I set out to create the most 3D
            chain network possible, with a high resolution of chain, and clear nodes throughout. I
            then worked on creating documentation, drawings, and final model photographs.
          </BlogParagraph>
          <BlogInlineMedia image={image5} subtitle={<>Vector representation of final model.</>} />
          <BlogInlineMedia image={image6} subtitle={<>Final model on a black backdrop.</>} />
        </>
      ),
    },
    {
      header: "Reflections",
      content: (
        <>
          <BlogParagraph>
            I really enjoyed the iterative design process I followed in this project. Through
            countless tests, minor variations, and detailed documentation, I became a sort of expert
            in metal-bead-chain-magnet creations. The experience of starting with a few simple ideas
            and being able to develop and refine them over the course of the project was ultimately
            very fulfilling and improved my approach to design.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Video",
                linkTo: "https://www.youtube.com/watch?v=8ovvt_ukpE4",
                iconType: "youtube",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const pendulumModelProjectData = {
  coverImage: image1,
  projectName: "Pendulum Model",
  projectMonth: 9,
  projectYear: 2019,
  tags: ["Modeling", "Studio"],
  blogData: pendulumModelData,
  path: "pendulum-Model",
};

export default pendulumModelProjectData;
