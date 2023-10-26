import { BiTimer } from 'react-icons/bi';
import { useState, useContext,useEffect } from "react";
import UserContext from "../../context/UserContext";
import Error from '../pages/Error';
import { RaceBy } from "@uiball/loaders";


function Test() {
    const [isContentLoaded, setContentLoaded] = useState(false);
    const { questions } = useContext(UserContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    console.log("questions here ", questions);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setContentLoaded(true);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);


    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            {isContentLoaded ? (
                <div className=' flex justify-center items-center w-[100%] h-[100vh] relative bg-indigo-50'>
                    <div className='z-10 flex flex-col justify-center items-center text-center border-2 border-black w-[72%] h-[75vh] mb-3 rounded-3xl bg-transparent'>
                        <h2 className='pt-10'><BiTimer className="text-3xl inline mt-2 mb-2" />09:24</h2>
                        {
                            currentQuestion ? (
                                <div className='flex justify-center items-center flex-col'>
                                    <div className='w-[45rem] mt-4 border-2 border-gray-300 rounded-sm no-select p-2'>
                                        <h1 className='text-lg py-4 relative text-center'>
                                            {currentQuestion.question}
                                            <span className='absolute top-[-29px] text-white font-semibold px-4 bg-indigo-500 left-[41%] rounded-3xl py-2'>
                                                JavaScript | 10
                                            </span>
                                        </h1>
                                    </div>
                                    <div className='border w-[45rem] gap-3 my-4 flex flex-wrap justify-between items-center '>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%]'>
                                            {currentQuestion.answers.answer_a}
                                        </div>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%]'>
                                            {currentQuestion.answers.answer_b}
                                        </div>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%]'>
                                            {currentQuestion.answers.answer_c}
                                        </div>
                                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%]'>
                                            {currentQuestion.answers.answer_d}
                                        </div>
                                    </div>
                                    <div className='mb-2'>
                                        <button className='m-2 py-2 px-5 w-[100px] no-select' onClick={goToPreviousQuestion}>Previous</button>
                                        <button className='m-2 py-2 px-5 w-[100px] no-select' onClick={goToNextQuestion}>Next</button>
                                    </div>
                                </div>
                            ) : (<Error />)
                        }
                    </div>
                    <div className='h-[60px] w-[60px] absolute bg-indigo-200 rounded-full bottom-[-10px] left-[115px]'></div>
                    <div className='h-[40px] w-[40px] absolute bg-indigo-200 rounded-full top-[15px] right-[251px]'></div>
                    <div className='h-[120px] w-[120px] absolute bg-indigo-400 rounded-full top-[15px] left-[115px]'></div>
                    <div className='h-[120px] w-[120px] absolute bg-indigo-400 rounded-full bottom-[-15px] right-[105px]'></div>
                </div>
            ) : (
                <div className="flex flex-col items-center top-[30vh] min-h-screen relative">
                    <RaceBy size={100} lineWeight={5} speed={1.4} color="#3f83f8" />
                    <p className="text-center text-gray-500 mt-5">Loading...</p>
                </div>
            )}
        </>
    )
}

export default Test;
