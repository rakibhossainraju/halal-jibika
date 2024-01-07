import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import JobsPage from "../pages/jobs/JobsPage.jsx";
import HomePage from "../pages/home/HomePage.jsx";
import ContactPage from "../pages/contact/ContactPage.jsx";
import FavoritePage from "../pages/favorite/FavoritePage.jsx";
import AboutPage from "../pages/about/AboutPage.jsx";
import AuthPage from "../pages/auth/AuthPage.jsx";
import NotFound from "../components/not-found/NotFound.jsx";
import JobDetailsPage from "../pages/job-details/JobDetailsPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ProfilePage from "../pages/profile/ProfilePage.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetailsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/auth",
        element: (
          <PrivateRoute
            path="/profile"
            shouldRender={true}
            component={AuthPage}
          />
        ),
      },
      {
        path: "/profile",
        element: <PrivateRoute path="/auth" component={ProfilePage} />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
