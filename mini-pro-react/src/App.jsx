// import './App.css'

import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
 <>
 {/* <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={false} newestOnTop={false}
closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false}
theme="colored"/>
  <Header/>
  <Outlet/> */}
  {/* <div className='m-2  content-center    items-center '>
                <div className='lg:flex   lg:mt-10  content-center lg:ml-36 lg:mr-36 shadow  border-black justify-center '>
                    <div className='bg-black  rounded-l-2xl relative w-1/2 items-center text-center '>
                        <form action="" className='lg:mt-20 lg:mb-20'>
                            <div className='lg:mb-16'>
                                <input type="email" placeholder='Email' className='h-5 bg-transparent text-center  text-teal-300 text-xl  border-b border-yellow-300' />
                            </div>
                            <div className='lg:mb-16'>
                                <input type="password" placeholder='Password' className='h-5 bg-transparent text-center text-teal-300 text-xl  border-b border-yellow-300' />
                            </div>

                            <button className=' border border-white text-2xl font-bold text-yellow-300 rounded-lg pl-5 pr-5 pt-2 pb-2'>Login</button>

                        </form>


                    </div>
                    <div className='bg-blue-500  relative w-1/2  rounded-r-2xl  items-center text-center '>
                        <h1 className='text-amber-400 text-4xl  font-extrabold lg:p-20'>Login Now</h1>
                        <p className='text-white lg:p-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nam perferendis fugiat nihil debitis, consequatur quae! Ducimus nesciunt, eum consequatur maiores molestiae, incidunt ea dolorum, a eligendi voluptas libero nobis.</p>


                    </div>

                </div>


            </div> */}

{/* <div className='m-2 content-center items-center'>
  <div className='lg:flex lg:mt-10 content-center lg:ml-36 lg:mr-36 shadow border-black justify-center'>
    

    <div className='bg-black rounded-l-2xl relative w-1/2 items-center text-center z-10'>
      <form action="" className='lg:mt-20 lg:mb-20'>
        <div className='lg:mb-16'>
          <input type="email" placeholder='Email' className='h-5 bg-transparent text-center text-teal-300 text-xl border-b border-yellow-300' />
        </div>
        <div className='lg:mb-16'>
          <input type="password" placeholder='Password' className='h-5 bg-transparent text-center text-teal-300 text-xl border-b border-yellow-300' />
        </div>

        <button className='border border-white text-2xl font-bold text-yellow-300 rounded-lg pl-5 pr-5 pt-2 pb-2'>Login</button>
      </form>
    </div>

    <div className="w-16 bg-gradient-to-r from-black to-blue-500"></div>


    <div className='bg-blue-500 relative w-1/2 rounded-r-2xl items-center text-center z-10'>
      <h1 className='text-amber-400 text-4xl font-extrabold lg:p-20'>Login Now</h1>
      <p className='text-white lg:p-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam perferendis fugiat nihil debitis, consequatur quae! Ducimus nesciunt, eum consequatur maiores molestiae, incidunt ea dolorum, a eligendi voluptas libero nobis.
      </p>
    </div>
  </div>
</div> */}


    <div className='m-2 content-center items-center'>
  <div className='lg:flex lg:mt-10 content-center lg:ml-36 lg:mr-36 shadow border-black justify-center relative overflow-hidden'>

    {/* Black side */}
    <div className='bg-black rounded-l-2xl relative w-1/2 items-center text-center z-10'>
      <form action="" className='lg:mt-20 lg:mb-20'>
        <div className='lg:mb-16'>
          <input type="email" placeholder='Email' className='h-5 bg-transparent text-center text-teal-300 text-xl border-b border-yellow-300' />
        </div>
        <div className='lg:mb-16'>
          <input type="password" placeholder='Password' className='h-5 bg-transparent text-center text-teal-300 text-xl border-b border-yellow-300' />
        </div>

        <button className='border border-white text-2xl font-bold text-yellow-300 rounded-lg pl-5 pr-5 pt-2 pb-2'>Login</button>
      </form>
    </div>

    {/* Blue side */}
    <div className='bg-blue-500 relative w-1/2 rounded-r-2xl items-center text-center z-10'>
      <h1 className='text-amber-400 text-4xl font-extrabold lg:p-20'>Login Now</h1>
      <p className='text-white lg:p-20'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam perferendis fugiat nihil debitis, consequatur quae! Ducimus nesciunt, eum consequatur maiores molestiae, incidunt ea dolorum, a eligendi voluptas libero nobis.
      </p>
    </div>

    {/* Pseudo-element for blending effect */}
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-10 z-20 bg-gradient-to-r from-black to-blue-500'></div>
    
  </div>
</div>
 
 </>
  )
}

export default App
