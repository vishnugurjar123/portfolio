import React from 'react';
import { Link } from 'react-router-dom';
import video from './Vidoes/vidoes6.mp4';

import pdf from '../resume.pdf';
import './Home.css';


const Home = () => {
  return (
    <div className="h-full w-full ">
      <aside className="relative overflow-hidden text-black rounded-lg sm:py-10">
        <div className="relative z-1 max-w-screen-x pb-3 pt-24  mx-20  ">
          <div className="max-w-36 sm:mt-36 mt-80 space-y-11 text-right sm:text-right sm:ml-auto">


            <Link
              className="inline-flex text-white items-center px-6 py-2 pr-7 font-extralight bg-orange-700 rounded-lg hover:opacity-75"
              to="https://flowcv.com/resume/q6qf6ucaqg"
         
              rel="noopener noreferrer"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Resume
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 sm:my-10 w-full h-full flex flex-col sm:flex-row justify-center items-center">
          <div className='w-full sm:w-1/2 h-full ml-32'>
            <main className="text-left px-1 sm:px-0" style={{ height: '20%' }}>
              <p className='text-3xl'>
                Hello 👋 I'm 
                <br />
                Vishnu Gurjar
              </p>
              <section className="animation text-xl box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; rounded-full">
                <div className="first ">
                  <div>Youtuber</div>
                </div>
                <div className="second">
                  <div>front-end developer</div>
                </div>
                <div className="third">
                  <div>Mentor</div>
                </div>
              </section>
            </main>
          </div>
          
        </div>
      </aside>

      <div className="relative w-full h-full flex flex-col sm:flex-row justify-start items-center px-4 ">
        <div className="w-1/2 h-1/2">
          <video className="rounded-3xl max-h-52 max-w-3xl box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;" src={video} autoPlay loop muted />
        </div>
        <div className="w-full sm:w-1/2 flex items-end justify-end mt-8 mr-32 ">
          <div className="">
            <h1 className="text-2xl font-bold  text-cyan-400">Computer technology</h1>
            <p className=" text-sm font-thin py-4 ">
              Computer technology is the driving force <br />
              behind modern innovations, enabling <br />
              advancements in various fields such as healthcare, <br />
              education, and communication.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center text-xl py-10 font-medium">
        "Welcome to my personal Portfolio!"
      </h1>
    </div>
  );
};

export default Home;
