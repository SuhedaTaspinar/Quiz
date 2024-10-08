import React, {useEffect, useState} from "react";
import "./Quiz.css"
import {useParams} from "react-router-dom";
import * as api from "../../api/api.js"
import QuestionCard from "../../components/questionCard/QuestionCard.jsx";
import Modal from "../../components/modal/Modal.jsx";

const Quiz = () => {

    const {difficulty, amount} = useParams()
    const [questionsData, setQuestionsData] = useState([])
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const getData = async() => {
            const data = await api.fetchQuizData(difficulty, amount)
            setQuestionsData(data)
        }
        getData();
    }, [difficulty, amount]);

    console.log(questionsData, "questionsData")

    return(
        <div className="quiz">
            {
                modal ? <Modal score={score} /> :
                    <QuestionCard
                        questionsData={questionsData}
                        score={score}
                        setScore={setScore}
                        count={count}
                        setCount={setCount}
                        modal={modal}
                        setModal={setModal}
                    />
            }

        </div>
    )
}

export default Quiz
