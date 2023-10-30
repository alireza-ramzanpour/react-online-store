import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./assets/style.css"

function App() {
  return (
    <>

      <Nav />
      <br />
      <Outlet />
      <br />
      <Footer />


    </>
  );
}

export default App;
