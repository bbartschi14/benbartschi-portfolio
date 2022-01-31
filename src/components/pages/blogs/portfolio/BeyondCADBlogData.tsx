import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import BlogCallout from "../../../modules/Blogs/BlogCallout";
import BlogCodeBlock from "../../../modules/Blogs/BlogCodeBlock";
import BlogInlineLink from "../../../modules/Blogs/BlogInlineLink";
import rail from "../../../../resources/portfolio/beyondcad/rail.png";
import notionhome from "../../../../resources/portfolio/beyondcad/notionhome.png";
import notiontable from "../../../../resources/portfolio/beyondcad/notiontable.png";
import notionexample from "../../../../resources/portfolio/beyondcad/notionexample.png";
import pathwayarrow from "../../../../resources/portfolio/beyondcad/pathwayarrow.mp4";
import areahighlight from "../../../../resources/portfolio/beyondcad/areahighlight.mp4";
import ganttusage from "../../../../resources/portfolio/beyondcad/ganttusage.mp4";
import phasingexamples from "../../../../resources/portfolio/beyondcad/phasingexamples.mp4";
import bounded from "../../../../resources/portfolio/beyondcad/boundedvid.mp4";

const beyondCADData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            At the beginning of Summer 2021, I joined the BeyondCAD team as a Software Engineering
            Intern. I spent the summer working on development of our flagship software, also known
            as BeyondCAD. BeyondCAD is a 3D visualization software for infrastructure projects in
            civil engineering and transportation, built using Unreal Engine 4.
          </BlogParagraph>
          <BlogParagraph>
            This job gave me an awesome opportunity to refine my C++ development knowledge while
            also stretching my technical art skills. I got to work heavily with user interfaces,
            shaders, animation systems, and rendering, all while iterating on user feedback to
            create a powerful and productive visualization tool.
          </BlogParagraph>
          <BlogParagraph>
            At the end of the summer, I was offered a full-time position as a Software Engineer and
            have continued working on BeyondCAD, along with a secondary software, BeyondTypicals.
            The rest of this page highlights key contributions and features that I worked on. The
            following video is a trailer for BeyondCAD, and many of the following snippets are clips
            taken from it.
          </BlogParagraph>
          <div className="video-outside">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AgmFS3xguAk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="Reel-video"
            />
          </div>
          <BlogButtonRow
            buttons={[
              {
                text: "View BeyondCAD Website",
                linkTo: "/https://beyondcad.com/",
                iconType: "link",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "UI System Rebuild",
      content: (
        <>
          <BlogParagraph>
            As BeyondCAD grew in complexity and in size of its development team, the UI began to
            reflect a number of inconsistencies that made it difficult for users to quickly
            understand and use features. I was tasked with defining a new UI system, addressing
            style, usability, and overall consistency.
          </BlogParagraph>
          <BlogParagraph>
            Addressing style was an enjoyable and straightforward process, as I followed design
            guidelines typical to web development (e.g. font size hierarchies, consistent padding
            and spacing, and intentional use of color). Even with a nicely defined style, it
            wouldn't be of much use without good documentation and examples for the rest of the team
            to base their work off of. As such, I spent a significant amount of time putting
            together a design document in Notion.
          </BlogParagraph>
          <BlogInlineMedia
            image={notionhome}
            subtitle={
              <>
                The Notion design document homepage, featuring quick links to important material,
                such as the BYC widgets table and style sheet.
              </>
            }
            maxWidthPixels={800}
          />
          <BlogParagraph>
            My goal with the document was to provide general layout and style guidelines from the
            ground up, to both explain why things are the way they are and also to assist in
            designing future elements as needed. I separated out the various UI elements into
            specific classes that can be reused and composed using UE4's UMG system, and all of
            those available components are documented for easily parsing what's available.
          </BlogParagraph>
          <BlogInlineMedia
            image={notiontable}
            subtitle={<>All custom widgets available for developers are documented in a table.</>}
            maxWidthPixels={800}
          />
          <BlogParagraph>
            The document also contains info on how to recreate important UI patterns that are often
            repeated throughout the software, and information on how to implement needed features
            using both C++ and UE4's blueprint scripting system.
          </BlogParagraph>
          <BlogInlineMedia
            image={notionexample}
            subtitle={<>Visual examples of UI patterns used in BeyondCAD.</>}
            maxWidthPixels={800}
          />
          <BlogParagraph>
            For accessibility, I focused on giving clickable elements distinct shapes and colors,
            along with clear cursor feedback. I also created guards in all of the widgets to prevent
            text from being made too small and unreadable across devices of varying resolution.
          </BlogParagraph>
          <BlogParagraph>
            Feel free to check out the full document to see each section more in-depth.
          </BlogParagraph>
          <BlogCallout icon="link">
            View full{" "}
            <BlogInlineLink path="https://skillful-cloche-8c5.notion.site/BeyondCAD-UI-Development-e44befc4ba1e4834b1617e70ebd270d9">
              Notion Design Document
            </BlogInlineLink>
          </BlogCallout>
        </>
      ),
    },
    {
      header: "Visual Graphics",
      content: (
        <>
          <BlogParagraph>
            Infrastructure projects often need to draw attention to specific areas and display
            motion and traffic. In an effort to make both of those possible, I developed a visual
            graphics tool to create Pathway Arrows and Area Highlights.
          </BlogParagraph>
          <BlogParagraph>
            The pathway arrows are a spline-based tool that can be placed and edited using control
            points, making it easy to fit to complex roadways and footpaths. In addition to
            controlling visuals such as color, glow, spacing, texture, and size, there are
            additional position controls such as banking and surface shrinkwrapping.
          </BlogParagraph>
          <BlogInlineMedia
            image={pathwayarrow}
            isVideo
            subtitle={
              <>
                Quick timelapse of pathway arrows being setup and rendered. Screencaptured of
                BeyondCAD.
              </>
            }
          />
          <BlogParagraph>
            The area highlight feature also uses a spline-based approach. Users place down the
            control points, and then a planar grid-fill algorithm is used to create a procedural
            mesh of the interior. The resolution of the mesh can be adjusted to properly drape over
            the land below, and it includes visual options to customize the highlight.
          </BlogParagraph>
          <BlogCallout icon="fileAlt">
            <BlogInlineLink path="https://www.linkedin.com/pulse/planar-meshing-from-outline-part-1-ryan-gadz/">
              This LinkedIn article
            </BlogInlineLink>{" "}
            by Ryan Gadz outlines how to go about implementing a planar procedural mesh given an
            outlining spline.
          </BlogCallout>
          <BlogInlineMedia
            image={areahighlight}
            isVideo
            subtitle={
              <>
                Timelapse of area highlights being draped over a landscape mesh. Screencaptured of
                BeyondCAD.
              </>
            }
          />
        </>
      ),
    },
    {
      header: "4D Phasing",
      content: (
        <>
          <BlogParagraph>
            Another common need of our users was displaying how a project would change over time.
            They often call this <i>4D Phasing</i>, as they are showing how the 3D project evolves
            in the 4th dimension of time. Other developers had set up a system for tagging assets
            with identifiable phases, and my job was to create a tool to organize these phases over
            time.
          </BlogParagraph>
          <BlogInlineMedia
            image={ganttusage}
            isVideo
            subtitle={
              <>
                Demo of the GANTT chart-like phasing organizer. Phases can be added to the timeline
                track and resized to fit their corresponding date range. The tool comes with a
                playback feature to display the asset changes in real time.
              </>
            }
          />
          <BlogParagraph>
            This feature has been used for a number of large projects, and has proved especially
            useful for iterating on alternative proposals quickly.
          </BlogParagraph>
          <BlogInlineMedia
            image={phasingexamples}
            isVideo
            subtitle={
              <>
                Various uses of the phasing tool as demo-ed in the trailer. The last clip features a
                previous design of the GANTT chart UI.
              </>
            }
          />
        </>
      ),
    },
    {
      header: "Bounded Projects",
      content: (
        <>
          <BlogParagraph>
            As many firms don't have unlimited resources for 3D modeling, their proposals often
            don't prepare assets past the geographical extents of the project. This can sometimes be
            distracting, as projects are pitched with jagged edge photogrammetry meshes that take
            away from the focal points of the project. The <i>Bounded Projects</i> tool allows for
            meshes to be easily clipped and finished off with a procedural base mesh.
          </BlogParagraph>
          <BlogInlineMedia
            image={bounded}
            subtitle={<>Example of clipping a photogrametry mesh and generating a base mesh.</>}
            isVideo
          />
          <BlogParagraph>
            The base mesh works by raycasting into the clipped mesh and sampling those intersection
            points to approximate the curve.
          </BlogParagraph>
        </>
      ),
    },
    // {
    //   header: "Presentation Mode",
    //   content: <>First/Third person modes, touch screen, quick controls.</>,
    // },
    {
      header: "BeyondTypicals",
      content: (
        <>
          <BlogParagraph>
            BeyondTypicals provides a lightweight tool for civil engineers and urban planners alike
            to iterate on the design of street sections. I have worked on adding visual graphics,
            refining animations, camera controls, and implementing UE4's Movie Render Queue plug-in
            into our rendering system, allowing users to generate high quality media.
          </BlogParagraph>
          <BlogCallout icon="youtube">
            See the{" "}
            <BlogInlineLink path="https://www.youtube.com/watch?v=VbnwAOSc0A0">
              BeyondTypicals pre-launch trailer
            </BlogInlineLink>{" "}
            for a closer look.
          </BlogCallout>
        </>
      ),
    },
  ],
};

const beyondCADProjectData = {
  coverImage: rail,
  projectName: "Visualization Tool, <i>BeyondCAD</i><sup>TM</sup>",
  projectMonth: 0,
  projectYear: 2022,
  tags: ["UE4", "C++", "UI", "Tools"],
  blogData: beyondCADData,
  path: "beyondcad-dev",
};

export default beyondCADProjectData;
