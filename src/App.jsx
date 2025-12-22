import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import GridGenerator from "./pages/GridGenerator";
import FlexGenerator from "./pages/FlexGenerator";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "grid",
          element: <GridGenerator />,
        },
        {
          path: "flex",
          element: <FlexGenerator />,
        },
      ],
    },
  ],
  {
    basename: "/Layout-generator",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
