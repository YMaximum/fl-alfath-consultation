import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";

export default function App(): React.ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
