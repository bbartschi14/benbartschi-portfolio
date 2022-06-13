import "./RGYPuzzle.css";
import { NodePoint } from "./RGYPuzzleTypes";
import Xarrow, { anchorType } from "react-xarrows";

interface Props {
  startId: number;
  startAnchor: string;
  endId: number;
  endAnchor: string;
  helpers?: number[];
  XArrowProps?: Object;
}

const RGYArrowConnector = (props: Props) => {
  const createArrow = (): JSX.Element => {
    let arrowIds =
      props.helpers !== undefined
        ? [props.startId, ...props.helpers.map((helper) => `helper${helper}`), props.endId]
        : [props.startId, props.endId];
    //console.log(arrowIds);
    return (
      <>
        {arrowIds.map((id, i) =>
          i < arrowIds.length - 1 ? (
            <Xarrow
              key={i}
              start={`${id}`}
              end={`${arrowIds[i + 1]}`}
              {...props.XArrowProps}
              startAnchor={
                i < arrowIds.length - 1 && i > 0 ? "middle" : (props.startAnchor as anchorType)
              }
              endAnchor={i < arrowIds.length - 2 ? "middle" : (props.endAnchor as anchorType)}
              showHead={i < arrowIds.length - 2 ? false : true}
              passProps={{ pointerEvents: "none" }}
              path="straight"
            ></Xarrow>
          ) : (
            <div key={i}></div>
          )
        )}
      </>
    );
  };

  return <>{createArrow()}</>;
};

export default RGYArrowConnector;
