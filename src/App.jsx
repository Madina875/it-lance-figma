import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Hero from "./components/hero/Hero.jsx";
import More from "./components/more/More.jsx";
import Skills from "./components/skills/Skills.sjx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <More />
      </main>
      <Footer />
    </>
  );
};

export default App;
