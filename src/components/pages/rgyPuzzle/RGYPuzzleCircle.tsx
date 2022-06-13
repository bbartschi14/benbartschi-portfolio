import "./RGYPuzzle.css";
import { CircleData } from "./RGYPuzzleTypes";

interface Props {
  data: CircleData;
  onNodeHovered: (id: number) => void;
  onNodeUnhovered: (id: number) => void;
}

const RGYPuzzleCircle = (props: Props) => {
  const getColor = (type: number): string => {
    if (type == 0) {
      return "red";
    } else if (type == 1) {
      return "green";
    } else {
      return "yellow";
    }
  };

  return (
    <>
      <div
        id={`${props.data.id}`}
        className="RGYPuzzle-circle"
        style={{
          left: `${props.data.leftOffset}%`,
          top: `${props.data.topOffset}%`,
          backgroundColor: getColor(props.data.colorType),
        }}
        onMouseEnter={() => props.onNodeHovered(props.data.id)}
        onMouseLeave={() => props.onNodeUnhovered(props.data.id)}
      >
        <div className="u-noselect">{props.data.id}</div>
      </div>
    </>
  );
};

export default RGYPuzzleCircle;
