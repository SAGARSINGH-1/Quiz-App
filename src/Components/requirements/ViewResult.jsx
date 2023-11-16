import React from 'react';
import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';

function ViewResult() {
    const { answers, questions } = useContext(UserContext);

    return (
        <>
            {questions?.map((question, index) => {
                // Check if the selected answer is correct
                const selectedAnswerArray = answers[index];
                console.log(answers);

                return (
                    <div
                        className={`card border-t-4 my-2 p-10`}
                        key={index}
                    >
                        <div className="card-body pt-4 flex flex-col justify-center items-center gap-4">
                            <h5 className="card-title">Q.{index+1} {question.question}</h5>
                            <div className="card-text">
                                <div>
                                    <div className="w-[45rem] gap-3 my-4 flex flex-wrap justify-center p-1 items-center">
                                        <div
                                            className={`p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%] ${selectedAnswerArray[0]==='answer_a_correct' ? 'border-green-500' : ''
                                                }`}
                                        >
                                            {question.answers.answer_a
                                                ? question.answers.answer_a
                                                : 'Unavailable'}
                                        </div>
                                        <div
                                            className={`p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%] ${selectedAnswerArray[0]==='answer_b_correct' ? 'border-green-500' : ''
                                                }`}
                                        >
                                            {question.answers.answer_b
                                                ? question.answers.answer_b
                                                : 'Unavailable'}
                                        </div>
                                        <div
                                            className={`p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%] ${selectedAnswerArray[0]==='answer_c_correct' ? 'border-green-500' : ''
                                                }`}
                                        >
                                            {question.answers.answer_c
                                                ? question.answers.answer_c
                                                : 'Unavailable'}
                                        </div>
                                        <div
                                            className={`p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 no-select w-[49%] ${selectedAnswerArray[0]==='answer_c_correct'? 'border-green-500' : ''
                                                }`}
                                        >
                                            {question.answers.answer_d
                                                ? question.answers.answer_d
                                                : 'Unavailable'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ViewResult;
