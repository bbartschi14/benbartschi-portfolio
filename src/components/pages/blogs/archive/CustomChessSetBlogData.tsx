import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import image1 from "../../../../resources/archive/chessset/chess-1.png";
import cover from "../../../../resources/archive/chessset/chess-cover.png";
import image2 from "../../../../resources/archive/chessset/chess-2.gif";
import image3 from "../../../../resources/archive/chessset/chess-3.gif";
import image4 from "../../../../resources/archive/chessset/chess-4.gif";
import image5 from "../../../../resources/archive/chessset/chess-5.gif";
import image6 from "../../../../resources/archive/chessset/chess-6.gif";
import image7 from "../../../../resources/archive/chessset/chess-7.gif";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";

const customChessSetData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            Designing, modeling, and printing of a custom chess set inspired by themes and motifs
            found on the Las Vegas Strip.
          </BlogParagraph>
          <BlogInlineMedia
            image={image1}
            subtitle={<>Pieces lined up and rendered with Blender Cycles.</>}
          />
          <BlogParagraph>
            I originally conceived this idea for an assignment in high school, where we had to make
            a custom chess set. I had sketched some variations of different hotels on the Strip, and
            from there it stayed on paper for a few years.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Process",
      content: (
        <>
          <BlogParagraph>
            While taking Design for 3D Printing in Fall 2019, I decided to revisit my idea from high
            school for my final project. Using primarily SOLIDWORKS for the 3D modeling and Blender
            for the rendering and lighting, I created this custom chess set.
          </BlogParagraph>
          <BlogInlineMedia image={image2} subtitle={<>King : Stratosphere</>} />
          <BlogInlineMedia image={image3} subtitle={<>Queen : High Roller</>} />
          <BlogInlineMedia image={image4} subtitle={<>Bishop : Bellagio</>} />
          <BlogInlineMedia image={image5} subtitle={<>Knight : Excalibur</>} />
          <BlogInlineMedia image={image6} subtitle={<>Rook : Caesar's Palace</>} />
          <BlogInlineMedia image={image7} subtitle={<>Pawn : A Las Vegas classic</>} />
        </>
      ),
    },
    {
      header: "Reflections",
      content: (
        <>
          <BlogParagraph>
            I had a lot of fun identifying the most important and telling features of each style in
            order to simplify them down to a small scale model. The pieces are currently being 3D
            printed, after some initial size testing and modifications to ensure structural
            integrity and accurate printing.
          </BlogParagraph>
        </>
      ),
    },
  ],
};

const customChessSetProjectData = {
  coverImage: cover,
  projectName: "Custom Chess Set",
  projectMonth: 11,
  projectYear: 2019,
  tags: ["Blender", "3D Printing"],
  blogData: customChessSetData,
  path: "custom-Chess-Set",
};

export default customChessSetProjectData;
