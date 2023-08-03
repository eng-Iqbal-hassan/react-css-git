import React from "react";
import {
  Header,
  Blogs,
  Possibillity,
  Feature,
  WhatGP3,
  Footer,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Feature />
      <Possibillity />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
