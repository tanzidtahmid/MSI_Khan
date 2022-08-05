import * as React from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import AboutMe from "./components/AboutMe/AboutMe";
import SingleArticle from "./components/SingleArticle/SingleArticle";
import BuildingPage from "./components/BuildingPage/BuildingPage";
import AllAchievements from "./components/Home/Achievements/AllAchievements";

function App() {
  return (
    <div className="App ">
      {/* <header className="App-header"> */}
       {/* <Home></Home> */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/full-article" element={<SingleArticle />} />
        <Route path="/building-page" element={<BuildingPage />} />
        <Route path="/all-achivements" element={<AllAchievements />} />
      </Routes>
       
      {/* </header> */}
    </div>
  );
}

export default App;
