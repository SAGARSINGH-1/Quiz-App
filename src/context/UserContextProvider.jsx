import React, { useCallback, useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [questions, setQuestions] = useState("null");
    const [correctQuestions, setCorrectQuestions] = useState(null);
    const [totalQuestions, setTotalQuestions] = useState(0); // Initialize to 0

    useEffect(() => {
        // Calculate the total number of questions
        if (questions) {
            setTotalQuestions(questions.length);
        }
    }, [questions]);

    const questionTime = 20; // Time allocated for each question in seconds
    const [timeRemaining, setTimeRemaining] = useState(questionTime);

    useEffect(() => {
        if (timeRemaining > 0) {
            // Start a timer to decrement time remaining
            const timer = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000); // 1000 ms = 1 second

            // Clear the timer when the component unmounts or when time runs out
            return () => clearTimeout(timer);
        }
    }, [timeRemaining]);

    return (
        <UserContext.Provider value={{ questions, setQuestions, correctQuestions, setCorrectQuestions, totalQuestions, timeRemaining }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
