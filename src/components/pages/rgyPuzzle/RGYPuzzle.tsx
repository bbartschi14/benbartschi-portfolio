import "./RGYPuzzle.css";
import riddleImage from "../../../resources/puzzle/Riddle_1.png";
import RGYPuzzleCircle from "./RGYPuzzleCircle";
import { CircleData, NodeConnection, NodePoint } from "./RGYPuzzleTypes";
import { useState, useRef } from "react";
import Xarrow from "react-xarrows";
import RGYPuzzlePathPanel from "./RGYPuzzlePathPanel";
import RGYArrowConnector from "./RGYArrowConnector";

const connections: NodeConnection[] = [
  {
    firstConnection: 0,
    firstIsFront: true,
    secondConnection: 2,
    secondIsFront: true,
    helpers: [0],
  },
  {
    firstConnection: 0,
    firstIsFront: true,
    secondConnection: 3,
    secondIsFront: true,
    helpers: [1],
  },
  {
    firstConnection: 0,
    firstIsFront: true,
    secondConnection: 5,
    secondIsFront: false,
    helpers: [2, 7],
  },
  {
    firstConnection: 0,
    firstIsFront: true,
    secondConnection: 10,
    secondIsFront: false,
    helpers: [2, 12],
  },
  {
    firstConnection: 0,
    firstIsFront: true,
    secondConnection: 15,
    secondIsFront: true,
    helpers: [2],
  },
  {
    firstConnection: 0,
    firstIsFront: true,
    secondConnection: 11,
    secondIsFront: true,
    helpers: [2, 12],
  },
  { firstConnection: 0, firstIsFront: false, secondConnection: 1, secondIsFront: true },
  {
    firstConnection: 0,
    firstIsFront: false,
    secondConnection: 6,
    secondIsFront: true,
    helpers: [3, 8],
  },
  {
    firstConnection: 0,
    firstIsFront: false,
    secondConnection: 7,
    secondIsFront: true,
    helpers: [3],
  },

  {
    firstConnection: 1,
    firstIsFront: true,
    secondConnection: 6,
    secondIsFront: true,
    helpers: [3, 8],
  },
  {
    firstConnection: 1,
    firstIsFront: true,
    secondConnection: 7,
    secondIsFront: true,
    helpers: [3],
  },
  {
    firstConnection: 1,
    firstIsFront: false,
    secondConnection: 6,
    secondIsFront: false,
    helpers: [4, 9],
  },
  {
    firstConnection: 1,
    firstIsFront: false,
    secondConnection: 8,
    secondIsFront: true,
    helpers: [4],
  },

  {
    firstConnection: 2,
    firstIsFront: true,
    secondConnection: 3,
    secondIsFront: true,
    helpers: [0, 1],
  },
  {
    firstConnection: 2,
    firstIsFront: true,
    secondConnection: 5,
    secondIsFront: false,
    helpers: [0, 2, 7],
  },
  {
    firstConnection: 2,
    firstIsFront: true,
    secondConnection: 10,
    secondIsFront: false,
    helpers: [0, 2, 12],
  },
  {
    firstConnection: 2,
    firstIsFront: true,
    secondConnection: 11,
    secondIsFront: true,
    helpers: [0, 2, 12],
  },
  {
    firstConnection: 2,
    firstIsFront: true,
    secondConnection: 15,
    secondIsFront: true,
    helpers: [0, 2],
  },

  {
    firstConnection: 2,
    firstIsFront: false,
    secondConnection: 3,
    secondIsFront: false,
    helpers: [5, 6],
  },
  {
    firstConnection: 2,
    firstIsFront: false,
    secondConnection: 4,
    secondIsFront: false,
    helpers: [5],
  },
  {
    firstConnection: 2,
    firstIsFront: false,
    secondConnection: 5,
    secondIsFront: true,
    helpers: [5],
  },
  {
    firstConnection: 2,
    firstIsFront: false,
    secondConnection: 9,
    secondIsFront: true,
    helpers: [10],
  },
  {
    firstConnection: 2,
    firstIsFront: false,
    secondConnection: 18,
    secondIsFront: true,
    helpers: [13],
  },
  {
    firstConnection: 2,
    firstIsFront: false,
    secondConnection: 26,
    secondIsFront: true,
    helpers: [14],
  },

  {
    firstConnection: 3,
    firstIsFront: true,
    secondConnection: 5,
    secondIsFront: false,
    helpers: [1, 2, 7],
  },
  {
    firstConnection: 3,
    firstIsFront: true,
    secondConnection: 10,
    secondIsFront: false,
    helpers: [1, 2, 12],
  },
  {
    firstConnection: 3,
    firstIsFront: true,
    secondConnection: 11,
    secondIsFront: true,
    helpers: [1, 2, 12],
  },
  {
    firstConnection: 3,
    firstIsFront: true,
    secondConnection: 15,
    secondIsFront: true,
    helpers: [1, 2],
  },

  {
    firstConnection: 3,
    firstIsFront: false,
    secondConnection: 4,
    secondIsFront: false,
    helpers: [6],
  },
  {
    firstConnection: 3,
    firstIsFront: false,
    secondConnection: 5,
    secondIsFront: true,
    helpers: [6],
  },
  {
    firstConnection: 3,
    firstIsFront: false,
    secondConnection: 9,
    secondIsFront: true,
    helpers: [6, 5, 10],
  },
  {
    firstConnection: 3,
    firstIsFront: false,
    secondConnection: 18,
    secondIsFront: true,
    helpers: [6, 5, 13],
  },
  {
    firstConnection: 3,
    firstIsFront: false,
    secondConnection: 26,
    secondIsFront: true,
    helpers: [6, 5, 14],
  },

  {
    firstConnection: 4,
    firstIsFront: false,
    secondConnection: 5,
    secondIsFront: true,
    helpers: [],
  },
  {
    firstConnection: 4,
    firstIsFront: false,
    secondConnection: 9,
    secondIsFront: true,
    helpers: [5, 10],
  },
  {
    firstConnection: 4,
    firstIsFront: false,
    secondConnection: 18,
    secondIsFront: true,
    helpers: [5, 13],
  },
  {
    firstConnection: 4,
    firstIsFront: false,
    secondConnection: 26,
    secondIsFront: true,
    helpers: [5, 14],
  },

  {
    firstConnection: 5,
    firstIsFront: true,
    secondConnection: 9,
    secondIsFront: true,
    helpers: [5, 10],
  },
  {
    firstConnection: 5,
    firstIsFront: true,
    secondConnection: 18,
    secondIsFront: true,
    helpers: [5, 13],
  },
  {
    firstConnection: 5,
    firstIsFront: true,
    secondConnection: 26,
    secondIsFront: true,
    helpers: [5, 14],
  },

  {
    firstConnection: 5,
    firstIsFront: false,
    secondConnection: 10,
    secondIsFront: false,
    helpers: [7, 12],
  },
  {
    firstConnection: 5,
    firstIsFront: false,
    secondConnection: 11,
    secondIsFront: true,
    helpers: [7, 12],
  },
  {
    firstConnection: 5,
    firstIsFront: false,
    secondConnection: 15,
    secondIsFront: true,
    helpers: [7],
  },

  {
    firstConnection: 6,
    firstIsFront: true,
    secondConnection: 7,
    secondIsFront: true,
    helpers: [8],
  },
  {
    firstConnection: 6,
    firstIsFront: false,
    secondConnection: 8,
    secondIsFront: true,
    helpers: [9],
  },

  {
    firstConnection: 7,
    firstIsFront: false,
    secondConnection: 11,
    secondIsFront: false,
    helpers: [],
  },
  {
    firstConnection: 7,
    firstIsFront: false,
    secondConnection: 12,
    secondIsFront: true,
    helpers: [],
  },
  {
    firstConnection: 7,
    firstIsFront: false,
    secondConnection: 16,
    secondIsFront: true,
    helpers: [],
  },

  {
    firstConnection: 8,
    firstIsFront: false,
    secondConnection: 12,
    secondIsFront: false,
    helpers: [],
  },
  {
    firstConnection: 8,
    firstIsFront: false,
    secondConnection: 13,
    secondIsFront: true,
    helpers: [],
  },
  {
    firstConnection: 8,
    firstIsFront: false,
    secondConnection: 17,
    secondIsFront: true,
    helpers: [],
  },

  {
    firstConnection: 9,
    firstIsFront: true,
    secondConnection: 18,
    secondIsFront: true,
    helpers: [10, 13],
  },
  {
    firstConnection: 9,
    firstIsFront: true,
    secondConnection: 26,
    secondIsFront: true,
    helpers: [10, 14],
  },
  {
    firstConnection: 9,
    firstIsFront: false,
    secondConnection: 10,
    secondIsFront: true,
    helpers: [],
  },
  {
    firstConnection: 9,
    firstIsFront: false,
    secondConnection: 14,
    secondIsFront: true,
    helpers: [11],
  },

  {
    firstConnection: 10,
    firstIsFront: true,
    secondConnection: 14,
    secondIsFront: true,
    helpers: [11],
  },
  {
    firstConnection: 10,
    firstIsFront: false,
    secondConnection: 11,
    secondIsFront: true,
    helpers: [],
  },
  {
    firstConnection: 10,
    firstIsFront: false,
    secondConnection: 15,
    secondIsFront: true,
    helpers: [12],
  },

  { firstConnection: 11, firstIsFront: true, secondConnection: 15, secondIsFront: true },
  { firstConnection: 11, firstIsFront: false, secondConnection: 12, secondIsFront: true },
  { firstConnection: 11, firstIsFront: false, secondConnection: 16, secondIsFront: true },

  { firstConnection: 12, firstIsFront: true, secondConnection: 16, secondIsFront: true },
  { firstConnection: 12, firstIsFront: false, secondConnection: 13, secondIsFront: true },
  { firstConnection: 12, firstIsFront: false, secondConnection: 17, secondIsFront: true },

  { firstConnection: 13, firstIsFront: true, secondConnection: 17, secondIsFront: true },

  { firstConnection: 14, firstIsFront: false, secondConnection: 18, secondIsFront: false },
  { firstConnection: 14, firstIsFront: false, secondConnection: 19, secondIsFront: true },
  { firstConnection: 14, firstIsFront: false, secondConnection: 22, secondIsFront: true },

  { firstConnection: 15, firstIsFront: false, secondConnection: 19, secondIsFront: false },
  { firstConnection: 15, firstIsFront: false, secondConnection: 20, secondIsFront: true },
  { firstConnection: 15, firstIsFront: false, secondConnection: 23, secondIsFront: true },

  { firstConnection: 16, firstIsFront: false, secondConnection: 20, secondIsFront: false },
  { firstConnection: 16, firstIsFront: false, secondConnection: 21, secondIsFront: true },
  { firstConnection: 16, firstIsFront: false, secondConnection: 24, secondIsFront: true },

  { firstConnection: 17, firstIsFront: false, secondConnection: 21, secondIsFront: false },
  { firstConnection: 17, firstIsFront: false, secondConnection: 25, secondIsFront: true },

  { firstConnection: 18, firstIsFront: true, secondConnection: 26, secondIsFront: true },
  { firstConnection: 18, firstIsFront: false, secondConnection: 19, secondIsFront: true },
  { firstConnection: 18, firstIsFront: false, secondConnection: 22, secondIsFront: true },

  { firstConnection: 19, firstIsFront: true, secondConnection: 22, secondIsFront: true },
  { firstConnection: 19, firstIsFront: false, secondConnection: 20, secondIsFront: true },
  { firstConnection: 19, firstIsFront: false, secondConnection: 23, secondIsFront: true },

  { firstConnection: 20, firstIsFront: true, secondConnection: 23, secondIsFront: true },
  { firstConnection: 20, firstIsFront: false, secondConnection: 21, secondIsFront: true },
  { firstConnection: 20, firstIsFront: false, secondConnection: 24, secondIsFront: true },

  { firstConnection: 21, firstIsFront: true, secondConnection: 24, secondIsFront: true },
  { firstConnection: 21, firstIsFront: false, secondConnection: 25, secondIsFront: true },

  { firstConnection: 22, firstIsFront: false, secondConnection: 26, secondIsFront: false },
  { firstConnection: 22, firstIsFront: false, secondConnection: 27, secondIsFront: true },

  { firstConnection: 23, firstIsFront: false, secondConnection: 27, secondIsFront: false },
  { firstConnection: 23, firstIsFront: false, secondConnection: 28, secondIsFront: true },

  { firstConnection: 24, firstIsFront: false, secondConnection: 28, secondIsFront: false },
  { firstConnection: 24, firstIsFront: false, secondConnection: 29, secondIsFront: true },

  { firstConnection: 25, firstIsFront: false, secondConnection: 29, secondIsFront: false },

  { firstConnection: 26, firstIsFront: false, secondConnection: 27, secondIsFront: true },

  { firstConnection: 27, firstIsFront: false, secondConnection: 28, secondIsFront: true },

  { firstConnection: 28, firstIsFront: false, secondConnection: 29, secondIsFront: true },
];

const circleDataArray: CircleData[] = [
  {
    leftOffset: 55,
    topOffset: 8,
    colorType: 2,
    id: 0,
    isHorizontal: true,
  },
  { leftOffset: 67, topOffset: 8, colorType: 1, id: 1, isHorizontal: true },
  { leftOffset: 25, topOffset: 17, colorType: 2, id: 2, isHorizontal: false },
  { leftOffset: 37, topOffset: 17, colorType: 1, id: 3, isHorizontal: false },
  {
    leftOffset: 19,
    topOffset: 26,
    colorType: 0,
    id: 4,
    isHorizontal: true,
  },
  { leftOffset: 43, topOffset: 26, colorType: 0, id: 5, isHorizontal: true },
  { leftOffset: 67, topOffset: 25, colorType: 2, id: 6, isHorizontal: true },
  { leftOffset: 61, topOffset: 35, colorType: 0, id: 7, isHorizontal: false },
  { leftOffset: 73, topOffset: 35, colorType: 0, id: 8, isHorizontal: false },
  { leftOffset: 31, topOffset: 44, colorType: 2, id: 9, isHorizontal: true },
  {
    leftOffset: 43,
    topOffset: 44,
    colorType: 0,
    id: 10,
    isHorizontal: true,
  },
  {
    leftOffset: 55,
    topOffset: 44,
    colorType: 2,
    id: 11,
    isHorizontal: true,
  },
  {
    leftOffset: 67,
    topOffset: 44,
    colorType: 1,
    id: 12,
    isHorizontal: true,
  },
  {
    leftOffset: 79,
    topOffset: 44,
    colorType: 1,
    id: 13,
    isHorizontal: true,
  },
  {
    leftOffset: 37,
    topOffset: 53,
    colorType: 1,
    id: 14,
    isHorizontal: false,
  },
  {
    leftOffset: 49,
    topOffset: 53,
    colorType: 1,
    id: 15,
    isHorizontal: false,
  },
  {
    leftOffset: 61,
    topOffset: 53,
    colorType: 1,
    id: 16,
    isHorizontal: false,
  },
  {
    leftOffset: 73,
    topOffset: 53,
    colorType: 2,
    id: 17,
    isHorizontal: false,
  },
  {
    leftOffset: 31,
    topOffset: 62,
    colorType: 0,
    id: 18,
    isHorizontal: true,
  },
  {
    leftOffset: 43,
    topOffset: 62,
    colorType: 2,
    id: 19,
    isHorizontal: true,
  },
  {
    leftOffset: 55,
    topOffset: 62,
    colorType: 0,
    id: 20,
    isHorizontal: true,
  },
  {
    leftOffset: 67,
    topOffset: 62,
    colorType: 1,
    id: 21,
    isHorizontal: true,
  },
  {
    leftOffset: 37,
    topOffset: 70,
    colorType: 2,
    id: 22,
    isHorizontal: false,
  },
  {
    leftOffset: 49,
    topOffset: 70,
    colorType: 1,
    id: 23,
    isHorizontal: false,
  },
  {
    leftOffset: 61,
    topOffset: 70,
    colorType: 2,
    id: 24,
    isHorizontal: false,
  },
  {
    leftOffset: 73,
    topOffset: 70,
    colorType: 0,
    id: 25,
    isHorizontal: false,
  },
  {
    leftOffset: 31,
    topOffset: 79,
    colorType: 1,
    id: 26,
    isHorizontal: true,
  },
  {
    leftOffset: 43,
    topOffset: 79,
    colorType: 0,
    id: 27,
    isHorizontal: true,
  },
  {
    leftOffset: 55,
    topOffset: 79,
    colorType: 0,
    id: 28,
    isHorizontal: true,
  },
  {
    leftOffset: 67,
    topOffset: 79,
    colorType: 1,
    id: 29,
    isHorizontal: true,
  },
];

const helperNodes = [
  { left: 25, top: 8, id: 0 },
  { left: 37, top: 8, id: 1 },
  { left: 49, top: 8, id: 2 },
  { left: 61, top: 8, id: 3 },
  { left: 73, top: 8, id: 4 },
  { left: 25, top: 26, id: 5 },
  { left: 37, top: 26, id: 6 },
  { left: 49, top: 26, id: 7 },
  { left: 61, top: 26, id: 8 },
  { left: 73, top: 26, id: 9 },
  { left: 25, top: 44, id: 10 },
  { left: 37, top: 44, id: 11 },
  { left: 49, top: 44, id: 12 },
  { left: 25, top: 62, id: 13 },
  { left: 25, top: 79, id: 14 },
];

const RGYPuzzle = () => {
  const [hoveredId, setHoveredId] = useState(-1);
  const [showEntireSelected, setShowEntireSelected] = useState(false);
  const [selectedPathId, setSelectedPathId] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [searchDepth, setSearchDepth] = useState(20);
  const [foundPaths, setFoundPaths] = useState<NodePoint[][]>([]);

  const onNodeHovered = (id: number) => {
    setHoveredId(id);
  };

  const onNodeUnhovered = (id: number) => {
    setHoveredId(-1);
  };

  const search = (
    startingNode: number,
    isStartingFront: boolean,
    searchNode: number,
    maxDepth: number
  ): NodePoint[][] => {
    let paths: NodePoint[][][] = [[[{ id: startingNode, isFront: isStartingFront }]]];
    let foundPaths: NodePoint[][] = [];
    let depth: number = 0;
    while (true) {
      let newPaths: NodePoint[][] = [];
      for (const path of paths[depth]) {
        let currentNodePoint: NodePoint = path[path.length - 1];
        for (const connection of connections.filter(
          (c) =>
            (c.firstConnection == currentNodePoint.id &&
              c.firstIsFront == currentNodePoint.isFront &&
              circleDataArray[c.secondConnection].colorType % 3 ==
                (circleDataArray[c.firstConnection].colorType + 1) % 3) ||
            (c.secondConnection == currentNodePoint.id &&
              c.secondIsFront == currentNodePoint.isFront &&
              circleDataArray[c.firstConnection].colorType % 3 ==
                (circleDataArray[c.secondConnection].colorType + 1) % 3)
        )) {
          let isCurrentFirst: boolean = connection.firstConnection == currentNodePoint.id;
          let nextNode: NodePoint = {
            id: isCurrentFirst ? connection.secondConnection : connection.firstConnection,
            isFront: isCurrentFirst ? !connection.secondIsFront : !connection.firstIsFront, // Traverse to other side of node
            helpers: isCurrentFirst ? connection.helpers : connection.helpers?.slice().reverse(),
          };

          if (nextNode.id == searchNode) {
            // Found it!
            foundPaths.push([...path, nextNode]);
          } else {
            newPaths.push([...path, nextNode]);
          }
        }
      }

      paths.push(newPaths);
      //console.log(newPaths);
      depth += 1;

      if (depth >= maxDepth - 1) {
        return foundPaths;
      }
    }
  };

  const runSearch = () => {
    console.log(`Running with depth ${searchDepth}`);
    setSelectedPathId(-1);
    let paths: NodePoint[][] = search(4, false, 13, searchDepth);
    setFoundPaths(paths);
    console.log(paths);
  };

  const handlePathSelected = (id: number) => {
    setSelectedPathId(id);
  };

  const handleIndexSelected = (id: number) => {
    setSelectedIndex(id);
  };

  return (
    <>
      <h2 className="RGYPuzzle-header">Red-Green-Yellow Puzzle</h2>
      <div>
        {/* <div>{hoveredId == -1 ? "No node hovered" : `Hovered ${hoveredId}`}</div> */}
        <div style={{ display: "flex" }}>
          <button className="RGYPuzzle-button" onClick={runSearch} style={{ marginRight: "4px" }}>
            Run Search
          </button>
          <div style={{ display: "flex", flexDirection: "column", marginRight: "4px" }}>
            <div style={{}}>Depth:</div>
            <input
              type="number"
              id="searchDepth"
              name="searchDepth"
              min="1"
              max="100"
              value={searchDepth}
              onChange={(e) => setSearchDepth(Number(e.target.value))}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginRight: "4px" }}>Show Entire Selected Path:</div>

            <input
              type={"checkbox"}
              checked={showEntireSelected}
              onChange={(e) => {
                setShowEntireSelected(!showEntireSelected);
                console.log(showEntireSelected);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "8px", marginBottom: "8px" }}>
        {foundPaths.length > 0
          ? `Found ${foundPaths.length} paths. Select one to visualize`
          : "No paths found"}
      </div>
      {foundPaths.map((path, i) => (
        <RGYPuzzlePathPanel
          path={path}
          key={i}
          foundPathIndex={i}
          onPathSelected={handlePathSelected}
          onIndexSelected={handleIndexSelected}
          isSelected={i == selectedPathId}
        ></RGYPuzzlePathPanel>
      ))}
      <div className="RGYPuzzle-canvasWrapper">
        <img src={riddleImage} style={{ width: "100%", opacity: 0.4 }} className="u-noselect" />
        <div className="RGYPuzzle-graphContainer">
          {circleDataArray.map((circleData, i) => (
            <RGYPuzzleCircle
              data={circleData}
              key={i}
              onNodeHovered={onNodeHovered}
              onNodeUnhovered={onNodeUnhovered}
            />
          ))}
          {helperNodes.map((node, i) => (
            <div
              className="RGYPuzzle-circle helper"
              style={{ left: `${node.left}%`, top: `${node.top}%`, color: "white" }}
              id={`helper${node.id}`}
              key={i}
            >
              {node.id}
            </div>
          ))}
          {connections
            .filter(
              (connection) =>
                connection.firstConnection == hoveredId || connection.secondConnection == hoveredId
            )
            .map((connection, i) => (
              <Xarrow
                key={i}
                start={`${connection.firstConnection}`}
                end={`${connection.secondConnection}`}
                startAnchor={
                  circleDataArray[connection.firstConnection].isHorizontal
                    ? connection.firstIsFront
                      ? "left"
                      : "right"
                    : connection.firstIsFront
                    ? "top"
                    : "bottom"
                }
                endAnchor={
                  circleDataArray[connection.secondConnection].isHorizontal
                    ? connection.secondIsFront
                      ? "left"
                      : "right"
                    : connection.secondIsFront
                    ? "top"
                    : "bottom"
                }
                passProps={{ pointerEvents: "none" }}
                divContainerStyle={{ opacity: 0.5 }}
                showHead={false}
                path={"straight"}
                color={
                  connection.firstConnection == hoveredId
                    ? connection.firstIsFront
                      ? "red"
                      : "blue"
                    : connection.secondIsFront
                    ? "red"
                    : "blue"
                }
              />
            ))}
          {showEntireSelected && selectedPathId < foundPaths.length && selectedPathId > -1 ? (
            <>
              {foundPaths[selectedPathId].map((node, i) =>
                i < foundPaths[selectedPathId].length - 1 && i != selectedIndex ? (
                  <RGYArrowConnector
                    key={i}
                    startId={foundPaths[selectedPathId][i].id}
                    endId={foundPaths[selectedPathId][i + 1].id}
                    startAnchor={
                      foundPaths[selectedPathId][i].isFront
                        ? circleDataArray[foundPaths[selectedPathId][i].id].isHorizontal
                          ? "left"
                          : "top"
                        : circleDataArray[foundPaths[selectedPathId][i].id].isHorizontal
                        ? "right"
                        : "bottom"
                    }
                    endAnchor={
                      foundPaths[selectedPathId][i + 1].isFront
                        ? circleDataArray[foundPaths[selectedPathId][i + 1].id].isHorizontal
                          ? "right"
                          : "bottom"
                        : circleDataArray[foundPaths[selectedPathId][i + 1].id].isHorizontal
                        ? "left"
                        : "top"
                    }
                    helpers={foundPaths[selectedPathId][i + 1].helpers}
                    XArrowProps={{
                      color:
                        i == selectedIndex
                          ? "white"
                          : `rgb(255,${(i / foundPaths[selectedPathId].length) * 255},${
                              (i / foundPaths[selectedPathId].length) * 255
                            })`,
                      zIndex: i == selectedIndex ? 1 : 0,
                      dashness: { strokeLen: 10, nonStrokeLen: 10, animation: -2 },
                    }}
                  />
                ) : (
                  <></>
                )
              )}
            </>
          ) : (
            <></>
          )}
          {selectedPathId < foundPaths.length &&
          selectedPathId > -1 &&
          selectedIndex < foundPaths[selectedPathId].length - 1 ? (
            <RGYArrowConnector
              startId={foundPaths[selectedPathId][selectedIndex].id}
              startAnchor={
                foundPaths[selectedPathId][selectedIndex].isFront
                  ? circleDataArray[foundPaths[selectedPathId][selectedIndex].id].isHorizontal
                    ? "left"
                    : "top"
                  : circleDataArray[foundPaths[selectedPathId][selectedIndex].id].isHorizontal
                  ? "right"
                  : "bottom"
              }
              endAnchor={
                foundPaths[selectedPathId][selectedIndex + 1].isFront
                  ? circleDataArray[foundPaths[selectedPathId][selectedIndex + 1].id].isHorizontal
                    ? "right"
                    : "bottom"
                  : circleDataArray[foundPaths[selectedPathId][selectedIndex + 1].id].isHorizontal
                  ? "left"
                  : "top"
              }
              endId={foundPaths[selectedPathId][selectedIndex + 1].id}
              helpers={foundPaths[selectedPathId][selectedIndex + 1].helpers}
              XArrowProps={{
                color: "white",
                strokeWidth: 10,
                headSize: 3,
                dashness: { strokeLen: 20, nonStrokeLen: 10, animation: -2 },
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default RGYPuzzle;
