
import { Link } from "react-router-dom";
import video from "./Vidoes/vidoes6.mp4";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24">

        {/* LEFT TEXT AREA */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <p className="text-3xl font-semibold leading-snug">
            Hello 👋 I'm <br />
            <span className="text-4xl md:text-5xl font-bold">Vishnu Gurjar</span>
          </p>

          {/* Typing animation section */}
          <section className="animation text-xl mt-4">
            <div className="first">
              <div>Full-Stack Developer</div>
            </div>
            <div className="second">
              <div>Front-end Developer</div>
            </div>
            <div className="third">
              <div>React-Js developer</div>
            </div>
          </section>

          {/* Resume button */}
          <div className="mt-6">
            <Link
              to="https://flowcv.com/resume/q6qf6ucaqg"
              target="_blank"
              className="inline-flex items-center px-6 py-2 bg-orange-700 text-white rounded-lg hover:opacity-80"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Resume
            </Link>
          </div>
        </div>

        {/* RIGHT - VIDEO */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <video
            className="rounded-3xl w-full max-w-sm md:max-w-md lg:max-w-lg shadow-xl"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-cyan-500">
            Computer Technology
          </h1>

          <p className="text-sm md:text-base font-light py-4 text-gray-700 leading-relaxed">
            Computer technology is the driving force behind modern innovations,
            enabling advancements in various fields such as healthcare,
            education, and communication.
          </p>
        </div>
      </section>

      {/* --- FOOTER LINE --- */}
      <h1 className="text-center text-xl py-10 font-medium" >"Welcome to my Personal Portfolio!"</h1>
      
    </div>
  );
};

export default Home;
