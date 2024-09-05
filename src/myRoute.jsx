import { createBrowserRouter } from 'react-router-dom';
import ObjIdentApp from './Object_Identification/ObjIdentApp';
import AppLayout from './AppLayout';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
        {
            path:'/',
            element:<ObjIdentApp/>
        },
    ]
  }
]);

export default myRoute;
