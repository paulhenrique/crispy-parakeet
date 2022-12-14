import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RedirectHandler } from "./RedirectHandler";
import { ROUTES } from "./ROUTES";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <RedirectHandler />
                <Component />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
