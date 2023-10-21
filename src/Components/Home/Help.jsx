import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';
import { questions } from '../Data';

export default function Help() {
  const [answerVisibility, setAnswerVisibility] = useState(Array(questions.length).fill(false));

  const toggleAnswer = (index) => {
    const newVisibility = [...answerVisibility];
    newVisibility[index] = !newVisibility[index];
    setAnswerVisibility(newVisibility);
  };

  return (
    <div className='max-w-7xl mx-auto p-5'>
      <h1 className='text-4xl font-semibold m-5 text-center'>Frequently Asked Questions</h1>
      <div className=' mx-auto p-5 mt-4'>
        <div className="ques-ans w-[60vw] mx-auto p-2">

          {questions.map((item, index) => (
            <div key={index}>
              <div className='ques pl-8 p-5 m-5 mb-0 bg-gray-300 flex justify-between cursor-pointer ' onClick={() => toggleAnswer(index)}>
                <h3 className='text-black font-semibold text-xl'>
                  <span>Q{index + 1}:</span> {item.ques}
                </h3>
                <div>
                  <IoMdAdd className={`h-7 w-7 transform ${answerVisibility[index] ? 'rotate-45' : ''}`} />
                </div>
              </div>

              <div className={`ans pl-8 mb-3 m-5 mt-0 bg-slate-100 font-medium text-lg transition-all duration-300 ${answerVisibility[index] ? 'block' : 'hidden'}`}>
                <h4 className='text-gray-500 p-5'>
                  {item.ans}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
