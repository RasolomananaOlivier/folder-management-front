import RootLayout from "@/layouts/RootLayout";
import { Route, Routes as ReactRoutes, useLocation } from "react-router-dom";

const Routes = () => {
  const location = useLocation();

  return (
    <ReactRoutes location={location} key={location.key}>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<div>Test</div>} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
