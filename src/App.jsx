import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Create from './pages/Create';
import Home from './pages/Home'
import Recipe from './pages/Recipe';
import Error from './pages/Error';
function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'create',
          element: <Create/>
        },
        {
          path: 'recipe/:id',
          element: <Recipe/>
        }
      ],
    },
  ]);
  return <RouterProvider router={routes}/>;
}

export default App
