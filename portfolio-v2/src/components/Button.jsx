import PropTypes from "prop-types";
import "../index.css";

export default function Button({
  children,
  width = "auto", // Default to 100% for responsive
  height = "75px",
  outlineColor = "#2CF9FC",
  bgcolor = "linear-gradient(90deg, #09766C 0%, #0F2837 100%)",
  color = "#C5FFEC",
  logo,
}) {
  const buttonStyle = {
    width, // Now defaults to 100%
    height,
    background: bgcolor,
    border: `1px solid ${outlineColor}`,
    color,
    borderRadius: "42px",
    fontFamily: "Montserrat",
    fontSize: "2vw",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "0 25px 0 25px",
  };

  return (
    <button style={buttonStyle}>
      {logo && <img src={logo} alt="logo" style={{ marginRight: "8px" }} />}{" "}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  outlineColor: PropTypes.string,
  bgcolor: PropTypes.string,
  logo: PropTypes.string,
  color: PropTypes.string,
};
