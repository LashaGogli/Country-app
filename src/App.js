import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import SecondPage from './components/SecondPage';
import React, { useState } from "react";



function App() {
  const [backgroundColor, setBackgroundColor] = useState("#FFF");
  const [searchbackgroundColor, setSearchbackgroundColor] = useState("#FFF");
  const [textcolor, setTextcolor] = useState("black");
  const [cardcolor, setCardcolor] = useState("white");
  const [container, setContainer] = useState("#F2F2F2");
  const [selectedOption, setSelectedOption] = useState("");

  

  function handleBackgroundColorChange(x) {
      setBackgroundColor(x);
  }
  function handlesearchBackgroundColorChange(x) {
      setSearchbackgroundColor(x);
  }
  function textColorChange(x) {
      setTextcolor(x);
  }
  function handleCardColor(x) {
      setCardcolor(x);
  }
  function handleContainer(x) {
      setContainer(x);
  }

  function choose(e) {
      setSelectedOption(e.target.value);
  }




  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/:name" element={<SecondPage handleBackgroundColorChange={handleBackgroundColorChange} handlesearchBackgroundColorChange= {handlesearchBackgroundColorChange} textColorChange={textColorChange} handleCardColor={handleCardColor} handleContainer={handleContainer}  choose={choose} container={container} backgroundColor={backgroundColor} searchbackgroundColor={searchbackgroundColor} textcolor={textcolor} cardcolor={cardcolor} selectedOption={selectedOption} headerColor={cardcolor} headertextcolor={textcolor} />} />


          <Route path="/" element={<Container handleBackgroundColorChange={handleBackgroundColorChange} handlesearchBackgroundColorChange= {handlesearchBackgroundColorChange} textColorChange={textColorChange} handleCardColor={handleCardColor} handleContainer={handleContainer}  choose={choose} container={container} backgroundColor={backgroundColor} searchbackgroundColor={searchbackgroundColor} textcolor={textcolor} cardcolor={cardcolor} selectedOption={selectedOption} headerColor={cardcolor} headertextcolor={textcolor}/> } ></Route>
        </Routes>



      </HashRouter>

    </>
  )



}

export default App;
