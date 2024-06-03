
import { Link } from "react-router-dom";

/**
 * props:
 * - snacks: [{key: STRING, title: STRING, imgUrl: SRING},...]
 */

function VendingMachine({ snacks }) {
  return (
    <ul className="VendingMachine">
      <h1>Vending Machine! Choose a snack!</h1>
      {snacks.map((snack) => {
        return (<li key={snack.key}>
          <Link to={`/${snack.key}`}>{snack.title}</Link>
        </li>);
      })}
    </ul>
  );
}

export default VendingMachine;
