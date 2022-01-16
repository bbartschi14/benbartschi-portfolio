import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import gingyImage from "../../../../resources/archive/shortfilms/GingyCoverFull.png";
import gingyCoverImage from "../../../../resources/archive/shortfilms/film-cover.png";

const shortFilmsData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            Videos I created as assignments for MIT course 4.354. Creation included writing,
            storyboarding, filming, and editing.
          </BlogParagraph>
          <BlogInlineMedia
            image={gingyCoverImage}
            subtitle={<>Still from my final video. Shot on Nikon D750.</>}
          />
        </>
      ),
    },
    {
      header: "Picture in Picture",
      content: (
        <>
          <div className="video-outside">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RKc-ajDpMsM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="Reel-video"
            />
          </div>
          <BlogParagraph>
            For this assignment, we were tasked with breaking out of the traditional single-channel
            presentation and exploring a multi-channel, picture-in-picture format. After a decent
            amount of brainstorming, I came up with the idea of portraying a couple as they
            transition from their day work to an evening date. From there, I experimented with
            different ways to compare and contrast the two channels, allowing the characters to
            trade off in the shower, while synching up to brush their teeth.
          </BlogParagraph>
          <BlogParagraph>
            Because this was in the middle of the pandemic, my wife and I were faced with the
            challenge of having to make our single apartment feel like two different spaces. This
            was achieved through a few simple decor changes and a (hopefully) subtle horizontal flip
            of the footage.
          </BlogParagraph>
          <BlogParagraph>
            This was a joy to make, and it was great to break out of the traditonal presentation
            format. If you haven't yet, give it a look, and make sure to watch until the end!
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Final",
      content: (
        <>
          <div className="video-outside">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/F5402JH9gp0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="Reel-video"
            />
          </div>
          <BlogParagraph>
            Our final assignment was an open format, where we were asked to work on something that
            we were passionate about exploring. As one who loves 3D animation but had never done any
            compositing with live action footage, I thought this was the perfect opportunity.
          </BlogParagraph>
          <BlogParagraph>
            I decided to focus on the difficulties of the holiday season, as my parents' divorce
            often makes going home quite stressful. I introduced the gingerbread man as a way to
            reignite the Christmas spirit.
          </BlogParagraph>
          <BlogParagraph>
            I first modeled and rigged a simple character to use, then got to work on the
            integration. My workflow involved filming tripod shots and getting clean plates, then
            using fSpy to get a 3D camera to use in Blender. I then animated and rendered the shots,
            using AfterEffects to do the final compositing. I tried to create all the necessary
            shadow catchers in Blender, but in some cases needed to add it as a 2D layer in
            compositing.
          </BlogParagraph>
          <BlogParagraph>
            Overall, I was quite happy with how it turned out in such a short time, and I hope I get
            to do more of this in the future!
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Bonus",
      content: (
        <>
          <BlogParagraph>
            After submitting the project, I decided to go back and update the character model as a
            personal project. Here it is!
          </BlogParagraph>
          <BlogInlineMedia image={gingyImage} subtitle={<>Rendered in Blender Cycles</>} />
        </>
      ),
    },
  ],
};

const shortFilmsProjectData = {
  coverImage: gingyImage,
  projectName: "Short Films",
  projectMonth: 9,
  projectYear: 2020,
  tags: ["AfterEffects", "Blender", "Cinematography"],
  blogData: shortFilmsData,
  path: "short-films",
};

export default shortFilmsProjectData;
