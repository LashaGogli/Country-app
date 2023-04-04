import info from "../data.json"
import { useParams } from "react-router-dom"
import "./SecondPage.css"
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

export default function SecondPage(props) {
    const navigate = useNavigate();


    const { name } = useParams();
    let somecountry = info.find((country) => {
        return (country.name === name) && country;

    })


    return (
        <>
            <div className="secondContainer" style={{ background: props.container }}  >
                <Header onBackgroundColorChange={props.handleBackgroundColorChange} handlesearchBackgroundColorChange={props.handlesearchBackgroundColorChange} textcolor={props.textColorChange} cardcolor={props.handleCardColor} container={props.handleContainer} headerColor={props.headerColor} headertextcolor={props.headertextcolor} />


                <div className="secondInsideDiv">
                    <button className="backButton" style={{ background: props.headerColor, color: props.headertextcolor }} onClick={() => { navigate(`/`) }}>Back</button>

                    <div className="outsideDiv">
                        <div className="leftDiv">
                            {somecountry=== undefined ? "" : <img src={somecountry.flag} alt="flags" className="flagImg" />}
                        </div>

                        <div className="rightDiv" style={{ background: props.container }}>
                            <p className="title" style={{ color: props.headertextcolor }}>{somecountry.name}</p>
                            <div className="middleDiv">
                                <div className="infoDiv">
                                    <p style={{ color: props.headertextcolor }}><span >Native Name: </span> {somecountry.nativeName}</p>
                                    <p style={{ color: props.headertextcolor }}><span>Population: </span> {somecountry.population.toLocaleString()}</p>
                                    <p style={{ color: props.headertextcolor }}><span>Region: </span> {somecountry.region}</p>
                                    <p style={{ color: props.headertextcolor }}><span>Sub Region: </span> {somecountry.subregion}</p>
                                    <p style={{ color: props.headertextcolor }}><span>Capital: </span> {somecountry.capital}</p>
                                </div>
                                <div>
                                    <p style={{ color: props.headertextcolor }}><span>Top Level Domain: </span>{somecountry.topLevelDomain}</p>
                                    <p style={{ color: props.headertextcolor }}><span>Currencies: </span>
                                        {somecountry.currencies?.map((currency, index) => (
                                            <span key={somecountry.name}>{Object.values(somecountry.currencies)[index].name} </span>
                                        ))}
                                    </p>


                                    <p style={{ color: props.headertextcolor }}><span>Languages: </span>
                                        {somecountry.languages.map((language, index) => (
                                            <span key={somecountry.name}>{Object.values(somecountry.languages)[index].name} </span>
                                        ))}
                                    </p>

                                </div>
                            </div>
                            <div className="bottomDiv">
                                <span style={{ color: props.headertextcolor }}>Border Countries:</span>
                                <div className="bordersDiv">
                                    {somecountry.borders && somecountry.borders.map(element => {
                                        let foundElement = info.find(arrayElement => arrayElement.alpha3Code === element);
                                        return <div key={element} className="smallDivs" style={{ background: props.headerColor, color: props.headertextcolor }}> {<img style={{width:"100%", height:"100%"}} src={foundElement.flag} alt="flags"/>}</div>;
                                    })}
                                </div>

                            </div>


                        </div>
                    </div>

                </div>



            </div>


        </>)



}