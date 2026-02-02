import { useState } from "react";

import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import routes from "./config/routes";
import OverView from "./Components/Overview";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* These are nested inside the Layout */}
            <Route index element={<OverView />} />
            {routes.main.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
