import React, { useCallback, useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [questions, setQuestions] = useState([]);
    const [correctQuestions, setCorrectQuestions] = useState(null);
    const [totalQuestions, setTotalQuestions] = useState(0); // Initialize to 0     
    const [tags, set_tags] = useState(''); // Initialize to 0    

    useEffect(() => {
        // Calculate the total number of questions
        if (questions) {
            setTotalQuestions(questions.length);
        }
    }, [questions]);


    return (
        <UserContext.Provider value={{ questions, setQuestions, correctQuestions, setCorrectQuestions,setTotalQuestions, totalQuestions,set_tags,tags }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
