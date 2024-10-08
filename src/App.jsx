import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './assets/css/app.css';
import Memberlist from "./components/Memberlist";
import React from "react";

const App = () => {
  const bandmembers = [
    {name: "Steven Madali", role: "Rhythm Guitar"},
    {name: "Francis Carl Lingan", role: "Lead Guitar"},
    {name: "Trisha Malate", role: "Bass Guitar"},
    {name: "Gideon Paul", role: "Drums"},
  ];

  return (
  <>
  <Navbar />
  <Hero/>
  <Memberlist members={bandmembers} />
  </>
  );
}

export default App
