
import "./Container.css"
import Header from './Header';
import image from "../photos/search.png"
import { useState } from 'react';
import Cards from "./Cards";
export default function Container(props) {

    const [input, setInput] = useState("");
    function inputValue(e) {
        setInput(e.target.value);
    }



    return (
        <div className="container" style={{ background: props.container }}>
            <Header onBackgroundColorChange={props.handleBackgroundColorChange} handlesearchBackgroundColorChange={props.handlesearchBackgroundColorChange} textcolor={props.textColorChange} cardcolor={props.handleCardColor} container={props.handleContainer} headerColor={props.headerColor} headertextcolor={props.headertextcolor} />

            <div className="mainContainer" >
                <div className="filterDiv" style={{ background: props.container }}>
                    <div className="searchDiv" style={{ background: props.searchbackgroundColor }}>
                        <div className="iconDiv" style={{ background: props.searchbackgroundColor }}><img src={image} alt="searchIcon" style={{ background: props.searchbackgroundColor }} /></div>
                        <input type="search" placeholder="Search for a country…" className="searchInput" style={{ background: props.searchbackgroundColor, color: props.textcolor }} onChange={inputValue}></input>

                    </div>

                    <select value={props.selectedOption} className="selectForm" style={{ background: props.searchbackgroundColor, color: props.textcolor }} onChange={props.choose}>
                        <option value="" disabled selected style={{ color: "white" }}>Select country by region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>

                    </select>


                </div>
                <div className="divForCards" style={{ background: props.container }}>

                    <Cards background={props.cardcolor} textcolor={props.textcolor} region={props.selectedOption} searched={input} />

                </div>
            </div>

        </div>
    );
}