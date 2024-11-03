import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './Components/BookDetails/BookDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import Root from './Root';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     {
      path: '/',
      element: <Home></Home>
     },
     {
      path: '/listedbooks',
      element: <ListedBooks></ListedBooks>,
      loader:()=> fetch('../public/booksData.json')
     },
     {
      path:'/books/:bookId',
      element: <BookDetails></BookDetails>,
      loader:()=> fetch('../public/booksData.json')
     },
     {
      path: '/dashboard',
      element : <Dashboard></Dashboard>
     }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
