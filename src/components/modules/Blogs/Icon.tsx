import {
  faLink,
  faInfoCircle,
  faInfo,
  faCode,
  faCalculator,
  faCameraRetro,
  faCube,
  faCheckSquare,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getIconFromType = (type: string): any => {
  if (type == "link") {
    return faLink;
  } else if (type == "github") {
    return faGithub;
  } else if (type == "infoCircle") {
    return faInfoCircle;
  } else if (type == "info") {
    return faInfo;
  } else if (type == "code") {
    return faCode;
  } else if (type == "calculator") {
    return faCalculator;
  } else if (type == "camera") {
    return faCameraRetro;
  } else if (type == "cube") {
    return faCube;
  } else if (type == "check") {
    return faCheckSquare;
  } else if (type == "exclamation") {
    return faExclamationCircle;
  } else {
    return null;
  }
};

interface Props {
  type: string;
  style?: Object;
}

const Icon = (props: Props) => {
  return <FontAwesomeIcon icon={getIconFromType(props.type)} style={props.style} />;
};

export default Icon;
