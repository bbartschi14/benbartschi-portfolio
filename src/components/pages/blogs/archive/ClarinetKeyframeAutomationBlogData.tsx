import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import coverImage from "../../../../resources/archive/clarinet/updated0100.jpg";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import image0 from "../../../../resources/archive/clarinet/clarinet-1.png";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import image1 from "../../../../resources/archive/clarinet/clarinet-2.png";
import modelingVideo from "../../../../resources/archive/clarinet/clarinet-3.mp4";
import image4 from "../../../../resources/archive/clarinet/clarinet-4.png";
import video2 from "../../../../resources/archive/clarinet/clarinet-5.mp4";

const clarinetKeyframeAutomationData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            The development of a Blender Python script and 3D rig to automatically animate clarinet
            fingerings to a desired song.
          </BlogParagraph>
          <BlogInlineMedia
            image={image0}
            subtitle={<>Clarinet pieces lined up. Rendered in Blender Cycles.</>}
          />
          <BlogParagraph>
            At the ripe age of 11, my dad gave me his old Signet 100 clarinet so I could play in my
            middle school's band. Fortunately, I really enjoyed it and ended up performing in
            various ensembles and orchestras until graduating high school. Early on in my senior
            year, I decided to model my clarinet for some 3DS Max practice, and I was happy enough
            with it to include it on my MIT application portfolio. At some point over the years I
            lost those files, so I decided to give it a go with a more ambitious goal: creating a
            short clip utilizing Blender's Python API to animate the clarinet to life.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Final Clip",
                linkTo: "https://www.youtube.com/watch?v=Rwew63EOp6A",
                iconType: "youtube",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "Modeling",
      content: (
        <>
          <BlogParagraph>
            Before getting to any coding, I needed my own custom clarinet. I started out by
            photoscanning my actual clarinet to use the generated model as a reference for
            proportions. Unfortunately, I had a hard time getting good feature points due to the
            matte black surface of the wood. It was still useful, but I also needed other picture
            references.
          </BlogParagraph>
          <BlogInlineMedia
            image={image1}
            subtitle={
              <>Photogrammetry model generated in Agisoft Metashape. Approx. 30 reference photos.</>
            }
          />
          <BlogParagraph>
            Modeling was fairly straightforward. I tried to model as low-poly as possible, relying
            on subsurf modifiers to procedurally smooth and correct. One of my biggest improvements
            on this model was my handling of the key holes. Following topology guides, I was able to
            boolean subtract holes then reconnect new vertices the existing mesh.
          </BlogParagraph>
          <BlogInlineMedia
            image={modelingVideo}
            subtitle={<>Creating proper holes by removing n-gons in the clarinet mesh.</>}
            isVideo
          />
        </>
      ),
    },
    {
      header: "Texturing",
      content: (
        <>
          <BlogParagraph>
            Once I had the model completed, I turned to poliigon.com to get texture maps for my
            three main materials: wood for the body, metal for the keys, and cork for the
            connections. I then added in a fingerprint map to the roughness channel and a scratches
            map to the normal map in order to create small imperfections and help improve the
            photorealism.
          </BlogParagraph>
          <BlogInlineMedia
            image={image4}
            subtitle={
              <>
                Close-up render highlighting subtle fingerprints on the keys and imperfections on
                the wood.
              </>
            }
          />
        </>
      ),
    },
    {
      header: "Scripting",
      content: (
        <>
          <BlogParagraph>
            With a nice looking clarinet together, I figured it was time to give it some life before
            working on the final scene. My idea for generating the keyframes went as follows:
          </BlogParagraph>
          <ol>
            <li>Assign each pressable hole/key to an empty axes object</li>
            <li>
              Store the rotation value of the "closed position" of each hole/key in a dictionary
            </li>
            <li>
              Create a dictionary with all the keys needed to play any given note e.g.
              &#123;'C#4':['Back2','Top3','Top4','Top7']&#125;, where Back2-Top7 are the fingerings
              to play C#4
            </li>
            <li>
              Pass in a sequence of notes and note lengths, setting the rotation keyframes of each
              empty axes at the corresponding moment in the timeline (this includes an additional
              held keyframe right before each note change, as time spent between fingerings is
              supposed to be minimized)
            </li>
          </ol>
          <BlogParagraph>
            This approach gave a pretty good result. Some tweaking was needed, involving verifying
            that the correct axis was being used for each empty object, and local vs. global
            rotation issues among others.
          </BlogParagraph>
          <BlogInlineMedia
            image={video2}
            subtitle={<>Testing the script by alternating between notes.</>}
            isVideo
          />
        </>
      ),
    },
    {
      header: "Scene Setup",
      content: (
        <>
          <BlogParagraph>
            My initial vision for a final demo was to depict the clarinet coming to life after band
            class, finally being alone and free to express itself (this is one of my favorite tropes
            of animation). I got to work modeling some chairs, stands, a whiteboard, lockers, and
            other items to flesh out the set. After doing some shot layouts, I realized I wouldn't
            be able to render what I was going for in a reasonable amount of time.
          </BlogParagraph>
          <BlogInlineMedia
            image={coverImage}
            subtitle={<>Unused Clarinet still from my initial idea. Rendered in Blender Cycles.</>}
          />
        </>
      ),
    },
    {
      header: "Final Demo",
      content: (
        <>
          <BlogParagraph>
            Instead, I opted for a simple, sparse scene demo, set to the classic song{" "}
            <i>Rhapsody in Blue</i>, by George Gershwin. All of the clarinet keys were animated
            through my script, with the full body movement being quickly added by hand afterwards.
          </BlogParagraph>
          <div className="video-outside">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Rwew63EOp6A"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="Reel-video"
            />
          </div>
        </>
      ),
    },
  ],
};

const clarinetKeyframeAutomationProjectData = {
  coverImage: coverImage,
  projectName: "Clarinet Keyframe Automation",
  projectMonth: 5,
  projectYear: 2020,
  tags: ["Blender", "Python"],
  blogData: clarinetKeyframeAutomationData,
  path: "clarinet-Keyframe-Automation",
};

export default clarinetKeyframeAutomationProjectData;
