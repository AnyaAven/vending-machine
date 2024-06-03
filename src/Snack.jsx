
import { Link } from "react-router-dom";

/**
 * Props:
 * - imageUrl
 * - snackName
 *
 * Renders a single snack
 *
 * App > Vending Machine > Snack
 */
function Snack({ imgUrl, snackName }) {

  return (
    <div className="Snack">
      <h1>{snackName}</h1>
      <img src={imgUrl} />
      <h1><Link to="/">Go back</Link></h1>
    </div>
  );
}

export default Snack;
