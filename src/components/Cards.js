import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import info from "../data.json";
import "./Cards.css";

export default function Cards(props) {

    


    const navigate = useNavigate();
    const [filteredCountries, setFilteredCountries] = useState(info);

    useEffect(() => {
        if (props.region) {
            let filteredInfo = info.filter((item) => item.region === props.region);
            if (props.searched) {
                filteredInfo = filteredInfo.filter((item) => item.name.toUpperCase() === props.searched.toUpperCase());
                setFilteredCountries(filteredInfo);
            }
            setFilteredCountries(filteredInfo);



        } else if (props.searched) {
            const filteredInfo = info.filter((item) => item.name.toUpperCase() === props.searched.toUpperCase());
            setFilteredCountries(filteredInfo);

        } else {
            setFilteredCountries(info);
        }
    }, [props.region, props.searched]);

    return (



        filteredCountries.map((item) => (
            <div key={item.name} onClick={() => { navigate(`/${item.name}`) }}>
                <div className="cardDiv" style={{ background: props.background }}>
                    <div className="flagDiv">
                        <img src={item.flags.png} alt="flags" className="flags" />
                    </div>
                    <div className="infoDiv1">
                        <p className="countryName" style={{ color: props.textcolor }} >{item.name}</p>
                        <p className="infoData" style={{ color: props.textcolor }}><strong>Population:</strong> {item.population.toLocaleString()}</p>
                        <p className="infoData" style={{ color: props.textcolor }}> <strong>Region:</strong> {item.region}</p>
                        <p className="infoData" style={{ color: props.textcolor }}> <strong>Capital:</strong> {item.capital}</p>
                    </div>
                </div>
            </div>

        ))


    )
}
