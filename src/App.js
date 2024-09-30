import React, { useState } from "react";
import NavbarIcons from "./components/NavbarIcons";
import NavbarLinks from "./components/NavbarLinks";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Choose from "./components/Choose";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Problem from "./components/Problem";
import Contact from "./components/Contact";
import Logos from "./components/Logos";
import FooterLinks from "./components/FooterLinks";
import FooterText from "./components/FooterText";
import Sidebar from "./components/Sidebar";

const App = () => {
  let [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <NavbarIcons />
      <NavbarLinks setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main>
        <Hero />
        <Experience />
        <Choose />
        <Services />
        <Projects />
        <Problem />
        <Contact />
        <Logos />
      </main>
      <FooterLinks />
      <FooterText />
    </>
  );
};

export default App;
