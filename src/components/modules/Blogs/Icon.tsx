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
  faArrowRight,
  faArrowLeft,
  faExternalLinkAlt,
  faImages,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
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
  } else if (type == "arrowRight") {
    return faArrowRight;
  } else if (type == "arrowLeft") {
    return faArrowLeft;
  } else if (type == "youtube") {
    return faYoutube;
  } else if (type == "instagram") {
    return faInstagram;
  } else if (type == "externalLink") {
    return faExternalLinkAlt;
  } else if (type == "images") {
    return faImages;
  } else if (type == "userPlus") {
    return faUserPlus;
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
