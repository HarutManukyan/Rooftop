import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import AboutUs from "./pages/AboutUs";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/rooms",
          element: <Rooms />,
        },
        {
          path: "/rooms/:roomId",
          element: <Room />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/auth",
          element: <LogIn />,
        },
        {
          path: "/sign",
          element: <SignUp />,
        },
        {
          path: "/booking/:roomId",
          element: <Booking />,
        },
        {
          path: "/thankyou/:roomId",
          element: <ThankYou />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
