import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import SearchComponent from "./components/SearchComponent";
import MemberComponent from "./components/MemberComponent";
import MemberDetailsComponent from "./components/MemberDetailsComponent";

const router = createBrowserRouter([
    {
        path: "",
        element: <div><SearchComponent /></div>,
    },
    {
        path: "member",
        element: <div><MemberComponent /></div>,
    },
    {
        path: "member-details",
        element: <div><MemberDetailsComponent /></div>,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

