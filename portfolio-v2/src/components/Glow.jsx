import PropTypes from "prop-types";

export default function Glow({ top, left }) {
  return (
    <div className="glow" style={{ top: `${top}`, left: `${left}` }}></div>
  );
}

Glow.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};
