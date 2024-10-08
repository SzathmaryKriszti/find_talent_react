import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import './index.css';
import App from "./App";
import SearchPage from "./pages/SearchPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<SearchPage />}/>
          <Route path={'member-details/:id'} element={<MemberDetailsPage />}/>
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

