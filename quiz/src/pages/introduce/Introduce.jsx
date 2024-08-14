import React from 'react';
import "./Introduce.css"
import Dropdown from "../../components/dropdown/Dropdown.jsx";

const Introduce = () => {

    const difficulty = ["easy", "medium", "hard"]

    return (
        <div className="introduce">
            <div className="introduce-container">
                <img className="introduce-img" src="../../assets/quiz-logo.png" alt="Quiz Logo"/>
                <Dropdown/>
                <div className="introduce-btn">Quiz'e başla</div>
            </div>
        </div>
    )
}

export default Introduce
