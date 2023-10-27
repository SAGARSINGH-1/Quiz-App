import React, { useCallback, useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [correctQuestions, setCorrectQuestions] = useState(null);
    const [totalQuestions, setTotalQuestions] = useState(0); // Initialize to 0     
    const [tags, set_tags] = useState(''); // Initialize to 0    
    const [answers, setAnswers] = useState(null);

    useEffect(() => {
        console.log(answers);
        // Calculate the total number of questions
        if (questions) {
            setTotalQuestions(questions.length);
        }
    }, [questions,answers]);


    return (
        <UserContext.Provider value={{ questions, setQuestions, correctQuestions, setCorrectQuestions, setTotalQuestions, totalQuestions, set_tags, tags, setAnswers ,answers }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
