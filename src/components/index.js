import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

import ParticlesCanvas from "./ParticlesCanvas";

const Home = () => {
  return (
    <div>
      <ParticlesCanvas />
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
