// import { useState } from 'react';
import "./Header.css"
import image from "../photos/whiteMoon.png"


export default function Header(props) {


 
    function handleClick() {
        if (props.headerColor === "white") {
            props.onBackgroundColorChange("#202C36");
            props.handlesearchBackgroundColorChange("#2B3844");
            props.textcolor("white");
            props.cardcolor("#2B3844");
            props.container("#202C36");
            console.log(true);
        } else {
            console.log(false);
            props.onBackgroundColorChange("#FFF");
            props.handlesearchBackgroundColorChange("#FFF");
            props.textcolor("black");
            props.cardcolor("white");
            props.container("#F2F2F2");

        }
    }




    return <header className="header" style={{ background: props.headerColor }} >
        <h1 style={{ color: props.headertextcolor}}>Where in the world?</h1>
        <div className="darkModeDiv" onClick={handleClick}>
            <img src={image} alt={"light moon"} />
            <span className="darkModeSpan" style={{ color: props.headertextcolor }}>Dark Mode</span>
        </div>

    </header>
}