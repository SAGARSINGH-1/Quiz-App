import { BiTimer } from 'react-icons/bi';
import { useState, useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import { RaceBy } from "@uiball/loaders";
import { NavLink } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';

function Test() {
    const [isContentLoaded, setContentLoaded] = useState(false);
    const { answers, questions, category, totalQuestions, selectedOptions, setSelectedOptions } = useContext(UserContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questionTime = 20; // Time allocated for each question in seconds
    const [timeRemaining, setTimeRemaining] = useState(questionTime);
    const [submit, setSubmit] = useState(false);
    let selected = null;
    // Question time
    useEffect(() => {
        if (timeRemaining > 0) {
            // Start a timer to decrement time remaining
            const timer = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1100); // 1000 ms = 1 second

            // Clear the timer when the component unmounts or when time runs out
            return () => clearTimeout(timer);
        } else {
            // Go to next question
            goToNextQuestion();
            setTimeRemaining(questionTime)
        }
    }, [timeRemaining]);

    // To check content is loaded or not
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setContentLoaded(true);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeRemaining(questionTime)
        } else if (currentQuestionIndex === questions.length - 1) {
            setSubmit(true);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    function optionHandler(event, option) {
        if (answers[currentQuestionIndex].includes(option)) {
            setSelectedOptions([...selectedOptions, { currentQuestionIndex, option }]);
        }
        goToNextQuestion();
    }
    console.log(questions);

    return (
        <div className='md:w-auto w-[100vw]'>
            {isContentLoaded ? (
                <div className='flex justify-center mt-10 md:mt-0 items-center md:w-[100%]  md:h-[100vh] relative bg-indigo-50'>
                    {
                        currentQuestion ? (
                            <div className='z-10 flex flex-col justify-center items-center text-center border-2 border-gray-300 md:w-[72%] md:max-h-max mb-3 rounded-3xl bg-transparent'>
                                <h2 className='pt-8 pb-3'><BiTimer className="text-3xl inline mt-2 mb-2" />{timeRemaining}</h2>
                                <div className='flex justify-center items-center flex-col'>
                                    <div className='md:w-[45rem] mt-4 border-2 w-[90vw] border-gray-300 rounded-sm no-select p-2'>
                                        <h1 className='text-lg py-4 relative text-center'>
                                            {currentQuestion.question}
                                            <span className='absolute top-[-29px] left-[5rem] text-white font-semibold px-4 bg-indigo-500 md:left-[41%] rounded-3xl py-2'>
                                                {category} | Q{currentQuestionIndex + 1}/{totalQuestions}
                                            </span>
                                        </h1>
                                    </div>
                                    <div className='md:w-[45rem] md:gap-3 my-4 flex flex-col gap-2 md:flex-row flex-wrap justify-center p-4 items-center'>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select md:w-[49%] w-[90vw] h-auto' onClick={(e) => optionHandler(e, 'answer_a_correct')}>
                                            {currentQuestion.answers.answer_a}
                                        </div>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select md:w-[49%] w-[90vw] h-auto' onClick={(e) => optionHandler(e, 'answer_b_correct')}>
                                            {currentQuestion.answers.answer_b}
                                        </div>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select md:w-[49%] w-[90vw] h-auto' onClick={(e) => optionHandler(e, 'answer_c_correct')}>
                                            {currentQuestion.answers.answer_c ? currentQuestion.answers.answer_c : "Unavailable"}
                                        </div>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select md:w-[49%] w-[90vw] h-auto' onClick={(e) => optionHandler(e, 'answer_d_correct')}>
                                            {currentQuestion.answers.answer_d ? currentQuestion.answers.answer_d : "Unavailable"}
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <button className='m-2 py-2 px-5 md:min-w-max no-select' onClick={goToNextQuestion}><NavLink to={submit ? "/result" : ""}>Submit<FaRegCheckCircle className='inline mb-[3px] ml-2 text-xl' /></NavLink></button>
                                    </div>
                                </div>
                            </div>) : (<div className='text-3xl font-bold text-center'>
                                <h1 className='text-indigo-500 my-4'>Sorry for the inconvience</h1>
                                Nothing to show here maybe some <span className='text-indigo-500 underline underline-offset-4'>Error</span> occured while feathing data
                            </div>)

                    }
                    {/* <div className='h-[60px] w-[60px] absolute bg-indigo-200 rounded-full bottom-[-10px] left-[115px]'></div>
                    <div className='h-[40px] w-[40px] absolute bg-indigo-200 rounded-full top-[15px] right-[251px]'></div>
                    <div className='h-[120px] w-[120px] absolute bg-indigo-400 rounded-full top-[15px] left-[115px]'></div>
                    <div className='h-[120px] w-[120px] absolute bg-indigo-400 rounded-full bottom-[20px] right-[125px]'></div> */}
                </div>
            ) : (
                <div className="flex flex-col items-center top-[30vh] min-h-screen relative">
                    <RaceBy size={100} lineWeight={5} speed={1.4} color="#3f83f8" />
                    <p className="text-center text-gray-500 mt-5">Loading...</p>
                </div>
            )}
        </div>
    )
}

export default Test;
