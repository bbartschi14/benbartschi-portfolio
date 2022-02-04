import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import BlogCallout from "../../../modules/Blogs/BlogCallout";
import BlogCodeBlock from "../../../modules/Blogs/BlogCodeBlock";
import cover from "../../../../resources/portfolio/chistudio/cover.png";
import luxoBall from "../../../../resources/portfolio/chistudio/luxoBall.png";
import luxoJrLamp from "../../../../resources/portfolio/chistudio/luxoJrLamp.png";
import iceLions from "../../../../resources/portfolio/chistudio/iceLions.png";
import trello from "../../../../resources/portfolio/chistudio/trello.png";
import rngNoise from "../../../../resources/portfolio/chistudio/rngNoise.png";
import cornell from "../../../../resources/portfolio/chistudio/cornell.png";
import sponza from "../../../../resources/portfolio/chistudio/sponza.png";
import luxoBallAlbedoNormal from "../../../../resources/portfolio/chistudio/luxoBallProgress/luxoBallAlbedoNormal.png";
import timelineDemo from "../../../../resources/portfolio/chistudio/luxoBallProgress/timelineDemo.mp4";
import luxoBallDenoised from "../../../../resources/portfolio/chistudio/luxoBallProgress/4.png";
import luxoBallNoisy from "../../../../resources/portfolio/chistudio/luxoBallProgress/3.png";
import luxoBallTonemapped from "../../../../resources/portfolio/chistudio/luxoBallProgress/5.png";
import viewportDemo from "../../../../resources/portfolio/chistudio/viewportDemoSmaller.mp4";
import editModeDemo from "../../../../resources/portfolio/chistudio/editModeDemo.mp4";
import extrusionDemo from "../../../../resources/portfolio/chistudio/extrusionDemo.mp4";
import modifierDemo from "../../../../resources/portfolio/chistudio/modifierDemo.mp4";
import interpolationDemo from "../../../../resources/portfolio/chistudio/interpolationDemo.mp4";
import cameraKeyframeDemo from "../../../../resources/portfolio/chistudio/cameraKeyframeDemo.mp4";
import BlogInlineLink from "../../../modules/Blogs/BlogInlineLink";
import BlogInlineCode from "../../../modules/Blogs/BlogInlineCode";

const chiStudioData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            As someone who often finds themselves torn between the joy of using software to create
            art and the satisfaction of making software, a long-standing goal of mine has been to
            develop my own digital content creation (DCC) app. <i>Chi Studio</i> is the result of a
            few months of my spare time working towards that goal, and it explores key areas of
            functionality such as modeling, rendering, animating, and compositing. <i>Chi Studio</i>{" "}
            is written in C++, and utilizes various open-source libraries, including:{" "}
            <ul>
              <li>
                <BlogInlineLink path="https://github.com/ocornut/imgui">Dear ImGui</BlogInlineLink>{" "}
                and supplementary{" "}
                <BlogInlineLink path="https://github.com/CedricGuillemet/ImGuizmo">
                  ImGuizmo
                </BlogInlineLink>{" "}
                for UI and gizmo frameworks.
              </li>
              <li>
                Intel's{" "}
                <BlogInlineLink path="https://www.openimagedenoise.org/documentation.html">
                  Open Image Denoise
                </BlogInlineLink>{" "}
                for denoising path-traced renderings.
              </li>
              <li>
                <BlogInlineLink path="https://github.com/jbeder/yaml-cpp">yaml-cpp</BlogInlineLink>{" "}
                for serialization.
              </li>
            </ul>
          </BlogParagraph>
          <BlogCallout icon="book">
            For this project, I extensively utilized online learning resources, such as:
            <ul>
              <li style={{ fontSize: "16px" }}>
                <BlogInlineLink path="https://github.com/blender/blender">
                  Blender Source Code
                </BlogInlineLink>
              </li>
              <li style={{ fontSize: "16px" }}>
                The Cherno's Game Engine series{" "}
                <BlogInlineLink path="https://www.youtube.com/watch?v=Pegb5CZuibU">
                  on YouTube
                </BlogInlineLink>
              </li>
              <li style={{ fontSize: "16px" }}>
                Materials from MIT course{" "}
                <BlogInlineLink path="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-837-computer-graphics-fall-2012/">
                  6.837 Computer Graphics
                </BlogInlineLink>
              </li>
              <li style={{ fontSize: "16px" }}>
                <BlogInlineLink path="https://pbrt.org/">pbrt</BlogInlineLink>
              </li>
            </ul>
          </BlogCallout>
          <BlogInlineMedia
            image={cover}
            subtitle={<>Side by side view of render vs. scene view of Luxo Jr. in Chi Studio.</>}
          />
          <BlogParagraph>
            The remaining blog post outlines various implementation details and capabilities of{" "}
            <i>Chi Studio</i> in its current state, along with various features I would love to
            implement next.
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              {
                text: "View Github Repo",
                linkTo: "https://github.com/bbartschi14/chi-studio",
                iconType: "github",
              },
              {
                text: "Luxo Jr. Timelapse",
                linkTo: "https://youtu.be/SwbcQfokehQ",
                iconType: "youtube",
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
          <BlogInlineMedia
            image={trello}
            subtitle={
              <>
                I use Trello to keep track of tasks and features to be implemented, along with
                useful resources and important references. Good project management has been key to
                making progress, as there are an overwhelming amount of features that could be
                implemented (just look at the complexity of Blender, Maya, Houdini etc.).
              </>
            }
            maxWidthPixels={800}
          />
          <BlogParagraph>
            The <BlogInlineCode>Application</BlogInlineCode> class initializes GLFW and the ImGui UI
            at startup, and maintains control of the scene hierarchy of objects. The scene
            composition is inspired by game engines such as Unity, using an entity-component system.
            Each scene object is a <BlogInlineCode>SceneNode</BlogInlineCode> that has a{" "}
            <BlogInlineCode>Transform</BlogInlineCode> component that defines its 3D transformation
            matrices, and a number of other components such as
            <ul>
              <li>
                <BlogInlineCode>Rendering Component</BlogInlineCode>: Controls mesh data and
                rendering style.
              </li>
              <li>
                <BlogInlineCode>Light Component</BlogInlineCode>: Defines scene lights of different
                types such as point, directional, and mesh.
              </li>
              <li>
                <BlogInlineCode>Material Component</BlogInlineCode>: Maintains material properties
                of a scene node.
              </li>
            </ul>
            The scene nodes are updated through the{" "}
            <BlogInlineCode>Application::Tick()</BlogInlineCode> function, and at the end of each
            frame, the <BlogInlineCode>Renderer</BlogInlineCode> class uses the scene hierarchy to
            create a real-time rendering. That rendering uses <BlogInlineCode>glsl</BlogInlineCode>{" "}
            shaders and renders to a frame buffer texture. That texture is then displayed within the
            scene UI viewport, allowing it to be dynamically resized and positioned within the UI
            dockspaces. Custom OpenGL helper classes are maintained in the{" "}
            <BlogInlineCode>ChiGraphics/GL_Wrapper</BlogInlineCode> directory.
          </BlogParagraph>
          <BlogInlineMedia
            isVideo
            image={viewportDemo}
            subtitle={
              <>
                Real-time scene viewport with mouse picking, mesh visibility modes (solid,
                wireframe, points), selection outlining, and ImGuizmo transform gizmos.
              </>
            }
          ></BlogInlineMedia>
          <BlogParagraph>
            The application uses the scene camera to implement object mouse-picking, allowing the
            user to select objects by clicking on them directly in the viewport. Objects can be
            viewed in solid, wireframe, and points modes, and selected objects are highlighted using
            a Sobel edge detection rendering pipeline that goes as follows:
            <ol>
              <li>
                Selected objects are rendered pure white to a{" "}
                <BlogInlineLink path="http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-14-render-to-texture/#multiple-render-targets">
                  second render target
                </BlogInlineLink>{" "}
                called <BlogInlineCode>maskTexture</BlogInlineCode>
              </li>
              <li>
                <BlogInlineCode>maskTexture</BlogInlineCode> is run through a Sobel edge detection
                pass and blended with the desired outline color using the fragment shader below.
              </li>
              <li>
                The outline output from the previous step is blended on top of the normal scene
                color output.
              </li>
            </ol>
          </BlogParagraph>
          <BlogCodeBlock
            language="glsl"
            code={`// sobel.frag
...
// Sobel edge detection kernel
void make_kernel(inout vec4 n[9], sampler2D tex, vec2 coord)
{
  float w = 1.0 / width;
  float h = 1.0 / height;

  n[0] = texture2D(tex, coord + vec2( -w, -h));
  n[1] = texture2D(tex, coord + vec2(0.0, -h));
  n[2] = texture2D(tex, coord + vec2(  w, -h));
  n[3] = texture2D(tex, coord + vec2( -w, 0.0));
  n[4] = texture2D(tex, coord);
  n[5] = texture2D(tex, coord + vec2(  w, 0.0));
  n[6] = texture2D(tex, coord + vec2( -w, h));
  n[7] = texture2D(tex, coord + vec2(0.0, h));
  n[8] = texture2D(tex, coord + vec2(  w, h));
}

void main() 
{
  vec4 n[9];
  make_kernel( n, in_texture, tex_coord );

  // Use kernel to calculate color differentials
  vec4 sobel_edge_h = n[2] + (2.0*n[5]) + n[8] - (n[0] + (2.0*n[3]) + n[6]);
  vec4 sobel_edge_v = n[0] + (2.0*n[1]) + n[2] - (n[6] + (2.0*n[7]) + n[8]);
  vec4 sobel = sqrt((sobel_edge_h * sobel_edge_h) + (sobel_edge_v * sobel_edge_v));

  float alpha = length(sobel.rgb);

  // Blend the sobel result with our desired outline color, in this case a light blue
  frag_color = vec4( sobel.rgb * vec3(0.15, .25, .95), alpha );
}`}
            showLineNumbers
            highlight=""
          ></BlogCodeBlock>
        </>
      ),
    },
    {
      header: "Modeling",
      content: (
        <>
          <h3>Edit Mode</h3>
          <BlogParagraph>
            Meshes are created and represented using a{" "}
            <BlogInlineLink path="https://cs184.eecs.berkeley.edu/sp19/article/15/the-half-edge-data-structure">
              half-edge data structure
            </BlogInlineLink>
            . Basic primitives can be added to the scene using the hierarchy panel, then edited by
            selecting them and entering edit mode using the <BlogInlineCode>TAB</BlogInlineCode>{" "}
            key. When in edit mode, mesh primitives (faces, edges, vertices) can be transformed,
            deleted, and added through extrusions and other mesh operators. The primitives can be
            selected in the object data list within the edit mode panel, and they're also directly
            selectable in the scene viewport.
            <BlogCallout icon="cube">
              Edit mode primitive selection is implemented by ray casting from the camera, through
              the mouse and into the scene. The ray is checked for intersection with the selectable
              primitives. Faces use triangle-ray intersection, edges use cylinder-ray, and points
              use sphere-ray.
            </BlogCallout>
          </BlogParagraph>
          <BlogInlineMedia
            isVideo
            image={editModeDemo}
            subtitle={<>Edit mode demo, showing primitive selection and transforming.</>}
          ></BlogInlineMedia>
          <BlogParagraph>
            Face extrusion is implemented for both individual face extrusion, and regional
            extrusion. The regional extrusion was a fun algorithmic problem to solve, and my final
            implementation is able to handle any number of disconnected regions, with each region
            able to have holes within it. The high-level algorithm goes as follows:
            <ol>
              <li>
                Find all the connected regions of faces from the current selection.
                <ol type="i">
                  <li>Start with the first face and assign it to a new region by itself.</li>
                  <li>
                    Check all of its neighboring faces. If any are also selected, add them to the
                    current region. For any that aren't selected, the half-edge belonging to the
                    selected face that borders it should be added to the region's boundary loop
                    edges. Repeat this step on each neighbor that was added to the region.{" "}
                  </li>
                  <li>
                    Once the recursion of step ii. terminates, repeat from step i. for other
                    selected faces that haven't been assigned to a region.
                  </li>
                </ol>
              </li>
              <li>
                Per region, step 1. outputs an unordered set of all edges on its boundary, so we
                iterate over each set and sort it to found all of the closed loops.
              </li>
              <li>
                Finally, we can extrude each region by creating new edges and faces along each
                boundary loop, then shifting the original vertices in the selection along the normal
                vector.
              </li>
            </ol>
          </BlogParagraph>
          <BlogInlineMedia
            isVideo
            image={extrusionDemo}
            subtitle={
              <>
                Individual face extrusion is used on the left mesh, while regional extrusion is used
                on the right. Notice how the regions on the right maintain mesh connectivity while
                preserving the original boundary loops on both the outside and inside.
              </>
            }
          ></BlogInlineMedia>
          <h3>Modifiers</h3>
          <BlogParagraph>
            In addition to edit mode controls, modeling can be done using procedural,
            non-destructive modifiers. Using Blender's modifier system for reference of how it
            should function, I implemented it in <i>Chi Studio</i> by having the{" "}
            <BlogInlineCode>Rendering Component</BlogInlineCode> manage two separate vertex objects,
            one unmodified, and one with the modifier stack applied. The unmodified version can be
            adjusted in edit mode, then when switching back to object mode the modified mesh will be
            recalculated accordingly.
          </BlogParagraph>
          <BlogInlineMedia
            isVideo
            image={modifierDemo}
            subtitle={
              <>
                Modifier demo using the screw, subdivision surface, transform, and mirror modifiers.
                Notice how after extruding an edge of the plane the modified mesh is updated
                automatically, recalculating the same modifiers on the new base.
              </>
            }
          ></BlogInlineMedia>
          <BlogCallout icon="code">
            Modifier source code can be found in the{" "}
            <BlogInlineCode>ChiGraphics/Modifiers</BlogInlineCode> directory{" "}
            <BlogInlineLink path="https://github.com/bbartschi14/chi-studio/tree/main/ChiGraphics/Modifiers">
              here
            </BlogInlineLink>
            . More modifiers can easily be added by created new classes that implement the{" "}
            <BlogInlineCode>IModifier</BlogInlineCode> interface.
          </BlogCallout>
          <h3>Importing</h3>
          <BlogParagraph>
            <i>Chi Studio</i> currently supports importing .obj files with their .mtl files.
            Imported meshes can be flagged to maintain imported normals and UV coordinates, or can
            be modified directly once imported. Just like with any other mesh, imported objects can
            also be used with modifiers.
          </BlogParagraph>
          <h3>Future Work</h3>
          <BlogParagraph>
            The modeling functionalities can easily be extended further, and I would love to add a
            plethora of other modifiers and mesh operations. Some key ones that are sorely needed
            are edge loop cuts, beveling, box selection, and detaching faces.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Rendering",
      content: (
        <>
          <BlogInlineMedia
            image={luxoBall}
            subtitle={
              <>
                Luxo Ball, modeled and rendered in <i>Chi Studio</i>. Texture created in{" "}
                <i>Blender</i>.
              </>
            }
          ></BlogInlineMedia>
          <BlogParagraph>
            <i>Chi Studio</i> has an unbiased, CPU only path-tracing renderer. It can be used by
            placing a Tracing Camera node into the scene, then going to the Rendering tab and
            pressing <i>Render Image</i>. The camera node will be used as the render camera, taking
            its view matrix, focus distance, and aperture into account (the latter two being used
            for a thin lens approximation for depth of field).
          </BlogParagraph>
          <BlogParagraph>
            The renderer uses super-sampling to anti-alias each pixel, and the desired sample count
            can be set in the UI before rendering. The Rendering panel also has controls for setting
            the image dimensions, output location, HDRI environment, and max path bounces. When
            rendering animations, the frame range can be set, and the renderer will output each
            frame sequentially.
          </BlogParagraph>
          <BlogCallout icon="info">
            If you're interested in learning more about the basics of ray/path tracing, check out
            Peter Shirley's{" "}
            <BlogInlineLink path="https://raytracing.github.io/books/RayTracingInOneWeekend.html">
              Ray Tracing in One Weekend
            </BlogInlineLink>{" "}
            series.
          </BlogCallout>
          <BlogParagraph>
            Ray-mesh collisions are accelerated using an{" "}
            <BlogInlineLink path="https://github.com/bbartschi14/chi-studio/blob/main/ChiGraphics/Collision/Hittables/Octree.h">
              Octree
            </BlogInlineLink>{" "}
            spatial data structure, and the renderer also has support for parametric spheres and
            cylinders.
          </BlogParagraph>
          <h3>Multi-threading</h3>
          <BlogParagraph>
            The renderer uses <BlogInlineCode>std::async</BlogInlineCode> to multi-thread the
            rendering process. Currently, the implementation uses one async call per row of the
            image. On average, this sped up renders by around 4x, with some being up to 10x faster.
          </BlogParagraph>
          <BlogParagraph>
            Implementing multi-threading introduced a random number generation bug, where each row
            was getting the same numbers. This was caused because I was using{" "}
            <BlogInlineCode>rand()</BlogInlineCode>, a thread-unsafe function, as my base for RNG. I
            ended up writing a custom{" "}
            <BlogInlineLink path="https://github.com/bbartschi14/chi-studio/blob/main/ChiGraphics/RNG.h">
              RNG
            </BlogInlineLink>{" "}
            class using the <BlogInlineCode>random</BlogInlineCode> library to spin up unique
            generators per thread. Each generator is seeded with the current time plus an offset per
            thread, allowing more even randomness across the entire image.
          </BlogParagraph>
          <BlogInlineMedia
            image={rngNoise}
            subtitle={
              <>Vertical rendering artifacts caused by RNG not being thread-safe per row.</>
            }
            maxWidthPixels={600}
          ></BlogInlineMedia>
          <h3>BSDF Material</h3>
          <BlogParagraph>
            A BSDF material is used for shading objects. The BSDF uses the{" "}
            <BlogInlineLink path="https://www.pbr-book.org/3ed-2018/Reflection_Models/Microfacet_Models#MicrofacetDistributionFunctions">
              Beckmann Microfacet Distribution Model
            </BlogInlineLink>{" "}
            , and combines Cook-Torrance shading for the specular component and Lambertian shading
            for the diffuse component. The BSDF also uses multiple importance sampling when sampling
            the light hemisphere for light bounces. The material supports the following parameters:
            <ul>
              <li>Albedo</li>
              <li>Roughness</li>
              <li>Metallic</li>
              <li>Emittance</li>
              <li>Index of Refraction</li>
              <li>Transparent</li>
            </ul>
            Each of those parameters, in addition to a constant number, can also support texture
            maps, which are sampled according to the UV coordinates at ray intersection.
          </BlogParagraph>
          <BlogParagraph>
            Three different light types are supported. Point lights (with specifiable radius),
            directional lights, and mesh lights (determined by a material's emittance parameter).
          </BlogParagraph>
          <BlogInlineMedia
            image={cornell}
            subtitle={
              <>
                Cornell Box, modeled and rendered in Chi Studio. Apple texture from sketchfab.
                Demonstrates the flexibilty of the BSDF, with the walls and boxes being diffuse
                (high roughness), while the ground is metallic and the sphere is a transparent
                glass. The area light is created using the BSDF's emittance property, and the apple
                shows usage of texture sampling.
              </>
            }
            maxWidthPixels={600}
          ></BlogInlineMedia>
          <h3>Compositing</h3>
          <BlogParagraph>
            Once a path-traced render is complete, the image can be post-processed using the
            compositing system. <i>Chi Studio</i> uses Intel's Open Image Denoise, and processes
            render outputs by feeding it an albedo pass, normal pass, and the noisy render. Images
            can also be tonemapped, taking it from its original HDR output to a viewable LDR image.
          </BlogParagraph>
          <BlogInlineMedia
            image={luxoBallAlbedoNormal}
            subtitle={<>Albedo pass (top), and normal pass (bottom).</>}
            maxWidthPixels={600}
          ></BlogInlineMedia>
          <BlogParagraph>
            The above passes are generated by the path-tracer during rendering and are used for
            denoising. Note that the normal pass viewed here has been remapped from [-1, 1] to [0,
            1] to be viewable, and the OIDN needs the [-1, 1] version.
          </BlogParagraph>
          <BlogInlineMedia
            image={luxoBallNoisy}
            compareImage={luxoBallDenoised}
            isCompare
            subtitle={<>Noisy (left) vs Denoised (right). Both pre-tonemapping.</>}
          ></BlogInlineMedia>
          <BlogParagraph>
            <i>Chi Studio's</i> tonemapping image modifier includes several algorithms, and defaults
            to John Hable's Uncharted 2 algorithm, used in the following image.
          </BlogParagraph>
          <BlogCallout icon="images">
            To learn more about tonemapping algorithms, check out John Hable's blog post on{" "}
            <BlogInlineLink path="http://filmicworlds.com/blog/filmic-tonemapping-operators/">
              filmic tonemapping operators.
            </BlogInlineLink>
          </BlogCallout>
          <BlogInlineMedia
            compareImage={luxoBallTonemapped}
            image={luxoBallDenoised}
            isCompare
            subtitle={
              <>
                Denoised, pre-tonemap (left) vs Denoised and tonemapped (right). Note how the
                blown-out highlight on the ball gets nicely blended in.
              </>
            }
          ></BlogInlineMedia>
          <h3>Future Work</h3>
          <BlogParagraph>
            <ul>
              <li>Change the BSDF to a more robust implementation, such as Disney's BSDF</li>
              <li>Volumetric scattering material</li>
              <li>Curve/hair rendering</li>
              <li>Motion blur</li>
              <li>Rework the bloom modifier to work more like Blender's glare node</li>
              <li>Implement GPU rendering</li>
            </ul>
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Animation",
      content: (
        <>
          <BlogInlineMedia
            isVideo
            image={cameraKeyframeDemo}
            subtitle={
              <>
                Animation created using Chi Studio's keyframing system on the camera transform and
                focus distance.
              </>
            }
          ></BlogInlineMedia>
          <BlogParagraph>
            Animations can be created by keyframing available properties on scene components. These
            include:
            <ul>
              <li>Transform (rotation, location, scale)</li>
              <li>Material (albedo, roughness, etc...)</li>
              <li>Light (intensity, color)</li>
              <li>Camera (FOV, focus distance, aperture)</li>
            </ul>
          </BlogParagraph>
          <BlogInlineMedia
            isVideo
            image={timelineDemo}
            subtitle={
              <>
                Using the UI timeline panel to preview the luxo ball keyframe animation in the
                real-time viewport.
              </>
            }
          ></BlogInlineMedia>
          <BlogParagraph>
            Keyframes do not have customizable b-spline curves, but do come with 10 available
            interpolation modes, and can be specified for ease-in, ease-out, or ease-in-out.
          </BlogParagraph>
          <BlogInlineMedia
            isVideo
            image={interpolationDemo}
            subtitle={<>Demo of interpolation modes implemented in Chi Studio.</>}
            maxWidthPixels={600}
          ></BlogInlineMedia>
          <BlogParagraph>
            The animation above shows cubes being keyframed on their X location. From top to bottom,
            they use constant, linear, sinusoidal, quadratic, cubic, quartic, quintic, elastic,
            bounce, and back interpolation modes.
          </BlogParagraph>
          <BlogCallout icon="code">
            See all interpolation functions in the <BlogInlineCode>KeyframeTrack</BlogInlineCode>{" "}
            class{" "}
            <BlogInlineLink path="https://github.com/bbartschi14/chi-studio/blob/main/ChiGraphics/Keyframing/KeyframeTrack.cpp">
              here.
            </BlogInlineLink>
          </BlogCallout>
          <h3>Future Work</h3>
          <BlogParagraph>
            <ul>
              <li>Add support for keyframing mesh modifiers</li>
              <li>Allow for editable b-spline interpolations</li>
              <li>Live keyframe recording</li>
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
            <i>Chi Studio</i> is able to save and load files in the format of YAML, a{" "}
            <BlogInlineLink path="https://en.wikipedia.org/wiki/YAML">
              human-readable data-serialization language
            </BlogInlineLink>{" "}
            I used the library <BlogInlineCode>yaml-cpp</BlogInlineCode> for creating save files and
            parsing them on load. You can see my serialization code{" "}
            <BlogInlineLink path="https://github.com/bbartschi14/chi-studio/blob/main/ChiCore/Serialization/FileSerializer.cpp">
              here
            </BlogInlineLink>
          </BlogParagraph>{" "}
          <BlogCallout icon="youtube">
            If you're interested in a more in-depth tutorial on how to use{" "}
            <BlogInlineCode>yaml-cpp</BlogInlineCode>, check out The Cherno's{" "}
            <BlogInlineLink path="https://youtu.be/IEiOP7Y-Mbc">Youtube tutorial.</BlogInlineLink>
          </BlogCallout>
        </>
      ),
    },
    {
      header: "Luxo Jr Timelapse",
      content: (
        <>
          <div className="video-outside">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/SwbcQfokehQ?autoplay=1?loop=1`}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
              className="Reel-video"
            />
          </div>
          <BlogParagraph>
            The timelapse above shows me using <i>Chi Studio</i> to model and render a version of
            the Luxo Jr. lamp. The model showcases a number of features, such as the screw modifier
            for the base, head, and springs, and the mirror modifier for symmetric pieces.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Gallery",
      content: (
        <>
          <BlogParagraph>
            Full gallery of renders, including those previously used in this post.
          </BlogParagraph>
          <BlogInlineMedia
            image={luxoJrLamp}
            subtitle={<>Luxo Jr. Lamp (Pixar), modeled and rendered in Chi Studio.</>}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={luxoBallTonemapped}
            subtitle={
              <>
                Luxo Ball (Pixar), modeled and rendered in Chi Studio. Texture created in Blender.
              </>
            }
          ></BlogInlineMedia>
          <BlogInlineMedia
            isVideo
            image={cameraKeyframeDemo}
            subtitle={<>Luxo Ball continued, with animated camera.</>}
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={sponza}
            subtitle={
              <>
                Sponza model from{" "}
                <BlogInlineLink path="https://casual-effects.com/data/">
                  McGuire Computer Graphics Archive
                </BlogInlineLink>
                , imported and rendered in Chi Studio.
              </>
            }
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={iceLions}
            subtitle={
              <>
                Lion model from{" "}
                <BlogInlineLink path="https://www.cgtrader.com/free-3d-print-models/art/sculptures/lion-statue--10">
                  CGTrader
                </BlogInlineLink>
                , imported and rendered in Chi Studio with ice material and mesh mirror modifier.
              </>
            }
          ></BlogInlineMedia>
          <BlogInlineMedia
            image={cornell}
            subtitle={
              <>
                Cornell Box, modeled and rendered in Chi Studio. Apple texture and model made in
                Blender.
              </>
            }
          ></BlogInlineMedia>
          <BlogInlineMedia
            isVideo
            image={interpolationDemo}
            subtitle={
              <>
                Keyframe easing demo. Modeled and rendered in Chi Studio. Note how temporal
                instability of Open Image Denoise causes flickering in the metallic reflections, as
                this was rendered with a low sample count.
              </>
            }
          ></BlogInlineMedia>
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
