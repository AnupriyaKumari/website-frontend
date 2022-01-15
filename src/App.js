import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Signup from './components/Register';
import Signin from './components/Signin';
import Forgot from './components/Forgot';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/signin" element={<Signin/>}/> 
        <Route exact path="/signup" element={<Signup/>}/> 
        <Route exact path="/forgot" element={<Forgot/>}/>
      </Routes>
    </>
  );
};

export default App;
