import react from "react";
import { Link } from "react-router-dom";

/**
 * props:
 * - snacks: [{key: STRING, title: STRING, imgUrl: SRING},...]
 */

function VendingMachine({ snacks }) {
  return (
    <ul className="VendingMachine">
      {snacks.map((snack) => {
        <li key={snack.key}>
          <Link to={`/${snack.key}`}>{snack.title}</Link>
        </li>;
      })}
    </ul>
  );
}

export default VendingMachine;
