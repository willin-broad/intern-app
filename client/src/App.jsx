import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound";
import CheckStatus from "./pages/CheckStatus/CheckStatus";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: '/CheckStatus',
      element: <CheckStatus />
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
