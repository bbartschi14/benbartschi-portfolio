import BlogButtonRow from "../../../modules/Blogs/BlogButtonRow";
import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import BlogCallout from "../../../modules/Blogs/BlogCallout";
import BlogCodeBlock from "../../../modules/Blogs/BlogCodeBlock";
import websiteCover from "../../../../resources/portfolio/desktopscene/websiteCoverUpdated.png";
import oldWebsiteVid from "../../../../resources/portfolio/desktopscene/canvas-1.mp4";
import image from "../../../../resources/portfolio/desktopscene/websiteCoverUpdated.png";
import night from "../../../../resources/portfolio/desktopscene/websiteNight.png";
import sketch from "../../../../resources/portfolio/desktopscene/sketch.jpg";
import progressgif from "../../../../resources/portfolio/desktopscene/progressiongif.gif";
import BlogInlineLink from "../../../modules/Blogs/BlogInlineLink";
import BlogInlineCode from "../../../modules/Blogs/BlogInlineCode";
import flipNormalsVid from "../../../../resources/portfolio/desktopscene/flipNormals.mp4";
import plantMaterialVid from "../../../../resources/portfolio/desktopscene/plantMaterial.mp4";
import earlyBakeTest from "../../../../resources/portfolio/desktopscene/earlyBakeTest.mp4";
import bakedDaySmall from "../../../../resources/portfolio/desktopscene/bakedDaySmall.jpg";
import blenderHierarchy from "../../../../resources/portfolio/desktopscene/blenderHierarchy.png";
import robotVid from "../../../../resources/portfolio/desktopscene/robotVid.mp4";
import clock from "../../../../resources/portfolio/desktopscene/clock.png";
import pointsVid from "../../../../resources/portfolio/desktopscene/pointsVid.mp4";

const websiteSceneData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          {/* <BlogCallout icon="camera">This is an important callout!</BlogCallout> */}
          <BlogButtonRow
            buttons={[
              { text: "View Live Project", linkTo: "/", iconType: "link" },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/benbartschi-portfolio",
                iconType: "github",
              },
            ]}
          />
          <BlogParagraph>
            About a year and a half ago, I revamped my portfolio website's homepage with an animated
            HTML canvas scene, displaying a small sky scene synched to the visitor's time of day.
          </BlogParagraph>
          <BlogInlineMedia
            image={oldWebsiteVid}
            subtitle={<>Old website homepage, shown scrubbing through the hours of the days.</>}
            isVideo
            maxWidthPixels={800}
          />
          <BlogParagraph>
            Originally I was quite happy with it, but as time passed I grew anxious to revamp the
            quality and feel of it. I had seen a number of awesome websites utilizing WebGL to
            create immersive 3D scenes and decided to begin my own project. My idea was to make a
            small desk scene, inspired by my own workstation and populated with snippets of my life.
            A bit of whiteboard-brainstorming later and I had a general sketch of how it would be
            laid out.
          </BlogParagraph>
          <BlogInlineMedia
            image={sketch}
            subtitle={<>Original marker sketch defining important pieces of the 3D scene.</>}
            maxWidthPixels={800}
          />
          {/* <BlogCodeBlock
            code={`const x = 2; // This is a comment\nlet y = 4;`}
            language={"javascript"}
            showLineNumbers={true}
            highlight={""}
          /> */}
          <BlogParagraph>
            The rest of this blog outlines my process, along with challenges faced along the way and
            various optimizations I took to be able to finish in a timely manner.
          </BlogParagraph>
          <BlogCallout icon="infoCircle">
            Another great resource I referenced was Bruno Simon's, <i>My Room in 3D</i> app found{" "}
            <BlogInlineLink path="https://my-room-in-3d.vercel.app/">here</BlogInlineLink>.
          </BlogCallout>
          <BlogInlineMedia
            image={image}
            subtitle={
              <>
                Screenshot of the current scene, live on <a>benbartschi.me</a>.
              </>
            }
          />
          <BlogButtonRow
            buttons={[
              { text: "View Live Project", linkTo: "/", iconType: "link" },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/benbartschi-portfolio",
                iconType: "github",
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
          <BlogInlineMedia
            image={progressgif}
            subtitle={
              <>
                Progression of test renders checking lighting and modeling for final composition.
                Rendered in Blender Cycles, gif optimized for loading speed.
              </>
            }
          />
          <BlogParagraph>
            The first step was to model the assets for the scene. I set up a camera in Blender to
            match my original sketch, then modeled and positioned everything in order of focal
            importance. I found that the large proportions of the window helped balance out the
            tightly packed desk and bulletin board taking up the rest of the screen. Once the main
            assets like the laptop, clock, books, and robot were in, I added in additional personal
            touches like my LaCie hard drive, Logitech vertical mouse, desk plant, and some old 3D
            projects in the form of figurines.
          </BlogParagraph>
          <BlogCallout icon="cube">
            To speed up my workflow, I used the Blender Add-on{" "}
            <BlogInlineLink
              path={"https://docs.blender.org/manual/en/latest/addons/add_mesh/archimesh.html"}
            >
              Archimesh
            </BlogInlineLink>{" "}
            to quickly iterate the base mesh for the window. It's great for architectural features
            such a walls, doors, windows, and columns, as well as interior pieces like shelves,
            lamps, and curtains.
          </BlogCallout>
          <BlogParagraph>
            Because the model was ultimately to be rendered in WebGL, it was important for me to
            optimize the mesh. Since the scene was only going to be viewed from the front, I could
            remove any face that was occluded by other pieces. For example, the books, laptop, and
            mouse were made almost completely empty from the back. Next, since all materials in{" "}
            <BlogInlineCode>Three.js</BlogInlineCode> would be rendered using{" "}
            <BlogInlineCode>THREE.FrontSide</BlogInlineCode> materials, I had to guarantee that all
            visible faces had proper front-facing normals.
          </BlogParagraph>
          <BlogInlineMedia
            image={flipNormalsVid}
            subtitle={
              <>
                In Blender, you can enable{" "}
                <BlogInlineCode>{"Viewport Overlays > Geometry > Face Orientation"}</BlogInlineCode>{" "}
                and normals facing the camera will appear blue, while back-facing will appear red.
                Normals can be flipped by selecting the faces in edit mode and using{" "}
                <BlogInlineCode>Flip</BlogInlineCode> in the normals panel. Shortcut{" "}
                <BlogInlineCode>Alt+N</BlogInlineCode>
              </>
            }
            isVideo
          />
        </>
      ),
    },
    {
      header: "Lights and Textures",
      content: (
        <>
          <BlogParagraph>
            When creating a scene for <BlogInlineCode>Three.js</BlogInlineCode>, the simplest way to
            light it is to use lit shaders on all materials (e.g.{" "}
            <BlogInlineCode>Phong</BlogInlineCode> or <BlogInlineCode>Physical</BlogInlineCode>{" "}
            material shaders), and then add dynamic lights in the code. This works well for simple
            scenes, but is limited to fast rasterization techniques for real-time rendering, and
            thus doesn't natively support shadows, ambient occlusion, and global illumination. Some
            of that can be added to a degree, but each additional feature and light will impact
            performance. Since my idea for the scene was a less dynamic but more realistic lighting
            composition, I opted to go for a precomputed lighting scheme of texture baking.
          </BlogParagraph>
          <BlogParagraph>
            I wanted to take advantage of the fact that all lighting would be precomputed by adding
            in lots of additional emissions and colored lights. The key light is the sun coming in
            through the window, with fill light coming from the floor lamp and an offscreen interior
            light. The laptop screen, hidden blue desk light, and bulletin board LEDs provide
            accents to focal points in the scene. I placed one final light above the clock to help
            accent its shape and shadow on the wall, making it feel more connected to the scene.
          </BlogParagraph>
          <BlogParagraph>
            Shading was a combination of procedural shaders and plain texture mapping, with
            proceduralism used on the snake plant and concrete, with wood pieces and bulletin board
            assets using image textures.
          </BlogParagraph>
          <BlogInlineMedia
            image={plantMaterialVid}
            subtitle={
              <>
                Demoing properties of the custom snake plant shader I made. The general principles
                include multiplying and modulo-ing the vertical UV coordinate to create the bands,
                and then mapping a parabola to the outer curve of each leaf the create the yellow
                edge blend. Noise is then distorted and added to each individually to create more
                organic transitions.
              </>
            }
            isVideo
          />
          <BlogCallout icon="images">
            To speed up my workflow, I used the Blender Add-on{" "}
            <BlogInlineLink
              path={"https://docs.blender.org/manual/en/latest/addons/3d_view/blenderkit.html"}
            >
              BlenderKit
            </BlogInlineLink>{" "}
            for wood textures.
          </BlogCallout>
        </>
      ),
    },
    {
      header: "Baking",
      content: (
        <>
          <BlogParagraph>
            In order to bake the entire scene into a single texture, I had to UV unwrap all objects
            and pack them onto a single map. I used a mix of manual unwrapping for important objects
            like the robot arm, bulletin board, and clock, and then used Blender's{" "}
            <BlogInlineCode>Smart UV Project</BlogInlineCode> to speed up the process on many other
            objects. It was important to make sure seams and islands all had sufficient margins
            between them to prevent texture sampling in <BlogInlineCode>Three.js</BlogInlineCode>{" "}
            from mixing different pieces unwantedly. My packing wasn't perfect, but it didn't take
            too long and gave enough resolution to important visuals to render without many
            artifacts.
          </BlogParagraph>
          <BlogInlineMedia
            image={earlyBakeTest}
            isVideo
            subtitle={
              <>
                Early web test using a baked lighting texture, baked in Blender using a default
                material on all of the mesh.
              </>
            }
          />
          <BlogParagraph>
            Since many of my actual materials used their own UV maps for texturing, I had to create
            separate UV maps for baking. For a short tutorial about creating multiple UV maps on the
            same object,{" "}
            <BlogInlineLink path="https://blender.stackexchange.com/questions/144910/multiple-uv-mapping-in-2-8-eevee">
              see this Blender stack exchange post
            </BlogInlineLink>
            .
          </BlogParagraph>
          <BlogCallout icon="info">
            Some tips I learned while working through this baking process:
            <ul>
              <li style={{ fontSize: "16px" }}>
                Baked images can be denoised and tonemapped using Blender's compositing nodes.
              </li>
              <li style={{ fontSize: "16px" }}>
                Objects can be baked one at a time without overwriting the image by unchecking the{" "}
                <BlogInlineCode>Clear Image</BlogInlineCode> option in the Bake settings. I found it
                helpful for iterating on single objects without having to wait long.
              </li>
              <li style={{ fontSize: "16px" }}>
                Avoid using view-dependent rendering features (such as the specular component of the
                BSDF shader), as they won't be baked and thus will make your render preview appear
                different than the bake result.
              </li>
            </ul>
          </BlogCallout>
          <BlogInlineMedia
            image={bakedDaySmall}
            subtitle={<>Example of the baked daylight texture.</>}
            maxWidthPixels={400}
          />
          <BlogParagraph>
            With the texture baked, I merged all of the static geometry into a single mesh (this
            allows the geometry to be drawn in a single draw call) and exported it with{" "}
            <BlogInlineCode>gltf 2.0</BlogInlineCode>. Importing everything into the website was
            fairly straightforward using <BlogInlineCode>react-three-fiber</BlogInlineCode> and{" "}
            <BlogInlineCode>react-three-drei</BlogInlineCode>. The general setup goes as follows:
          </BlogParagraph>
          <BlogCodeBlock
            code={`import { useGLTF, useTexture, Canvas } from "@react-three/drei";

const Room = (props) => {
  const { nodes } = useGLTF("/room.glb");
  const bakedTexture = useTexture("/baked.jpg");

  // "baked" is the name of the mesh object in blender.
  // We un-flip the texture Y to re-align it to our UVs.
  // meshBasicMaterial is used since we don't want any calculated lighting
  return (
    <Canvas>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </Canvas>
  );
};
  
useGLTF.preload("/room.glb");

export default Room;`}
            language={"jsx"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogParagraph>
            As some of the models were going to be dynamic (the robot arm and clock hands), I wanted
            to see if I could create a shadow effect for them. The normal mesh can't receive shadows
            since it uses a <BlogInlineCode>meshBasicMaterial</BlogInlineCode> shader. I was able to
            use a second copy of the room static mesh that acted as a shadow catcher, and then flag
            my dynamic objects to cast shadows on it.
          </BlogParagraph>
          <BlogCodeBlock
            code={`...

{/* Create a shadow catcher of the same mesh. */}
<mesh geometry={nodes.baked.geometry} receiveShadow>
  <shadowMaterial attach="material" opacity={0.2} />
</mesh>

...`}
            language={"jsx"}
            showLineNumbers={false}
            highlight={""}
          />
        </>
      ),
    },
    {
      header: "Robot Animation",
      content: (
        <>
          <BlogParagraph>
            One of the first engineering projects I ever did was putting together a wooden,
            hydraulic robot arm, and I thought it would be a fun way to experiment with simple
            rigging. The robot arm and wooden cubes take up the third of the desk in front of the
            window, which I considered to be a prime spot for it to be the dynamic focal point of
            the scene. I modeled it using{" "}
            <BlogInlineLink path="https://www.youtube.com/watch?v=P2r9U4wkjcc">
              this popular YouTube video
            </BlogInlineLink>{" "}
            for reference, although I changed the surface material to more of a recycled cardboard
            look.
          </BlogParagraph>
          <BlogParagraph>
            I created a simple rig using parenting relationships, which allows transforms to be
            exported hierarchically for the <BlogInlineCode>.glb</BlogInlineCode> format.
          </BlogParagraph>
          <BlogInlineMedia
            image={blenderHierarchy}
            subtitle={<>Blender hierarchy view of the robot mesh pieces.</>}
            maxWidthPixels={400}
          />
          <BlogParagraph>
            From there, I set up the robot mesh in React using nested{" "}
            <BlogInlineCode>{`<mesh>`}</BlogInlineCode> tags, which recreates the hierarchical
            relationships in the scene tree.
          </BlogParagraph>
          <BlogCodeBlock
            code={`import { useGLTF } from "@react-three/drei";

// We pass the texture as a prop from our room node
const Robot = (props) => {
  const { nodes } = useGLTF("/robot.glb");

  // Each mesh node should receive the proper object geometry with stored position 
  // and initial rotation. They also have a castShadow prop to ensure 
  // the shadow catcher receives it. Props omitted on children for brevity
  return (
    <mesh 
      geometry={nodes.robotBottom.geometry}
      position={nodes.robotBottom.position}
      rotation={[0, Math.PI / 180, 0]}
      castShadow>
      <meshBasicMaterial map={props.bakedTexture} map-flipY={false} />
      <mesh geometry={nodes.robotMid.geometry} ...>
        <mesh geometry={nodes.robotTop.geometry} ...>
          <mesh geometry={nodes.robotClawLeft.geometry} ...>
          </mesh>
          <mesh geometry={nodes.robotClawRight.geometry} ...>
          </mesh>
        </mesh>
      </mesh>
    </mesh>
  );
};
  
useGLTF.preload("/robot.glb");

export default Robot;`}
            language={"jsx"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogParagraph>
            With all the nodes set up, we can animate their rotation values to make it move! At some
            point, I would like to animate it using an Inverse Kinematics system and have it do
            something fun like follow the mouse, but for the time being my goal was to make it
            wander to different idle positions. For a fast and artistically controllable solution, I
            used the <BlogInlineCode>react-spring</BlogInlineCode> library.
            <BlogCallout icon="code">
              See{" "}
              <BlogInlineLink path="https://codesandbox.io/examples/package/@react-spring/web">
                awesome examples
              </BlogInlineLink>{" "}
              using <BlogInlineCode>react-spring</BlogInlineCode>{" "}
            </BlogCallout>
            Each animated value is initialized with the <BlogInlineCode>useSpring()</BlogInlineCode>{" "}
            hook, and then we can call <BlogInlineCode>api.start()</BlogInlineCode> to begin
            animating it using a mass-spring model. We also need to change our mesh tags to{" "}
            <BlogInlineCode>{`<animated.mesh>`}</BlogInlineCode> to get it to work.
          </BlogParagraph>
          <BlogCodeBlock
            code={`import { useSpring, animated } from "@react-spring/three";
...

// The animated rotation-y value for the base mesh of the robot
const [baseSpring, baseApi] = useSpring(
  () => ({ "rotation-y": 0, config: { mass: 3, friction: 20 } }),
  []
);
...

// Every random time interval, start animating the value to the desired rotation
useEffect(() => {
  let timeout;
  const wander = () => {
    baseApi.start({ "rotation-y": desiredRandomRotation });
    ...
    timeout = setTimeout(wander, randomTimeInterval);
  };
  wander();
  return () => clearTimeout(timeout);
}, []);
...

// Change to animated.mesh and pass baseSpring props to control the y rotation
return (
  <animated.mesh {...baseSpring}
    ...
  </animated.mesh>
);
...`}
            language={"jsx"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogParagraph>
            Adding animated properties for each of the robot pieces gives us a fun and bouncy
            character!
          </BlogParagraph>
          <BlogInlineMedia
            image={robotVid}
            subtitle={<>Animated robot arm using spring-based physics</>}
            maxWidthPixels={400}
            isVideo
          />
        </>
      ),
    },
    {
      header: "Date and Time",
      content: (
        <>
          <BlogParagraph>
            In order to make the scene feel even more alive, I wanted the clock and date display to
            be synchronized to whoever is viewing the page. The clock hands were exported and
            brought in similar to the robot arm pieces, except none of them were parented to each
            other. Each mesh origin was positioned around the center of the clock, making it easy to
            animate the hands by rotating around their x-axis. We can retrieve the current system
            time using JavaScript's <BlogInlineCode>Date</BlogInlineCode> class.
          </BlogParagraph>
          <BlogCallout icon="code">
            See Javascript <BlogInlineCode>Date</BlogInlineCode>{" "}
            <BlogInlineLink path="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">
              documentation
            </BlogInlineLink>
          </BlogCallout>
          <BlogCodeBlock
            code={`... 

// Within our clock mesh class
const date = useRef(new Date());
const hour = date.current.getHours();
const minutes = date.current.getMinutes();
const seconds = date.current.getSeconds();

// Update rotations to match time
secondHandMesh.current.rotation.x = 
  -(Math.PI / 180) * seconds.current * 6;
minuteHandMesh.current.rotation.x = 
  -(Math.PI / 180) * minutes.current * 6; // 6 degrees per minute
hourHandMesh.current.rotation.x =
  -(Math.PI / 180) * (hour.current * 30 + minutes.current * 0.5); // 30 degrees per hour plus half a degree per minute

...`}
            language={"jsx"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogParagraph>
            I originally considered a 7-segment type display for the date, but I wanted it to look
            cleaner and thus opted for flat, 3D text geometry. The month and day can be retrieved
            using <BlogInlineCode>date.getMonth()</BlogInlineCode> and{" "}
            <BlogInlineCode>date.getDate()</BlogInlineCode>, then we can load a custom font and
            create the text as follows.
          </BlogParagraph>
          <BlogCodeBlock
            code={`import { extend, useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

const font = useLoader(FontLoader, "/typefaces/Roboto_Mono_Reversed.json");
const config = useMemo(() => ({ font, size: 0.065, height: 0.001 }), [font]);
...
// Create the month and day text meshes
return (
  <>
    <mesh {/* pass transform props */}>
      <textGeometry args={[month, config]} />
      <meshBasicMaterial/>
    </mesh>
    <mesh {/* pass transform props */}>
      <textGeometry args={[day, config]} />
      <meshBasicMaterial />
    </mesh>
  </>
)
`}
            language={"jsx"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogParagraph>
            With some positioning and formatting, I ended up with a complete display.
          </BlogParagraph>
          <BlogInlineMedia
            image={clock}
            subtitle={<>Screenshot of the clock and date display.</>}
          />
        </>
      ),
    },
    {
      header: "Environment",
      content: (
        <>
          <BlogParagraph>
            In addition to the synched time and animated robot, I used ambient elements of the
            environment to inject more life and mood into the scene. The sky outside the window is
            filled with gentle, randomized clouds. I implemented the clouds as billboard textures,
            randomizing their transform within boundary limits and adjusting their color to match
            the time of day. By spacing them out along the axis into the screen, the clouds gain a
            pleasant parallax effect as they drift across the screen.
          </BlogParagraph>
          <BlogParagraph>
            Day mode brings some shimmering sun shafts in through the window. The shafts are
            implemented as instanced plane meshes, and their visual is handled by a custom shader.
            The shader uses a soft gradient texture along with the scene delta time and a randomized
            per-instance attribute to create the glowing effect. I tuned the glowing by linking the
            output alpha to a sine function and modulating the wave to the desired amplitude and
            frequency. Finally, setting the blend mode of the texture to{" "}
            <BlogInlineCode>THREE.AdditiveBlending</BlogInlineCode> allows it to appear as light
            illuminating the mesh beneath.
          </BlogParagraph>
          <BlogCallout icon="code">
            If you're interested in seeing how to inject custom shader code into existing{" "}
            <BlogInlineCode>Three.js</BlogInlineCode> shaders, or how to use{" "}
            <BlogInlineCode>InstancedBufferAttribute</BlogInlineCode> objects to pass per-instance
            attributes to instanced mesh shaders,{" "}
            <BlogInlineLink path="https://github.com/bbartschi14/benbartschi-portfolio/blob/main/src/components/modules/3DExperience/LightShafts.js">
              check out my light shafts implementation.
            </BlogInlineLink>
          </BlogCallout>
          <BlogParagraph>
            Finally, the stars in the night sky use a similar shader to the light shafts but is
            rendered using GL <BlogInlineCode>Points</BlogInlineCode> instead of instanced meshes,
            as they don't need to be stretched.
          </BlogParagraph>
          <BlogInlineMedia
            image={night}
            subtitle={
              <>
                Screenshot of the night time scene, live on <a>benbartschi.me</a>. Star and cloud
                particles visible through the window.
              </>
            }
          />
        </>
      ),
    }, // TODO
    {
      header: "Points of Interest",
      content: (
        <>
          <BlogParagraph>
            The current final piece of user interaction was made in the form of small HTML circles
            that reveal a tooltip upon mouse hover. HTML can be implemented using 3D CSS transforms,
            and <BlogInlineCode>react-three-drei</BlogInlineCode> has a helper class{" "}
            <BlogInlineLink path="https://github.com/pmndrs/drei#html">
              documented here
            </BlogInlineLink>
            . My goal was to make these points of interest not too intrusive while still inviting
            the user to interact with them. I ended up having them be hidden by default, and only be
            revealed when the mouse gets closer to them. I achieved the effect by casting mouse rays
            and checking intersections with spheres centered on each of the 3D points.
          </BlogParagraph>
          <BlogCodeBlock
            code={`// Instantiate necessary data fields, and access the scene camera and mouse
const sphere = useRef(
  new THREE.Sphere(
    new THREE.Vector3(props.position),
    sphereRadius
  )
);
const mouseRay = useRef(new THREE.Ray(new THREE.Vector3(), new THREE.Vector3()));
const [isVisible, setVisible] = useState(false);
const { camera, mouse } = useThree();

useFrame(() => {
  // Update ray and sphere parameters, then check intersection
  mouseRay.current.origin.set(camera.position);
  mouseRay.current.direction.set(mouse.x, mouse.y, 0);
  mouseRay.current.direction.unproject(camera);
  mouseRay.current.direction.sub(mouseRay.current.origin).normalize();
  sphere.current.center.set(props.position);
  setVisible(mouseRay.current.intersectsSphere(sphere.current));
});`}
            language={"jsx"}
            showLineNumbers={true}
            highlight={""}
          />
          <BlogCallout icon="exclamation">
            Note that <BlogInlineCode>drei</BlogInlineCode>'s HTML class applies z-index values to
            all elements to help manage layers, so they might occlude other non-3D elements if not
            handled properly.
          </BlogCallout>
          <BlogParagraph>
            We can then use the <BlogInlineCode>isVisible</BlogInlineCode> state to control
            visibility of the point, achieving the final result below.
          </BlogParagraph>

          <BlogInlineMedia
            image={pointsVid}
            subtitle={
              <>HTML points of interest shown appearing as the mouse gets closer to them.</>
            }
            // maxWidthPixels={400}
            isVideo
          />
        </>
      ),
    },
    {
      header: "Future Work",
      content: (
        <>
          <BlogParagraph>
            Although I'm pretty happy with how the scene looks, there are a number of features I
            wanted to include that I haven't had the time for yet. Some include:
            <ul>
              <li>
                <s>Adding a night time baked lighting texture.</s> Added as of{" "}
                <BlogInlineCode>Jan 30th, 2022</BlogInlineCode>
              </li>
              <li>
                <s>
                  Allowing the user to change the time and have the sky atmosphere reflect the
                  current time.
                </s>{" "}
                Also as of <BlogInlineCode>Jan 30th, 2022</BlogInlineCode>, day/night switch button
                is functioning.
              </li>
              <li>Implementing IK for robot animation.</li>
              <li>Having the robot pick up and move blocks around.</li>
              <li>Adding ambient sounds and click effects.</li>
              <li>Updating the book textures to include books I've read and classes I've taken.</li>
            </ul>
          </BlogParagraph>
          <BlogParagraph>
            Thanks for reading, and make sure to check out the scene if you still haven't!
          </BlogParagraph>
          <BlogButtonRow
            buttons={[
              { text: "View Live Project", linkTo: "/", iconType: "link" },
              {
                text: "Github",
                linkTo: "https://github.com/bbartschi14/benbartschi-portfolio",
                iconType: "github",
              },
            ]}
          />
        </>
      ),
    },
  ],
};

const websiteSceneProjectData = {
  coverImage: websiteCover,
  projectName: "Website Scene, <i>Desktop</i>",
  projectMonth: 0,
  projectYear: 2022,
  tags: ["Blender", "React", "Three.js"],
  blogData: websiteSceneData,
  path: "website-scene",
};

export default websiteSceneProjectData;
