import BlogInlineMedia from "../../../modules/Blogs/BlogInlineMedia";
import BlogParagraph from "../../../modules/Blogs/BlogParagraph";
import { BlogData } from "../../../modules/Blogs/BlogsTypes";
import video0 from "../../../../resources/archive/proceduralbuildings/procgen-vid.mp4";
import image0 from "../../../../resources/archive/proceduralbuildings/procgen-thumbnail.jpg";
import bigHeroSixImage from "../../../../resources/archive/proceduralbuildings/procgen-5.jpg";
import townscaperImage from "../../../../resources/archive/proceduralbuildings/procgen-4.jpg";
import grammarImage from "../../../../resources/archive/proceduralbuildings/procgen-7.jpg";
import lagueImage from "../../../../resources/archive/proceduralbuildings/procgen-6.jpg";
import blockImage from "../../../../resources/archive/proceduralbuildings/procgen-8.jpg";
import perlinAnimatedVideo from "../../../../resources/archive/proceduralbuildings/terrainShift.mp4";
import octavesVideo from "../../../../resources/archive/proceduralbuildings/procgen-11.mp4";
import offsetVideo from "../../../../resources/archive/proceduralbuildings/procgen-10.mp4";
import wingImage from "../../../../resources/archive/proceduralbuildings/UWingBBox2.png";
import hWingImage from "../../../../resources/archive/proceduralbuildings/H-wing.jpg";
import plotVideo from "../../../../resources/archive/proceduralbuildings/procgen-13.mp4";
import cityTestVideo from "../../../../resources/archive/proceduralbuildings/cityTest.mp4";
import cityImage from "../../../../resources/archive/proceduralbuildings/City5.jpg";
import cityPanVideo from "../../../../resources/archive/proceduralbuildings/procgen-3.mp4";

const proceduralBuildingData: BlogData = {
  sections: [
    {
      header: "Introduction",
      content: (
        <>
          <BlogParagraph>
            An investigation in procedural generation, exploring its possibilities in terrain and
            city generation.
          </BlogParagraph>
          <BlogInlineMedia
            image={video0}
            subtitle={<>Demo of generated buildings. Real-time screen captured in Unity.</>}
            isVideo
          />
        </>
      ),
    },
    {
      header: "Motivation",
      content: (
        <>
          <BlogParagraph>
            Wikipedia defines procedural generation as a method of creating data algorithmically as
            opposed to manually, typically through a combination of human-generated assets and
            algorithms coupled with computer-generated randomness and processing power. Modern video
            games and animated features films rely heavily on procedurally generated content to
            allow expansive worlds and content without manuall crafting each asset and feature. Some
            common uses include creating plants, landscapes, dungeons, and textures. Popular
            examples include:
          </BlogParagraph>
          <ul>
            <li>
              Minecraft, in which its voxel-based maps are generated with pre-defined biomes,
              including deserts, forests, and tundras.
            </li>
            <li>
              Borderlands, using procedural generation to create large amounts of unique weapons.
            </li>
            <li>
              Disney Animation's Big Hero Six, which generated large parts of a city and crowds of
              people.
            </li>
          </ul>
          <BlogInlineMedia
            image={bigHeroSixImage}
            subtitle={
              <>
                Still from Big Hero 6, with showing off the combination of hand-modeled features
                with generated assets.
              </>
            }
          />
          <BlogParagraph>
            One of my main inspirations for this project came from Oskar Stahlberg's recent game
            release, Townscaper. He uses a wave-function collapse algorithm to take in simple
            user-inputted clicks to output beautifully cohesive towns. This form of procedural
            generation uses a preset database of assets along with rules of how they can be placed
            in the scene (e.g. roofs go at the top of walls, walls can either go on the ground or on
            other walls).
          </BlogParagraph>
          <BlogInlineMedia
            image={townscaperImage}
            subtitle={<>Screenshot from Townscaper, with procedurally generated towns.</>}
          />
          <BlogParagraph>
            Finally, I have always been fascinated with the way software such as SideFX's Houdini
            and the open-source Blender allow for such finely controlled large-scale generation, and
            I wanted to try created my own unique towns in Unity.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "Background Work",
      content: (
        <>
          <BlogInlineMedia
            image={lagueImage}
            subtitle={
              <>Screenshot from Sebastian Lague's series on procedurally generated planets.</>
            }
          />
          <BlogParagraph>
            Since my goal for the end of the project was to create a procedurally generated town, my
            first step was to implement a terrain generator. As the topic is really well documented,
            I closely followed a number of youtube videos by Sebastian Lague, where he covers
            procedural terrain generation both in flat surfaces, planets, and more. I solidified my
            knowledge of using Perlin noise to drive the terrain features by studying this paper,
            Realtime Procedural Terrain Generation, by Jacob Olsen at the University of Southern
            Denmark.
          </BlogParagraph>

          <BlogParagraph>
            Researching building generation was a little more challenging, as it's more common to
            find node setup tutorials for Houdini than it is to find algorithmic papers. I
            eventually came across a video created for the class CIS 700 at the University of
            Pennsylvania, discussing procedural building generation with grammars. I used her
            general idea of defining a building by a shape grammar and using specific rules on top
            of the grammar to create large numbers of unique buildings. Some other important
            concepts I drew from the video included a subtractive grammar strategy, and defining
            base general shapes for a building.
          </BlogParagraph>

          <BlogInlineMedia
            image={grammarImage}
            subtitle={<>Explanation of shape grammars from CIS 700.</>}
          />

          <BlogParagraph>
            Finally, I came across another paper, Procedural Modeling of Buildings. In it, they
            discuss the use of a sequential grammar optimized for spatial distribution, as opposed
            to the parallel grammars common to L-systems such as plant generation.
          </BlogParagraph>

          <BlogInlineMedia
            image={blockImage}
            subtitle={
              <>
                Figure from the paper above showing basic building blocks for their shape grammar.
              </>
            }
          />
        </>
      ),
    },
    {
      header: "Terrain Generation",
      content: (
        <>
          <BlogInlineMedia
            image={perlinAnimatedVideo}
            subtitle={
              <>
                A demo of the noise-driven terrain map. The noise offset is animated over time.
                Real-time screen captured in Unity.
              </>
            }
            isVideo
          />
          <BlogParagraph>
            For implementing procedural terrain, I started off by creating a noise map texture
            generator utilizing the Mathf.PerlinNoise built-in Unity function for each pixel. The
            noise generator takes inputs from controls for adjusting the map size, scale, random
            seed, number of noise octaves, persistence, lacunarity, and offset. The persistence and
            lacunarity control the effect of subsequent layers of noise.
          </BlogParagraph>
          <BlogInlineMedia
            image={octavesVideo}
            subtitle={<>The effect of layering several octaves of noise. Screenshotted in Unity.</>}
            isVideo
          />
          <BlogParagraph>
            With the noise generator complete, I then created a color texture generator that takes a
            noise map and outputs a colored terrain texture. The colors are user defined height
            ranges, which are then placed corresponding to elevation of the noise map. For example,
            the animations show a blue water color from noise values 0.0 to 0.2.
          </BlogParagraph>

          <BlogParagraph>
            Once the texture generation was complete, I created a plane mesh generator that has each
            vertex height driven by the corresponding noise map. The terrain chunk is set to 240 x
            240 vertices, so it can be divided by 2, 3, 4, 5, 6, 8, 10, and 12 for quick and easy
            detail control.
          </BlogParagraph>

          <BlogParagraph>
            Finally, I implemented a curve input that can post-process the height of the terrain to,
            for example, flatten out the water height or the mountain tops to create plateaus.
          </BlogParagraph>

          <BlogInlineMedia
            image={offsetVideo}
            subtitle={
              <>
                The effect of changing the noise's x-offset and the terrain's height multiplication
                factor. Real-time screen captured in Unity.
              </>
            }
            isVideo
          />
        </>
      ),
    },
    {
      header: "Building Generation",
      content: (
        <>
          <BlogInlineMedia
            image={video0}
            subtitle={<>Demo of generated buildings. Real-time screen captured in Unity.</>}
            isVideo
          />
          <BlogParagraph>
            My first step with building generation was defining a grammar for individual
            buildings.Simply put, I broke down a building into wings, a wing into stories and a
            roof, and stories and roofs into their own subtypes. I then went about creating a
            building renderer class in Unity that takes in a generated building object and
            instantiates prefabs of building pieces. The building pieces I used were a free Medieval
            Town pack from kenney.nl , with some personal modifications I made in Blender.
          </BlogParagraph>
          <BlogInlineMedia
            image={wingImage}
            subtitle={
              <>
                Buildings are split into wings. This 4x2 U-shaped building has 3 wings, highlighted
                in red, green, and blue.
              </>
            }
          />
          <BlogParagraph>
            With the renderer set up, I implemented a heirarchical strategy system that traverses
            the grammar of a building and defines how each piece of the building should be created.
            Each strategy is implemented as a scriptable object so that its parameters can be
            indiviually tuned. For example, when a building is created, it first looks at the given
            wings strategy, which might be to the effect of, "If the building is bigger than 1x1,
            make two wings in an L shape, else, make a single wing of the given size." Then for each
            wing, it checks the wing strategy, which might define how many stories there are. This
            continues for walls, roofs, and all other parts of the building. Some examples of
            strategies implemented for this project include:
          </BlogParagraph>
          <ul>
            <li>Long roof - roofs are oriented along the longest dimension of the wing</li>
            <li>
              Single point roof - size 1x1 wings are capped with a point roof to make it look like a
              tower
            </li>
            <li>Shrinking wing - each subsequent story of a wing gets reduced in size by 1</li>
            <li>
              Basic walls - the first floor of a wing gets 1 randomly placed door, and the rest of
              the walls have a user-defined percent chance of having a window.
            </li>
            <li>U, T, and H-shaped wings</li>
          </ul>
          <BlogInlineMedia
            image={hWingImage}
            subtitle={<>Another example using an H-shaped wings strategy.</>}
          />
          <BlogParagraph>
            I also created cascading strategies, allowing for multiple strategies to be checked
            consecutively for a single piece of the building, and whichever condition is met first
            could be used. Final steps of building generation included defining color palettes for
            the roofs, and creating a demo class that allows buildings to be created from a list of
            building settings and input sizes, along with includable randomization.
          </BlogParagraph>
        </>
      ),
    },
    {
      header: "City Generation",
      content: (
        <>
          <BlogInlineMedia
            image={plotVideo}
            subtitle={<>A demo of the plot generator. Real-time screen captured in Unity.</>}
            isVideo
          />
          <BlogParagraph>
            With both a building generator and terrain generator implemented, my final step was to
            combine them into a town generator. The approach was fairly simple and wasn't based in
            any fancy algorithms. The first step was to create a plot generator. The class takes in
            city bounds, along with a minimum and maximum size range for each individual plot. The
            single city rectangle is then continuously divided with randomly selected horizontal and
            vertical orientations, until every plot is within the specified size range.
          </BlogParagraph>
          <BlogInlineMedia
            image={cityTestVideo}
            subtitle={
              <>
                Early iteration of placing buildings on the plots. Real-time screen captured in
                Unity.
              </>
            }
            isVideo
          />
          <BlogParagraph>
            The city generator then takes a list of building settings and uses the building
            generator to place a structure on each plot. They are default placed in the bottom left
            corner, but can be placed with random offsets in addition to a rotational jitter to make
            the city look more scattered if desired. The generated buildings are then projected onto
            the surface of the terrain to result in little, procedurally generated towns.
          </BlogParagraph>

          <BlogInlineMedia image={cityImage} subtitle={<>Fully procecural town.</>} />
        </>
      ),
    },
    {
      header: "Conclusion and Future Work",
      content: (
        <>
          <BlogParagraph>
            Overall, I implemented a noise-driven terrain generator, along with a building
            generation system that takes in user defined strategies for each piece of the building.
            I then combined the two to create a procedural town generator.
          </BlogParagraph>
          <BlogParagraph>
            Most of my work went into creating the building generation system, and making it as
            flexible as possible for large varities of potential building strategies. The generator
            could easily be extended to create vastly different buildings then what I have shown,
            simply by creating more strategies to add to the class. The way the city plots are
            generated could also make it easy to include streets and empty park plots for the town.
          </BlogParagraph>
          <BlogParagraph>
            Overall, I'm really happy about the result and I look forward to expanding my current
            library of building strategies.
          </BlogParagraph>
          <BlogInlineMedia image={cityPanVideo} subtitle={<>Final flyover.</>} isVideo />
        </>
      ),
    },
  ],
};

const proceduralBuildingProjectData = {
  coverImage: image0,
  projectName: "Procedural Cities and Terrain",
  projectMonth: 10,
  projectYear: 2020,
  tags: ["C#", "Unity", "Blender"],
  blogData: proceduralBuildingData,
  path: "procedural-building",
};

export default proceduralBuildingProjectData;
