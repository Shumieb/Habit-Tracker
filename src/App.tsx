import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/aboutPage";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import GoalsPage from "./pages/goalsPage";
import GoalPage from "./pages/goalPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import "./App.css";
import UserDashboardPage from "./pages/userDashboardPage";
import AddNewGoalPage from "./pages/addNewGoalPage";
import EditGoalPage from "./pages/editGoalPage";
import DeleteGoalPage from "./pages/deleteGoalPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/goals",
          element: <GoalsPage />,
        },
        {
          path: "/user-dashboard/:id",
          element: <UserDashboardPage />,
        },
        {
          path: "/add-new-goal",
          element: <AddNewGoalPage />,
        },
        {
          path: "/edit-goal/:id",
          element: <EditGoalPage />,
        },
        {
          path: "/delete-goal/:id",
          element: <DeleteGoalPage />,
        },
        {
          path: "/goal/:id",
          element: <GoalPage />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
