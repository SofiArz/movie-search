
import { Home } from './pages/Home'
import {
  NotFound,
  Details,
  detailsLoader
} from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.scss';
import 'bulma/css/bulma.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

    },
    {
      path: "/movie/:id",
      element: <Details />,
      loader: detailsLoader
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
