import BlogParagraph from "../modules/Blogs/BlogParagraph";
import BlogSection from "../modules/Blogs/BlogSection";
import BlogInlineLink from "../modules/Blogs/BlogInlineLink";

import "./Reel.css";
import BlogCallout from "../modules/Blogs/BlogCallout";

const Reel = ({}) => {
  return (
    <>
      <div className="Reel-wrapper">
        <h1 className="Reel-heading">2022</h1>
        <div className="video-outside">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/vq4bfMUl_ew"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            className="Reel-video"
          />
        </div>
        <BlogSection
          data={{
            header: "Demo Reel 2022",
            content: (
              <>
                <BlogParagraph>
                  This reel features 4 projects I worked on from June 2021 - February 2022. To learn
                  more about my work on them, click the links below to visit their in-depth
                  breakdowns, or browse{" "}
                  <BlogInlineLink path="/portfolio">my portfolio</BlogInlineLink>.
                  <ul>
                    <li>
                      <BlogInlineLink path="/portfolio/chi-studio">Chi Studio</BlogInlineLink>, DCC
                      application written in C++
                    </li>
                    <li>
                      <BlogInlineLink path="/portfolio/website-scene">Desktop Scene</BlogInlineLink>
                      , real-time WebGL rendered scene
                    </li>
                    <li>
                      <BlogInlineLink path="/portfolio/beyondcad-dev">BeyondCAD</BlogInlineLink>,
                      visualization engine built with UE4
                    </li>
                    <li>
                      <BlogInlineLink path="/portfolio/tree-docs">TreeDocs</BlogInlineLink>, code
                      planner + visualizer
                    </li>
                  </ul>
                </BlogParagraph>
                <BlogCallout icon="youtube">
                  Backup YouTube link:{" "}
                  <BlogInlineLink path="https://youtu.be/vq4bfMUl_ew">
                    youtu.be/vq4bfMUl_ew
                  </BlogInlineLink>
                </BlogCallout>
              </>
            ),
          }}
        />
        <div style={{ margin: "64px 20px", borderTop: "1px solid rgb(100, 100, 100)" }}></div>
        <h1 className="Reel-heading">2021</h1>
        <div className="video-outside">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/wBSrTivJ7xo"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            className="Reel-video"
          />
        </div>
        <BlogSection
          data={{
            header: "Demo Reel 2021 (Archived)",
            content: (
              <>
                <BlogParagraph>
                  For breakdowns of projects featured in this reel, view my archive{" "}
                  <BlogInlineLink path="/archive">here</BlogInlineLink>.
                </BlogParagraph>
                <BlogCallout icon="youtube">
                  Backup YouTube link:{" "}
                  <BlogInlineLink path="https://youtu.be/wBSrTivJ7xo">
                    youtu.be/wBSrTivJ7xo
                  </BlogInlineLink>
                </BlogCallout>
              </>
            ),
          }}
        />
      </div>
    </>
  );
};

export default Reel;
