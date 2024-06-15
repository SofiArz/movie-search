
import { Home } from './pages/Home'
import {
  Details,
  loader as detailsLoader,
} from './pages/Details'
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
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
