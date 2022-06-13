import { useEffect, useState } from "react";
import "./RGYPuzzle.css";
import { CircleData, NodePoint } from "./RGYPuzzleTypes";

interface Props {
  path: NodePoint[];
  foundPathIndex: number;
  onPathSelected: (id: number) => void;
  onIndexSelected: (id: number) => void;
  isSelected: boolean;
}

const RGYPuzzlePathPanel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    props.onIndexSelected(currentIndex);
  }, [props.isSelected]);

  useEffect(() => {
    props.onIndexSelected(currentIndex);
  }, [currentIndex]);

  return (
    <>
      <div
        className={`RGYPuzzle-PathPanelContainer${props.isSelected ? " selected" : ""}`}
        onClick={() => {
          props.isSelected
            ? setCurrentIndex((currentIndex + 1) % (props.path.length - 1))
            : props.onPathSelected(props.foundPathIndex);
        }}
      >
        <div
          style={{ marginRight: "4px", fontWeight: "bold" }}
          className="u-noselect"
        >{`Length ${props.path.length}: `}</div>
        {props.path.map((point, i) => (
          <div
            className="u-noselect"
            style={{
              marginRight: "4px",
              fontSize: props.isSelected ? "20px" : "",
              fontWeight: props.isSelected && i == currentIndex ? 800 : 300,
              backgroundColor: props.isSelected && i == currentIndex ? "gray" : "transparent",
              padding: props.isSelected && i == currentIndex ? "0px 4px" : "0px 0px",
            }}
            key={i}
          >
            {i == props.path.length - 1 || (props.isSelected && i == currentIndex)
              ? `${point.id}`
              : `${point.id},`}
          </div>
        ))}
      </div>
    </>
  );
};

export default RGYPuzzlePathPanel;
