import React, { useCallback, useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [correctQuestions, setCorrectQuestions] = useState(null);
    const [totalQuestions, setTotalQuestions] = useState(0); // Initialize to 0     
    const [category, set_category] = useState(''); // Initialize to 0    
    const [answers, setAnswers] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        // Calculate the total number of questions
        if (questions) {
            setTotalQuestions(questions.length);
        }
    }, [questions,answers]);


    return (
        <UserContext.Provider value={{ questions, setQuestions, correctQuestions, setCorrectQuestions, setTotalQuestions, totalQuestions, set_category, category, setAnswers ,answers,selectedOptions,setSelectedOptions }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
