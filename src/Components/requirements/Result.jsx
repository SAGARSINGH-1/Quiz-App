import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import {IoRefreshOutline} from 'react-icons/io5'

function Result() {

  const { questions, answers, selectedOptions } = useContext(UserContext);

  let points = `${selectedOptions.length}/${answers.length}`; // <<--- here you have to put values
  let score = selectedOptions.length;

  const imageSource = score >= questions.length / 2 ? "./assets/Trophi.jpg" : "./assets/Failed.png";
  return (
    <div className="mt-10 md:mt-0">
      {
        questions.length && answers.length && selectedOptions.length ? (
          <div className="md:max-w-6xl mx-auto shadow-lg p-2">
            <div className="result-box bg-white text-black md:m-5">
              <div className="flex md:flex-row flex-col-reverse justify-center md:m-5">
                <div className="p-5 m-5 md:w-[40%]">
                  <h1 className="text-5xl -3xl font-bold ">Quiz Result</h1>
                  <h3 className="text-base font-medium text-gray-400 m-5 ">
                    Here Are Your Quiz Results
                  </h3>
                  <div>
                    {score >= (questions.length / 2) ? (
                      <h4 className="text-base font-normal text-gray-400 m-5">
                        You have successfully passed your examination. Your hard
                        work and dedication have paid off, and you should be proud
                        of your achievement.
                      </h4>
                    ) : (
                      <h4 className="text-base font-normal text-red-400 m-5">
                        You have not passed the examination. Keep working hard and
                        aim for success in your next attempt.
                      </h4>
                    )}
                  </div>
                  <div>
                    {score >= questions.length / 2 ? (
                      <h2 className="text-4xl font-bold text-green-400 ml-5 mb-5">
                        {" "}
                        Passed!
                      </h2>
                    ) : (
                      <h2 className="text-4xl font-bold text-red-400 ml-5 mb-5">
                        Failed!
                      </h2>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-400 ml-5 mb-3">
                    Your Points : {points}
                  </h2>
                  <h2 className="text-2xl font-bold text-gray-400  ml-5 mb-5">
                    You Scored : {score}
                  </h2>
                  <button className="ml-8 my-2"><NavLink to={'/test'}>Retake test<IoRefreshOutline className="inline mb-1 ml-2 font-bold text-white"/></NavLink></button>
                  <button className="ml-8"><NavLink to={'/ViewResults'}>View Answers</NavLink></button>
                </div>
                <div className="result-image mx-auto">
                  <img
                    className="md:h-[50vh] md:w-[400px] h-[10vh] w-[20vw]"
                    src={imageSource}
                    alt="passed"
                    // width="400px"
                  />
                </div>
              </div>
              <hr className="border-black m-3" />
              <div className="result-bottom bg-indigo-400 flex justify-evenly gap-10 text-center">
                <div className="text-4xl text-white font-bold p-3 ">
                  <h1>{points}</h1>
                  <h1 className="text-2xl text-gray-200">Passing Points</h1>
                </div>
                <div className="text-4xl text-white font-bold p-3">
                  <h1>{score}</h1>
                  <h1 className="text-2xl text-gray-200">Passing Score</h1>
                </div>
              </div>
            </div>
          </div>) : (<div className='text-3xl font-bold text-center h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-indigo-500 my-4'>Sorry for the inconvience</h1>
            <p>Nothing to show here maybe some <span className='text-indigo-500 underline underline-offset-4 inline'>Error</span> occured while feathing data</p>
          </div>)
      }
    </div>
  );
}

export default Result;
