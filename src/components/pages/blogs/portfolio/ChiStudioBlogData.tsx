import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import BlogCallout from "../../../modules/Blogs/BlogCallout";
import BlogCodeBlock from "../../../modules/Blogs/BlogCodeBlock";
import cover from "../../../../resources/portfolio/chistudio/cover.png";

const chiStudioData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogCallout icon="camera">This is an important callout!</BlogCallout>
          <BlogParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </BlogParagraph>
          <BlogCodeBlock
            code={`const x = 2;\nlet y = 4;`}
            language={"javascript"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogButtonRow
            buttons={[
              {
                text: "View Github Repo",
                linkTo: "https://github.com/bbartschi14/chi-studio",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
    {
      header: "Project Setup and UI",
      content: (
        <>
          <BlogParagraph>
            <ul>
              <li>OpenGL wrapper classes</li>
              <li>ImGui (dockspace branch) + ImGuizmo</li>
              <li>Entity component system for scene node tree</li>
              <li>
                Vertex objects represent meshes. Can be viewed by points, wireframe, or viewport
                shaded. (Simple phong shader with light eminating from the camera)
              </li>
              <li>
                Scene objects are selectable, selected objects are highlighted using sobel edge
                detection and the stencil buffer.
              </li>
              <li>Reference Hazel and Cherno</li>
              <li>Show trello process</li>
            </ul>
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Modeling",
      content: (
        <>
          <BlogParagraph>
            <ul>
              <li>Edit mode to modify mesh details</li>
              <li>Edit mode operations include extruding, deleting, moving, scaling, rotating</li>
              <li>
                Edit mode primitives are viewport selectable. Faces use triangle intersection, point
                use sphere intersection, and edges use cylinder intersection.
              </li>
              <li>
                Non destructive modifiers managed by rendering component. Rendering component keeps
                two copies of object data, one for unmodified to display in edit mode, one modified
                to be used for rendering.
              </li>
              <li>OBJ and mtl imports, along with UV coordinates.</li>
              <li>To Do: more edit mode operations like creating edge loop cuts, beveling.</li>
            </ul>
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Rendering",
      content: (
        <>
          <BlogParagraph>
            <ul>
              <li>CPU unbiased path tracer.</li>
              <li>Accelerated collision calculations using Octree structure</li>
              <li>Depth of field by thin lens approximation.</li>
              <li>HDRI environment sampling</li>
              <li>Lights: Point light with radius, directional, emissive materials</li>
              <li>
                Microfacet BSDF model, multiple importance sampling. Texture sampling per property.
              </li>
              <li>
                Multithreaded using std::async. RNG class to handle thread safe random sampling
              </li>
              <li>Compositing modifiers: Tonemapping, bloom</li>
              <li>Denoising using Intel Open Image Denoise</li>
              <li>Multi-frame animation renderings</li>
              <li>To do: Volume rendering</li>
            </ul>
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Animation",
      content: (
        <>
          <BlogParagraph>
            <ul>
              <li>Keyframing system.</li>
              <li>Preset interpolation/easing modes</li>
            </ul>
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Serialization",
      content: (
        <>
          <BlogParagraph>
            <ul>
              <li>YAML serialization using yaml-cpp library.</li>
            </ul>
          </BlogParagraph>
        </>
      ),
    },
    { header: "Gallery" },
  ],
};

const chiStudioProjectData = {
  coverImage: cover,
  projectName: "Content Creation App, <i>Chi Studio</i>",
  projectMonth: 11,
  projectYear: 2021,
  tags: ["C++", "Graphics", "Tools"],
  blogData: chiStudioData,
  path: "chi-studio",
};

export default chiStudioProjectData;
