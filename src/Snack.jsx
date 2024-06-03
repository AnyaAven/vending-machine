import react from "react";
import { useNavigate } from "react-router-dom";

/**
 * Props:
 * - imageUrl
 * - snackName
 *
 * Renders a single snack
 *
 * App > Vending Machine > Snack
 */
function Snack({ imageUrl, snackName }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <h1>{snackName}</h1>
      <img src={imageUrl} />
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
}

export default Snack;
