import DashBoard from "@/components/dashBoard";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/shridha",
    element: <DashBoard />,
  },
]);

export default Router;
