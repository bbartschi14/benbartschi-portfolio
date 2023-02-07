import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import Icon from "../../../modules/Blogs/Icon";
import BlogInlineCode from "../../../modules/Blogs/BlogInlineCode";
import { ProjectInfo } from "../../../modules/ProjectRoot";
import cover from "../../../../resources/portfolio/commons/cover.png";

const commonsData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            While working on large code bases and projects, it can be hard to visualize all of the
            various dependencies and connections that are made in order to perform critical tasks.
            When implementing new features, I often find myself sketching out filenames, classes,
            and functions in order to keep track of where changes need to be made. I've also been
            using Unreal Engine 4 for work, and I really enjoy using their Blueprint node system and
            dependency graphs for making sense of code.
          </BlogParagraph>

          <BlogParagraph>
            I was inspired by their systems and decided to make my own code planning web-tool. I
            wanted it to be graph-oriented and used to easily create visual documentation, so I
            coined it <i>commons</i>. The rest of this post goes into detail about how to use{" "}
            <i>commons</i>, what it might be good for, and some thoughts on how I developed it.
          </BlogParagraph>

          <BlogButtonRow
            buttons={[
              {
                text: "View Live Site",
                linkTo: "https://commons.herokuapp.com/",
                iconType: "link",
              },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/commons",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "Getting Started with commons",
      content: (
        <>
          <BlogParagraph>
            <i>commons</i> allows you to save all of your documentation associated with your
            account, so log in with Google to get started.
          </BlogParagraph>

          <BlogParagraph>
            Once logged in, you can start a new, empty project. The grid-lined area in the center of
            the project is your workspace to arrange classes, functions, and comments. Let's start
            by creating a new class by clicking and dragging from the "Add Class" circle icon in the
            top right. <Icon type="userPlus" />
          </BlogParagraph>

          <BlogParagraph>
            For our cooking game, we'll define some interactions of a few classes. Let's make a{" "}
            <BlogInlineCode>GameManager</BlogInlineCode>,{" "}
            <BlogInlineCode>ChefPlayer</BlogInlineCode>, and <BlogInlineCode>Food</BlogInlineCode>{" "}
            class. You can rename the selected class on the far right <i>Class</i> text field.{" "}
            <i>commons</i> also leaves space for documenting the parent class, as inheritance
            hierarchies are often crucial to well-structured code. Let's leave our{" "}
            <BlogInlineCode>GameManager</BlogInlineCode> and <BlogInlineCode>Food</BlogInlineCode>{" "}
            parents blank, and we can designate a <BlogInlineCode>Player</BlogInlineCode> base class
            for the <BlogInlineCode>ChefPlayer</BlogInlineCode> class, as that might implement the
            general functionality not specific to chefs.
          </BlogParagraph>

          <BlogParagraph>
            Now let's add some functions to our classes. Our{" "}
            <BlogInlineCode>GameManager</BlogInlineCode> will implement{" "}
            <BlogInlineCode>{`CreateOrder() => Food`}</BlogInlineCode>, which creates defines a
            random food that the players need to create. You can define this by selecting the game
            manager and clicking "Add Function" on the right. Select the newly created function
            which opens the functions properties for editing. You can change the name, return value,
            and input parameters. Since the return value of this function is custom type, select
            "Custom" and type in food. Our chef will implement{" "}
            <BlogInlineCode>{`CookFood(Food) => boolean`}</BlogInlineCode>, which takes in a food
            and returns a boolean of whether cooking was successful.
          </BlogParagraph>

          <BlogParagraph>
            Note that function and variable icons are color coded according to their type for
            convenience. Classes can also hold member variables. Let's practice defining some for
            our chef and food. Our chef will have <BlogInlineCode>name</BlogInlineCode> of type{" "}
            <BlogInlineCode>string</BlogInlineCode>, and our food will have{" "}
            <BlogInlineCode>isCooked</BlogInlineCode> of type{" "}
            <BlogInlineCode>boolean</BlogInlineCode>
          </BlogParagraph>
          <BlogParagraph>
            We can now define some control flows. In the hierarchy panel on the left, you can expand
            out each class to access their function nodes. Click the "+" plus icon by our{" "}
            <BlogInlineCode>ChefPlayer</BlogInlineCode>
            and <BlogInlineCode>GameManager</BlogInlineCode> functions to add them to the graph. We
            can now click and drag to create connections between nodes. We'll connect them as
            follows to show that the <BlogInlineCode>GameManager</BlogInlineCode> passes its order
            to the <BlogInlineCode>ChefPlayer</BlogInlineCode>, who then uses the food to cook.
          </BlogParagraph>

          <BlogParagraph>
            Finally, we can add comments to our graph by clicking and dragging off the comments
            button to the right. Encapsulate nodes and write comments to explain more of what is
            going on. You can also change the color of your comment boxes for improved visibilty.
          </BlogParagraph>

          <BlogParagraph>
            Now you can utilize the core features of <i>commons</i> to document and organize your
            own projects! You can delete nodes from the graph, but the class will persist in the
            hierarchy and allow you to re-add it if needed. You can also create multiple graphs per
            project with the <i>Graphs</i> tab on the left. When you're done, name your project at
            the top and click the save button on the left. When you visit the <i>commons</i>{" "}
            homepage, you'll be able to load in any saved projects.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Conclusion",
      content: (
        <>
          <BlogParagraph>
            Creating <i>commons</i> was both a great exercise in programming, and a very useful
            investment in a planning tool that I've used on several other projects. If you still
            haven't yet, check out the website and try it for yourself. The GitHub repo is also
            public if you're interested in learning more about how it was developed.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Live Site",
                linkTo: "https://commons.herokuapp.com/",
                iconType: "link",
              },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/commons",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const commonsProjectData: ProjectInfo = {
  coverImage: cover,
  projectName: "Collaborative 3D Canvas, <i>Commons</i>",
  projectMonth: 0,
  projectYear: 2023,
  tags: ["Multi-User", "React", "Design"],
  blogData: commonsData,
  path: "commons",
};

export default commonsProjectData;
