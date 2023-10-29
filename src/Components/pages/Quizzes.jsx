import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import Topics from "../requirements/Topics";
import { RaceBy } from "@uiball/loaders";
import { NavLink } from 'react-router-dom'

export default function Quizzes() {
  const [isContentLoaded, setContentLoaded] = useState(false);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [no_Question, setNo_Question] = useState(null);
  const [tags, setTags] = useState('');

  const { setAnswers, setQuestions, set_tags, setTotalQuestions } = useContext(UserContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContentLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  function fetchQuestions() {
    if (no_Question && category && difficulty && tags) {
      fetch(`https://quizapi.io/api/v1/questions?apiKey=rxU1myfAqf2i5gfRIU8epcIbanIVyG0lxmq8DYDp&limit=${no_Question}&category=${category}&difficulty=${difficulty}&type=multiple&tags=${tags}`)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data);

          const answers = data.map((item) => {
            if (item.correct_answers && typeof item.correct_answers === 'object') {
              const trueKeys = Object.keys(item.correct_answers).filter((key) => item.correct_answers[key] === 'true');
              return trueKeys;
            }
            // Handle the case when correct_answers is not an object (e.g., when it's missing or of the wrong type)
            return [];
          });

          setAnswers(answers);
        });
    }
  }



  function submitHandler(e) {
    // e.preventDefault();
    set_tags(tags);
    setTotalQuestions(no_Question);
    fetchQuestions();
  }

  return (
    <div>
      {isContentLoaded ? (
        <div className="max-w-7xl flex  mx-auto overflow-x-auto overflow-y-hidden">
          <div className="form mt-10">
            <div>
              <div className='form flex justify-center xl:w-[25vw] md:w-[18vw] overflow-x-auto overflow-y-hidden'>
                <form className="bg-white p-8 rounded shadow-xl text-left w-[22vw] mt-[15vh] flex flex-col justify-center">
                  <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2 ml-2 ">Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} id="category" name="category" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black" >
                      <option value="any">Any Category</option>
                      <option value="Linux">Linux</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Networking">Networking</option>
                      <option value="Programming">Programming</option>
                      <option value="Cloud">Cloud</option>
                      <option value="Kubernetes">Kubernetes</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="difficulty" className="block text-gray-700 text-sm font-bold mb-2 ml-2 ">difficulty</label>
                    <select onChange={(e) => setDifficulty(e.target.value)} id="difficulty" name="difficulty" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black">
                      <option value="">Any difficulty</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="no_Question" className="block text-gray-700 text-sm font-bold mb-2 ml-2">Number of questions</label>
                    <select onChange={(e) => setNo_Question(e.target.value)} id="no_Question" name="no_Question" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black" >
                      <option value="">default</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2 ml-2">Tags</label>
                    <select onChange={(e) => setTags(e.target.value)} name="tags[]" id="tags" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black" >
                      <option value="any">Tags</option>
                      <option value="Linux">Linux</option>
                      <option value="BASH">BASH</option>
                      <option value="PHP">PHP</option>
                      <option value="Docker">Docker</option>
                      <option value="HTML">HTML</option>
                      <option value="MySQL">MySQL</option>
                      <option value="WordPress">WordPress</option>
                      <option value="Laravel">Laravel</option>
                      <option value="Kubernetes">Kubernetes</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="DevOps">DevOps</option>
                    </select>
                  </div>

                  <NavLink to="/test" onClick={submitHandler} className='button mx-auto'>Submit</NavLink>
                </form>
              </div>

            </div>
          </div>
          <div>
            <Topics title="Tech Quiz Genre Selection" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center top-[30vh] min-h-screen relative">
          <RaceBy size={100} lineWeight={5} speed={1.4} color="#3f83f8" />
          <p className="text-center text-gray-500 mt-5">Loading...</p>
        </div>
      )}
    </div>
  );
}
