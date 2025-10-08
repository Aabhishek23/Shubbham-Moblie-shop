import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";  // 👈 correct path
import "../index.css";  // go up one folder
import SearchPage from "../pages/SearchPage.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // default route
      {
        path: "search",
        element: <SearchPage />
      },

      {
        path: "login",
        element: <Login />
      },

      {
        path:"register",
        element:<Register />
      }

    ]
  }
]);

export default router;
