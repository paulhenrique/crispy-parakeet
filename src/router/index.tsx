import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const ROUTES = [
  {
    path: "/",
    component: Home,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
