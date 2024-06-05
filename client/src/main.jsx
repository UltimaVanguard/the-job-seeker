import ReactDOM from 'react-dom/client';
// imports router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// imports main pages
import App from './App.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreateProfile from './pages/CreateProfile';
import JobPosting from './pages/JobPosting';
import ErrorPage from './pages/ErrorPage';

// creates routers to redirect to our pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/profiles/:id',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/newProfile',
        element: <CreateProfile />
      }, {
        path: '/newJob',
        element: <JobPosting />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
