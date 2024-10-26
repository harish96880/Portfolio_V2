import PropTypes from "prop-types";
import "../index.css";

export default function Button({
  children,
  width,
  height,
  outlineColor,
  bgcolor,
  color,
  logo,
  fontSize,
  logoWidth,
}) {
  const buttonStyle = {
    width,
    height,
    background: bgcolor,
    border: `1px solid ${outlineColor}`,
    color,
    borderRadius: "42px",
    fontFamily: "Montserrat",
    fontSize,
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  return (
    <button style={buttonStyle}>
      {logo && (
        <img
          src={logo}
          width={logoWidth}
          height={"60rem"}
          alt="logo"
          style={{ marginRight: "8px" }}
        />
      )}
      {children}
    </button>
  );
}

Button.defaultProps = {
  width: "20rem",
  height: "4rem",
  outlineColor: "#2CF9FC",
  bgcolor: "linear-gradient(90deg, #09766C 0%, #0F2837 100%)",
  color: "#C5FFEC",
  fontSize: "1.5rem",
  logo: null, // Default to null since logo isn't always required
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  outlineColor: PropTypes.string,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  logo: PropTypes.string,
  fontSize: PropTypes.string,
  logoWidth: PropTypes.string,
};
