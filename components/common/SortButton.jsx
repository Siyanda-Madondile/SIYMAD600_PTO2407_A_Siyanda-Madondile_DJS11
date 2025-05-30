// Displays "Sort Z-A" when ascending, "Sort A-Z" when descending
import PropTypes from "prop-types";

export default function SortButton({
  currentOrder = "asc", // Default sort order is ascending
  onToggle = () => {}, // Default onToggle is an empty function
}) {
  return (
    <button onClick={onToggle} className="sort-button">
      {/* Display sort order based on currentOrder prop */}
      Sort {currentOrder === "asc" ? "Z-A" : "A-Z"}
    </button>
  );
}

SortButton.propTypes = {
  currentOrder: PropTypes.oneOf(["asc", "desc"]).isRequired,
  onToggle: PropTypes.func.isRequired,
};