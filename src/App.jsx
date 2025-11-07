import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
   <Header id="home" />
<AboutUs id="about" />
<Laurels id="services" />

{/* <SpecialMenu id="menu" /> */}

<Intro id="intro" />
<Gallery id="projects" />
<FindUs id="contact" />
<Chef id="chef" />

    
    
    <Footer />
  </div>
);

export default App;
