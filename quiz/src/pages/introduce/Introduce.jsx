import React, {useState} from 'react';
import "./Introduce.css"
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import quizLogo from "../../assets/quiz-logo.png";
import {useNavigate} from "react-router-dom";

const Introduce = () => {

    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState("")
    const navigate = useNavigate();
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange, "difficultyChange");

    const startQuiz = () => {
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
        }
    }

    return (
        <div className="introduce">
            <div className="introduce-container">
                <img className="introduce-img" src={quizLogo} alt="Quiz Logo"/>
                <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
                <br/>
                <div onClick={startQuiz} className="introduce-btn">Quiz'e başla</div>
            </div>
        </div>
    )
}

export default Introduce
