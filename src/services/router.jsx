import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Characters from "../pages/Characters/Characters";
import Character from "../pages/Characters/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/characters/:id",
        element: <Character />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
    ],
  },
]);

export default router;
