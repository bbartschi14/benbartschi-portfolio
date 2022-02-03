import BlogParagraph from "../modules/Blogs/BlogParagraph";
import BlogSection from "../modules/Blogs/BlogSection";
import { BlogSectionData } from "../modules/Blogs/BlogsTypes";
import profile from "../../resources/profileWide.jpg";
import "./About.css";
import BlogInlineLink from "../modules/Blogs/BlogInlineLink";
import { Tags } from "../modules/ProjectCover";
import BlogButtonRow from "../modules/Blogs/BlogButtonRow";
import resume from "../../resources/BartschiResume.pdf";
import Icon from "../modules/Blogs/Icon";

const aboutData: BlogSectionData = {
  header: "About",
  content: (
    <>
      <BlogParagraph>
        Ben is studying Computer Science at MIT with a minor in Civil & Environmental Engineering,
        graduating in Spring 2023. He has focused his curriculum around his passion for computer
        graphics and digital media, with some of his favorite classes including:
      </BlogParagraph>
      <ul>
        <li>
          📐 4.021{" "}
          <BlogInlineLink path="/archive/wax-Light-Enclosure" isRelative>
            Studio: How to Design
          </BlogInlineLink>
        </li>
        <li>
          🎨 6.837{" "}
          <BlogInlineLink path="/archive/procedural-building" isRelative>
            Computer Graphics
          </BlogInlineLink>
        </li>
        <li>
          🎮 CMS.611{" "}
          <BlogInlineLink path="https://pyraz.itch.io/bunny-for-america">
            Creating Video Games
          </BlogInlineLink>
        </li>
        <li>
          💡 6.163{" "}
          <BlogInlineLink path="/archive/strobe-lab" isRelative>
            Strobe Lab
          </BlogInlineLink>
        </li>
        <li>
          🎞️ 4.354{" "}
          <BlogInlineLink path="/archive/short-films" isRelative>
            Video & Related Media
          </BlogInlineLink>
        </li>
        <li>
          💻 6.031{" "}
          <BlogInlineLink path="https://youtu.be/8kU8g1PfAvg?t=107">
            Software Construction
          </BlogInlineLink>
        </li>
      </ul>
      <BlogParagraph>
        With an eye for photography and a brain for programming, Ben enjoys immersing himself in the
        creation process of multimedia projects. He finds inspiration in stylized video games and
        breathtaking animated movies.
      </BlogParagraph>
      <BlogParagraph>
        Outside of his work, Ben enjoys singing in an MIT a cappella group, knitting, doing
        freelance photography, serving in his local religious community, and having game nights with
        his lovely wife, Amanda.
      </BlogParagraph>
    </>
  ),
};

const skillsData: BlogSectionData = {
  header: "Skills",
  content: (
    <>
      <Tags
        highContrast
        tags={[
          "C++",
          "C",
          "Python",
          "JavaScript",
          "Blender",
          "Unreal Engine",
          "Unity",
          "AfterEffects",
        ]}
      />
    </>
  ),
};

const resumeData: BlogSectionData = {
  header: "Resume",
  content: (
    <>
      <div className="BlogButtonRow-wrapper">
        <a href={resume} target="_blank" className="BlogButtonRow-button u-noselect">
          View Resume
          <Icon type="link" style={{ marginLeft: "12px" }} />
        </a>
      </div>
    </>
  ),
};

const About = ({}) => {
  return (
    <>
      <img src={profile} style={{ width: "100%", opacity: 0.4 }} className="u-noselect" />

      <BlogSection data={aboutData} />
      <BlogSection data={skillsData} />
      <BlogSection data={resumeData} />
    </>
  );
};

export default About;
