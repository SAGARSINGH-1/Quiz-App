import React from 'react'

export default function Topicform() {
  return (
    <div>
        
            <div className='form flex justify-center xl:w-[25vw] md:w-[18vw] overflow-x-auto overflow-y-hidden'>
                <form className="bg-white p-8 rounded shadow-xl text-left w-[22vw] mt-[15vh] flex flex-col justify-center">
                    <div className="mb-4">
                        <label htmlFor="field1" className="block text-gray-700 text-sm font-bold mb-2 ml-2 ">Category</label>
                        <select id="field1" name="field1" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black" >
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
                        <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2 ml-2 ">Difficulty</label>
                        <select id="field2" name="field2" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black">
                            <option value="" disabled selected>Any Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="field3" className="block text-gray-700 text-sm font-bold mb-2 ml-2">Number of questions</label>
                        <select id="field3" name="field3" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black" >
                            <option value="" disabled selected>No.</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="field4" className="block text-gray-700 text-sm font-bold mb-2 ml-2">Tags</label>
                        <select name="tags[]" id="field4" className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-white text-black" >
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

                    <button className='mx-auto'>Submit</button>
                </form>
            </div>
        
    </div>
  )
}
