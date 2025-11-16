import React from 'react';
import img from './Vidoes/photo.jpg';

const About = () => {
  return (
    <div className="font-mono w-full h-full">
      <section className="items-center bg-cover h-full w-full justify-center px-4 md:px-20 mt-4">
        <div className="container py-5 text-xs">
          
          <div className="row g-4">
            {/* LEFT SIDEBAR */}
            <div className="col-lg-3 col-md-4 col-sm-12">

              {/* Profile Card */}
              <div className="card mb-4 shadow-sm rounded-lg">
                <div className="card-body text-center">

                  <img
                    src={img}
                    alt="avatar"
                    className="rounded-full img-fluid mx-auto cursor-pointer"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />

                  <h5 className="my-3 text-lg font-bold">VISHNU GURJAR</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Gwalior, India</p>

                  <div className="d-flex justify-content-center text-sm gap-2 mb-2">
                    <a href="https://www.linkedin.com/in/vishnu-gurjar-455b17328/" target="_blank" rel="noreferrer">
                      <button className="btn btn-primary btn-sm">LinkedIn</button>
                    </a>
                    <a href="https://github.com/vishnugurjar123" target="_blank" rel="noreferrer">
                      <button className="btn btn-outline-primary btn-sm">GitHub</button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="card mb-4 shadow-sm rounded-lg">
                <ul className="list-group list-group-flush">

                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <img className='w-5 h-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEUKZsL///8AYsDo7fdjiM0AV725yecAX8AAXL+dtt9sldIAZMHr8PgAVb3O2e4fbcUAUrz0+PyTrtzH1u0ucsYATLpDfck5eciOqNrf6PVdis6AoNdlkdGmvOJljc/Czemww+VTg8zX4PHtcv3dAAACjUlEQVR4nO2b0ZKiMBBFQ6MmGhAQHUVwFP7/IwecUSHB2Y3bZajae54sI3Iq3YROo0IAAAAAAAAAAAAAADBEE5HWvi36aCnF9mMvSJJvlTtSH/Kgo9js575lflDHMLiRHdQkYqjKoE+e+hZqUVUw5KR8KwmdRIZU8Ok92+XSdAoK3wHUFFpSwdbzVNHWdgo2nrNKmmnesfC8WMlyROrsW2o1QSnaj0gtPeeUFpktdZR+pYS8WE7ZzrOTkMfJrQgtsbmkn30HT3QFXj4MnvZ+62vR6abntKBJ1FNt9VLfJqsop1MQU6yqzWlZJukE8umBlkqp6cwSeAO6w7dEH5KSuk01tS/4xdrdscHjHGSM0P2YdF+e8iKKwiZfltuY20tXK4PkdgaqjZHj9/uSqqZfXERNpVnXEk3WFmt2m5D4bIw0bakj9HxVWDfxYjVnnKyR7cxdar4wRtatlExM1W9ywbfKOUq1t6SRPdmVqGYreRylVP1EqSWruRLLTUp+jFTPj7ni2sU6SllXxYCCqY/kJHW2C/ohTJW0k9Sf4Qkgs9QlnqBUtuXIKmap4MCRVdxSOUdSvSr1bL3KBEP8XpFal3KX7tSqGRusGabKXSqr5DVvtJKbkWGOpHKWKnqlUzpidWZYFJylkn54yI5gw9BbdpWqBtEZaZmGDG1AR6m10WpIbSmGet1RqjTSOM7NT4QMHRJHKfOMykr190sVZueRrO7y+6Ws650+/UudzEuLZv6lrA47pCAFKUhBClKQghSkIAUpSEEKUpD676SeP0N+SSpikWqicMhD6hINyaxHZzQzDo4ajt86df8jGHL/0v63J1ecDv8nK5NfhkZO+BcfAQAAAAAAAAAAAABgSnwBGlMvthfUovwAAAAASUVORK5CYII=" alt="" srcset="" />
                    <a href="https://www.linkedin.com/in/vishnu-gurjar-455b17328/" target="_blank">
                      <button className="btn btn-outline-primary btn-sm">LinkedIn</button>
                    </a>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                 <img className='w-24 h-10' src="data:image/png;base64,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" alt="" srcset="" />
                    <a href="https://www.codechef.com/users/gurjarvishnu74" target="_blank">
                      <button className="btn btn-outline-secondary btn-sm">CodeChef</button>
                    </a>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <img className="w-5 h-5" src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" />
                    <a href="https://leetcode.com/gurjarvishnu740/" target="_blank">
                      <button className="btn btn-outline-success btn-sm">LeetCode</button>
                    </a>
                  </li>

                </ul>
              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-9 col-md-8 col-sm-12">

              {/* Profile Details */}
              <div className="card mb-4 shadow-sm rounded-lg">
                <div className="card-body">

                  {[
                    ["Full Name", "VISHNU GURJAR"],
                    ["Email", "gurjarvishnu740@gmail.com"],
                    ["Phone", "9301390094"],
                    ["College", "Maharana Pratap College of Technology"],
                    ["Address", "Gwalior, India"],
                  ].map(([label, value], index) => (
                    <div key={index}>
                      <div className="row">
                        <div className="col-sm-4 col-4">
                          <p className="mb-0 font-semibold">{label}</p>
                        </div>
                        <div className="col-sm-8 col-8">
                          <p className="text-muted mb-0">{value}</p>
                        </div>
                      </div>
                      {index < 4 && <hr />}
                    </div>
                  ))}

                </div>
              </div>

              {/* Skills Section */}
              <div className="row g-3">

                {/* Project Status */}
                <div className="col-md-6 col-sm-12">
                  <div className="card shadow-sm rounded-lg">
                    <div className="card-body">

                      <p className="mb-4">
                        <span className="text-primary font-italic">Assignment</span> Progress
                      </p>

                      {[
                        "Web Design",
                        "Website Markup",
                        "One Page",
                        "Mobile Template",
                        "Backend API",
                      ].map((skill, index) => (
                        <div key={index}>
                          <p className="mt-3 mb-1 text-xs">{skill}</p>
                          <div className="progress h-1 rounded">
                            <div className="progress-bar w-52"></div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="col-md-6 col-sm-12">
                  <div className="card shadow-sm rounded-lg">
                    <div className="card-body">

                      <p className="mb-4">
                        <span className="text-primary font-italic">Skills</span> Overview
                      </p>

                      {[
                        "HTML", "CSS", "JAVASCRIPT", "REACTJS",
                        "BOOTSTRAP", "TAILWINDCSS", "Backend API",
                        "GIT", "GITHUB",
                      ].map((skill, index) => (
                        <div key={index}>
                          <p className="mt-3 mb-1 text-xs">{skill}</p>
                          <div className="progress h-1 rounded">
                            <div className="progress-bar w-52"></div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
