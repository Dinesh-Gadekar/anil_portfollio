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
<Gallery id="menu" />
{/* <SpecialMenu id="menu" /> */}
<Chef id="chef" />
<Intro id="intro" />
<Laurels id="laurels" />
<FindUs id="contact" />

    
    
    <Footer />
  </div>
);

export default App;
