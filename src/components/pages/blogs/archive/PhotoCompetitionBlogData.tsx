import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import coverImage from "../../../../resources/archive/photocompetition/competition-cover.png";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import image1 from "../../../../resources/archive/photocompetition/competition-1.png";
import image2 from "../../../../resources/archive/photocompetition/competition-2.png";
import image3 from "../../../../resources/archive/photocompetition/competition-3.png";
import image4 from "../../../../resources/archive/photocompetition/competition-4.png";
import image5 from "../../../../resources/archive/photocompetition/competition-5.png";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";

const photoCompetitionData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            Creative photographs taken for the 2019 Civil and Environmental Engineering Photo
            Competition, combining aesthetic images with relevant engineering content and captions.
          </BlogParagraph>
          <BlogInlineMedia
            image={image1}
            subtitle={
              <>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.instagram.com/p/By3geZ1J7sm/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  "Lime. Although it might not go well with lemon, kilned chunks of calcium
                  carbonate (limestone), like this, were part of a major technological advancement
                  in ancient Roman construction. Replacing clay ..."
                </a>
              </>
            }
          />
          <BlogParagraph>
            Over the course of the summer, I spent time doing research and fieldwork in various
            parts of Italy. Along the way, I looked for creative ways to highlight Civil Engineering
            concepts through photography, focusing on purposeful composition and color. For example,
            the photo above features a chunk of limestone at a quarry and processing factory. The
            stone is placed directly in the light coming from the quarry shaft above, emphasizing
            the labor environment and contrasting the value of the lime with the less important
            minerals in the dirt and cliff wall.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View 1st Place Post",
                linkTo: "https://www.instagram.com/p/BzyxmShJBeS/?utm_source=ig_web_copy_link",
                iconType: "instagram",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "Initial Photos",
      content: (
        <>
          <BlogInlineMedia
            image={image2}
            subtitle={
              <>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.instagram.com/p/By8gY4sHMey/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  "A number of techniques are used in order to preserve historic buildings and keep
                  them from falling apart or crashing down. This remaining wall ..."
                </a>
              </>
            }
          />
          <BlogParagraph>
            In this photo, I used a desaturation mask in order to accentuate the difference between
            the existing historical tower wall and the restored support section. Framed within the
            trees and shrubbery, the wildlife is seen encroaching on the man-made structure, taking
            back its habitat.
          </BlogParagraph>
          <BlogInlineMedia
            image={image3}
            subtitle={
              <>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.instagram.com/p/BzJeWpRJMdE/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  "One of the roofing techniques that he explained, known as 'volte a folio', is
                  showcased in this picture that I took at the academy ..."
                </a>
              </>
            }
          />
          <BlogParagraph>
            The leading lines created by the table draws the viewer into the verticality, symmetry,
            and beauty of the double arched "volte a folio" ceiling technique. The architectural
            perfection contrasts with the place settings, which are slightly misaligned as the
            kitchen staff hurriedly prepares to feed the academies' inhabitants.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Second Place",
      content: (
        <>
          <BlogInlineMedia
            image={image4}
            subtitle={
              <>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.instagram.com/p/B07ezoEpVf0/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  "With around 250,000 people commuting for work daily by car in Boston, the city's
                  roads and highways play a major role in the growth and ..."
                </a>
              </>
            }
          />
          <BlogParagraph>
            By using a long exposure at night, I was able to capture the mass movement of commuters
            along one of Boston's main roads, Storrow Dr. The inbound and outbound cars create a
            central balance to the photograph, while also leading the eyes towards 200 Clarendon St,
            one of the city's tallest buildings and biggest civil engineering feats.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "First Place",
      content: (
        <>
          <BlogInlineMedia
            image={image5}
            subtitle={
              <>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.instagram.com/p/BzyxmShJBeS/?utm_source=ig_web_copy_link"
                  target="_blank"
                >
                  "Robert Hooke, known for defining the law of elasticity in springs, also came up
                  with a structural concept known as Hooke's hanging chain. He taught that ..."
                </a>
              </>
            }
          />
          <BlogParagraph>
            My idea for this photograph originated while studying catenary and funicular structures
            in Rome. Gustave Eiffel, architect of the Eiffel Tower, was an influential bridge
            builder, and he prescribed to many of the "hanging chain" techniques taught by Robert
            Hooke. Eiffel incorporated this design into the arches at the base of the tower, which I
            was able to visualize with a simple piece of string hanging between my fingers. It took
            quite a while to line it up while setting my camera off with a timer, but it was worth
            it.
          </BlogParagraph>
        </>
      ),
    },
  ],
};

const photoCompetitionProjectData = {
  coverImage: coverImage,
  projectName: "Photo Competition",
  projectMonth: 8,
  projectYear: 2019,
  tags: ["Photography", "Lightroom"],
  blogData: photoCompetitionData,
  path: "photo-Competition",
};

export default photoCompetitionProjectData;
