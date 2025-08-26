import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import More from "./components/more/More";
import Skills from "./components/skills/Skills";

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
