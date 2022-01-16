import Icon from "./Blogs/Icon";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="Footer-wrapper">
      <Icon type="code" style={{ fontSize: "24px", marginBottom: "4px" }} />
      <div className="Footer-name">Made by Ben Bartschi</div>
      <div className="Footer-copywright">© Copyright 2022</div>
    </div>
  );
};

export default Footer;
