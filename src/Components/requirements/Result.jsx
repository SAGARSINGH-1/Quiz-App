import React from "react";

function Result() {
  let points = 250; // <<--- here you have to put values
  let score = 45;

  const imageSource = points >= 250 ? "./assets/Trophi.jpg" : "./assets/Failed.png";
  return (
      <div>
        <div className="max-w-6xl mx-auto shadow-lg p-2">
          <div className="result-box bg-white text-black m-5">
            <div className="flex justify-center m-5">
              <div className="p-5 m-5 w-[40%]">
                <h1 className="text-5xl font-bold ">Quiz Result</h1>
                <h3 className="text-base font-medium text-gray-400 m-5 ">
                  Here Are Your Quiz Results
                </h3>
                <div>
                  {points >= 250 ? (
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
                  {points >= 250 ? (
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
              </div>
              <div className="result-image">
                <img
                  className="h-[50vh]"
                  src={imageSource}
                  alt="passed"
                  width="400px"
                />
              </div>
            </div>
            <hr className="border-black m-3" />
            <div className="result-bottom bg-indigo-400 flex justify-evenly gap-10 text-center">
              <div className="text-4xl text-white font-bold p-3 ">
                <h1>250</h1>
                <h1 className="text-2xl text-gray-200">Passing Points</h1>
              </div>
              <div className="text-4xl text-white font-bold p-3">
                <h1>70%</h1>
                <h1 className="text-2xl text-gray-200">Passing Score</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Result;
