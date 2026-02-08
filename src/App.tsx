import { createBrowserRouter, RouterProvider } from "react-router"
import WelcomePage from "./pages/welcomePage"
import AboutPage from "./pages/aboutPage"
import Layout from "./components/layout"
import HomePage from "./pages/homePage"
import GoalsPage from "./pages/goalsPage"
import GoalPage from "./pages/goalPage"
import SignIn from "./pages/signIn"
import SignUp from "./pages/signUp"


function App() {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    children: [
        {
          path: "/",
          element: <WelcomePage />
        },
        {
          path: "/habit-tracker",
          element: <HomePage />
        },
         {
          path: "/habit-tracker/goals",
          element: <GoalsPage />
        },
        {
          path: "/habit-tracker/goal/:id",
          element: <GoalPage />
        },
        {
          path: "/sign-in",
          element: <SignIn />
        },
        {
          path: "/sign-up",
          element: <SignUp />
        },
        {
          path: "/about",
          element: <AboutPage />
        }
      ]
    },
  ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
