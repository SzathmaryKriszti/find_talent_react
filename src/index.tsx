import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter, createRoutesFromElements, Route,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import SearchComponent from "./components/SearchComponent";
import MemberComponent from "./components/MemberComponent";
import MemberDetailsComponent from "./components/MemberDetailsComponent";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<SearchComponent />}/>
          <Route path={'members'} element={<MemberComponent />}/>
          <Route path={'member-details:id'} element={<MemberDetailsComponent />}/>
      </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

