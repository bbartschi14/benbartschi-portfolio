import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import video1 from "../../../../resources/archive/generativeart/colorfly-1.mp4";
import coverImage from "../../../../resources/archive/generativeart/colorflycover.png";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import gif0 from "../../../../resources/archive/generativeart/colorfly-2.gif";
import gif1 from "../../../../resources/archive/generativeart/colorfly-3.gif";
import gif2 from "../../../../resources/archive/generativeart/colorfly-4.gif";
import themeImage from "../../../../resources/archive/generativeart/colorfly-6.png";

const generativeArtWebsiteData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogInlineMedia
            image={video1}
            isVideo
            subtitle={<>Homepage of "colorfly" featuring flying spheres</>}
          />
          <BlogParagraph>
            In January of 2020, I took part in MIT's web lab. Web lab (also known by its course
            number, 6.148) is a web design competition where students learn the ins and outs of
            HTML, CSS, and JavaScript in order to develop unique sites that solve various problems
            and meet criteria specified by the judges. Some of those criteria include having dynamic
            site content, database integration, and personalized experiences based on user accounts.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "Visit Live Website",
                linkTo: "http://colorfly.herokuapp.com/",
                iconType: "link",
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
            Being fairly new to web development, I started out with little idea of what was
            possible. I spent time researching existing apps, and eventually came across some
            coloring book apps that I thought looked interesting. However, I noticed that many of
            them felt overly monotonous and some were almost more strenuating than relaxing. I've
            always had an interest in digital art software and image manipulation, such as Photoshop
            and Illustrator, so while I was brainstorming I decided to build a site that would allow
            me to create my own art through unique JavaScript driven interactions, trying to avoid
            the problems I'd seen in other apps.
          </BlogParagraph>
          <BlogParagraph>
            My first step was to get a working canvas and a draw tool onto a webpage. From there, I
            wasn't quite sure what my final product would be, so I continued experimenting,
            implementing other features such as a flood fill algorithm to mimic the bucket tool in
            Microsoft Paint.
          </BlogParagraph>
          <BlogInlineMedia
            image={gif0}
            subtitle={
              <>
                First iteration of flood fill. A time delay between recursive layers was used to
                view progress.
              </>
            }
          />
          <BlogParagraph>
            I kept brainstorming ideas decided to go with a simple generative tool where the user
            clicks and creates bouncing balls, or lines, that travel across the screen and
            "auto-paint" the canvas.
          </BlogParagraph>
          <BlogInlineMedia image={gif1} subtitle={<>Early test for generative line art.</>} />
        </>
      ),
    },
    {
      header: "Features",
      content: (
        <>
          <BlogParagraph>
            My goal was to give users enough control to modify the general look of their image
            through the ability to change brush size, color, and path shape, while randomizing many
            other parameters (such as velocity and initial direction) in order to make the barrier
            to entry low enough for your everyday user to easily create awesome canvases. All you
            have to do is click a few times, and you're off!
          </BlogParagraph>
          <BlogInlineMedia
            image={gif2}
            subtitle={<>Demo of the finished site using circular trace paths.</>}
          />
        </>
      ),
    },
    {
      header: "Theme Design",
      content: (
        <>
          <BlogParagraph>
            The color theme of the buttons and background are neutral and dark, allowing for the
            canvas creations to truly pop and create increasing contrast. Each page is designed to
            emphasize the site's key feature: generative art. On the home page, bouncing circles are
            randomly generated in the background, which along with the logo, alludes to the creative
            canvas the user will interact with. Examples of complete canvases are also selected
            randomly from the database. The rest of the pages utilize the website's simple and
            aesthetically pleasing color palettes to generate unique radial designs, following the
            flow of content on the bottom and sides of the page.
          </BlogParagraph>
          <BlogInlineMedia
            image={themeImage}
            subtitle={<>Swatch of consistent theme design across the site.</>}
          />
        </>
      ),
    },
    {
      header: "Reflections",
      content: (
        <>
          <BlogParagraph>
            Web lab was an incredible experience where I was able to hone my web development skills
            and fully dedicate myself to a single project. colorfly ended up making it to the
            semifinals, which I was more than pleased with. I truly enjoyed making the tool, and I
            honestly spent a significant amount of time just playing with it, seeing what I could
            create. Moving on to new websites, I aim to create better structured and modular code,
            allowing for easier modification and feature introduction, which was often very
            difficult with this project due to subpar organization. I've also come to appreciate art
            software even more, and I want to contribute to a more refined product one day.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "Visit Live Website",
                linkTo: "http://colorfly.herokuapp.com/",
                iconType: "link",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const generativeArtWebsiteProjectData = {
  coverImage: coverImage,
  projectName: "Generative Art Website",
  projectMonth: 0,
  projectYear: 2020,
  tags: ["React", "Illustrator", "MongoDB"],
  blogData: generativeArtWebsiteData,
  path: "generative-Art-Website",
};

export default generativeArtWebsiteProjectData;
