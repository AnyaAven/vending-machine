import { Route, Routes, Navigate } from "react-router-dom";
import VendingMachine from "./VendingMachine.jsx";
import Snack from "./Snack.jsx";

/**
 * props:
 * - routes: [{key: STRING, title: STRING, imgUrl: STRING},...]
 */

function RoutesList({ routes }) {
  return (
    <Routes>
      <Route path="/" element={<VendingMachine snacks={routes} />} />
      {routes.map(route =>
        <Route
          key={route.key}
          path={`/${route.key}`}
          element={
            <Snack
              imgUrl={route.imgUrl}
              snackName={route.title}
            />
          }
        />
        )
      }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;