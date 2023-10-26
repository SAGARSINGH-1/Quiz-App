import { BiTimer } from 'react-icons/bi'

function Test() {
    return (
        <>
            <div className='flex justify-center items-center w-[100%] h-[100vh] relative bg-indigo-50'>
                <div className='z-10 flex flex-col justify-center items-center text-center border-2 border-black w-[72%] h-[75vh] mb-3 rounded-3xl bg-transparent'>
                    <h2><BiTimer className="text-3xl inline mt-2 mb-2" />09:24</h2>
                    <div className='w-[70%] max-h-max mt-6 border-2 border-gray-300 rounded-sm selection:bg-none p-2'>
                        <h1 className='text-lg py-4 relative text-center'>Question : lineWeight screen screen screena false medium lineWeight lineWeight screen screen screena lineWeight screen eight screeen screena lineWeight screight screen screen screena lineWeight scr screen screena<span className='absolute top-[-29px] text-white font-semibold px-4 bg-indigo-500 left-[41%] rounded-3xl py-2'>JavaScript | 10</span></h1>
                    </div>
                    <div className='w-[70%] gap-3 my-4 flex flex-wrap justify-between items-center '>
                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 selection:bg-none w-[49%]'>Option 1</div>
                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 selection:bg-none w-[49%]'>Option 2</div>
                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 selection:bg-none w-[49%]'>Option 3</div>
                        <div className='p-2 text-md border-2 border-gray-300 rounded-sm hover:border-indigo-500 cursor-pointer hover:bg-indigo-100 selection:bg-none w-[49%]'>Option 4</div>
                    </div>
                    <div className='mb-2'>
                        <button className='m-2 py-2 px-5 w-[100px]'>Previous</button>
                        <button className='m-2 py-2 px-5 w-[100px]'>Next</button>
                    </div>
                </div>
                <div className='h-[60px] w-[60px] absolute bg-indigo-200 rounded-full bottom-[-10px] left-[115px]'></div>
                <div className='h-[40px] w-[40px] absolute bg-indigo-200 rounded-full top-[15px] right-[251px]'></div>
                <div className='h-[120px] w-[120px] absolute bg-indigo-400 rounded-full top-[15px] left-[115px]'></div>
                <div className='h-[120px] w-[120px] absolute bg-indigo-400 rounded-full bottom-[15px] right-[105px]'></div>
            </div>
        </>
    )
}

export default Test