import "./App.css";
import "./index.css";
import logo from "./assets/logo.svg";
import hamburger from "./assets/icon-menu.svg";
import backgroundImageMobile from "./assets/image-hero-mobile.png";
import backgroundDesktopImage from "./assets/image-hero-desktop.png";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientDatabiz from "./assets/client-databiz.svg";
import clientMaker from "./assets/client-maker.svg";
import clientMeet from "./assets/client-meet.svg";
import closeMenu from "./assets/icon-close-menu.svg";
import { useState } from "react";
import todo from "./assets/icon-todo.svg";
import calendar from "./assets/icon-calendar.svg";
import reminders from "./assets/icon-reminders.svg";
import planning from "./assets/icon-planning.svg";
import upArrow from "./assets/icon-arrow-up.svg";
import downArrow from "./assets/icon-arrow-down.svg";

function App() {
  // useState to toggle the sidebar - set to false by default
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <>
      <div className="space-y-4 bg-almost-white min-h-screen">
        {/* Header */}
        <div className="flex flex-row items-center justify-between pt-6 pl-6 pr-6">
          <div className="mobile-logo">
            <img src={logo} alt="Snap logo" />
          </div>
          <div className={`flex ${isOpen ? "w-72" : "w-20"} bg-almost-white`}>
            <div className="absolute top-0 right-0 pt-6 pr-6 z-50 nav-sidebar">
              <img
                // Ternary operator - Toggle the hamburger/close menu icon based on the isOpen state
                // if isOpen is true, show the close menu icon, else show the hamburger icon
                src={isOpen ? closeMenu : hamburger}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="cursor-pointer"
                // onClick event handler - when user clicks on the element, it listens and toggles the isOpen state
                // if isOpen is true, it will set to false, else it will set to true
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          {/* Sidebar */}
          <div
            className={`text-medium-gray fixed top-0 right-0 w-64 bg-almost-white transition-transform duration-500 overflow-hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } h-screen`}
            style={{
              width: "18rem",
              transitionProperty: "transform",
              transitionDuration: "500ms",
            }}
          >
            {/* Sidebar Content */}
            <div className="flex flex-col mt-20 p-8 space-y-10 font-bold text-md font-epilogue">
              <div
                className="flex flew-row items-center justify-between"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                <h2 className="text-medium-gray cursor-pointer">Features</h2>
                <img
                  src={isFeaturesOpen ? upArrow : downArrow}
                  alt={isFeaturesOpen ? "Up Arrow Icon" : "Down Arrow Icon"}
                  className="w-4 h-2"
                />
              </div>
              {isFeaturesOpen && (
                <div className="flex flex-col ml-4 space-y-4">
                  <div className="flex flex-row space-x-2">
                    <img src={todo} alt="todo icon" className="h-4 w-4" />
                    <a href="#" className="text-medium-gray">
                      Todo List
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <img src={calendar} alt="todo icon" className="h-4 w-4" />
                    <a href="#" className="text-medium-gray">
                      Calendar
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <img src={reminders} alt="todo icon" className="h-4 w-4" />
                    <a href="#" className="text-medium-gray">
                      Reminders
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <img src={planning} alt="todo icon" className="h-4 w-4" />
                    <a href="#" className="text-medium-gray">
                      Planning
                    </a>
                  </div>
                </div>
              )}
              <div
                className="flex flew-row items-center justify-between"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <h2 className="text-medium-gray cursor-pointer">Company</h2>
                <img
                  src={isFeaturesOpen ? upArrow : downArrow}
                  alt={isFeaturesOpen ? "Up Arrow Icon" : "Down Arrow Icon"}
                  className="w-4 h-2"
                ></img>
              </div>
              {isCompanyOpen && (
                <div className="flex flex-col ml-4 space-y-4">
                  <div className="flex flex-row space-x-2">
                    <a href="#" className="text-medium-gray">
                      History
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <a href="#" className="text-medium-gray">
                      Team
                    </a>
                  </div>
                  <div className="flex flex-row space-x-2">
                    <a href="#" className="text-medium-gray">
                      Blog
                    </a>
                  </div>
                </div>
              )}
              <h2>Careers</h2>
              <h2>About</h2>
              <div className="flex flex-col p-6 font-md font-epilogue">
                <button className="bg-almost-white text-medium-gray rounded-lg p-2">
                  Login
                </button>
                <button className="bg-almost-white text-medium-gray rounded-lg p-2 border border-medium-gray">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Image Layout */}
        <div className="mobile-layout">
          <div>
            <img
              src={backgroundImageMobile}
              alt="background"
              className="background-image-mobile"
            ></img>
          </div>
          {/* Copy Text */}
          <div className="flex flex-col space-y-4 items-center justify-center p-6">
            <h1 className="font-almost-black font-epilogue font-bold text-3xl">
              Make remote work
            </h1>
            <h2 className="font-medium-gray font-epilogue text-sm">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </h2>
          </div>
          {/* Button Learn More */}
          <div className="flex items-center justify-center">
            <button className="bg-almost-black text-almost-white font-bold rounded-lg p-2">
              Learn more
            </button>
          </div>
          {/* Client Logos */}
          <div className="flex flex-row items-center justify-between p-2">
            <img
              src={clientDatabiz}
              alt="Client Databiz image"
              className="h-4"
            ></img>
            <img
              src={clientAudiophile}
              alt="Client Audiophile image"
              className="h-4"
            ></img>
            <img src={clientMeet} alt="Client Meet image" className="h-4"></img>
            <img
              src={clientMaker}
              alt="Client Maker image"
              className="h-4"
            ></img>
          </div>
        </div>
        {/* Desktop Layout */}
        {/* Desktop Copy Text */}
        <div className="flex p-8 items-center justify-between font-bold text-md font-epilogue">
          <nav className="fixed top-0 left-0 items-center justify-between">
            <div className="flex flex-row items-center space-x-20">
              <img src={logo} alt="Snap logo" className="ml-10" />
              <div
                className="relative"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                <div className="flex flex-row items-center">
                  <h2 className="text-medium-gray cursor-pointer">Features</h2>
                  <img
                    src={isFeaturesOpen ? upArrow : downArrow}
                    alt={isFeaturesOpen ? "Up Arrow Icon" : "Down Arrow Icon"}
                    className="w-4 h-2"
                  />
                </div>
                {isFeaturesOpen && (
                  <div className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 m-2"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li className="flex flex-row items-center space-x-2">
                        <img src={todo} alt="todo icon" className="h-4 w-4" />
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          Todo List
                        </a>
                      </li>
                      <li className="flex flex-row items-center space-x-2">
                        <img
                          src={calendar}
                          alt="todo icon"
                          className="h-4 w-4"
                        />
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          Calendar
                        </a>
                      </li>
                      <li className="flex flex-row items-center space-x-2">
                        <img
                          src={reminders}
                          alt="todo icon"
                          className="h-4 w-4"
                        />
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          Reminders
                        </a>
                      </li>
                      <li className="flex flex-row items-center space-x-2">
                        <img
                          src={planning}
                          alt="todo icon"
                          className="h-4 w-4"
                        />
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          Planning
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <div className="flex flex-row items-center">
                  <h2 className="text-medium-gray cursor-pointer">Company</h2>
                  <img
                    src={isFeaturesOpen ? upArrow : downArrow}
                    alt={isFeaturesOpen ? "Up Arrow Icon" : "Down Arrow Icon"}
                    className="w-4 h-2"
                  ></img>
                </div>
                {isCompanyOpen && (
                  <div className="absolute z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 m-2"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li className="flex flex-row items-center space-x-2">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          History
                        </a>
                      </li>
                      <li className="flex flex-row items-center space-x-2">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          Team
                        </a>
                      </li>
                      <li className="flex flex-row items-center space-x-2">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-medium-gray"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex flex-row space-x-2">
                <a href="#" className="text-medium-gray">
                  Careers
                </a>
              </div>

              <div className="flex flex-row space-x-2">
                <a href="#" className="text-medium-gray">
                  About
                </a>
              </div>
              <div className="flex flex-row p-6 space-x-10 font-md font-epilogue">
                <button className="bg-almost-white text-medium-gray rounded-lg p-2">
                  Login
                </button>
                <button className="bg-almost-white text-medium-gray rounded-lg p-2 border border-medium-gray">
                  Register
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="grid-container">
          <div className="flex flex-col space-y-20 justify-start p-20 grid-item">
            <h1 className="font-almost-black font-epilogue font-bold text-6xl">
              Make remote work
            </h1>
            <h2 className="font-medium-gray font-epilogue text-lg">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </h2>
            {/* Button Learn More */}
            <div className="flex items-center">
              <button className="bg-almost-black text-almost-white font-bold rounded-lg p-2">
                Learn more
              </button>
            </div>
            {/* Client Logos */}
            <div className="flex flex-row justify-between">
              <img
                src={clientDatabiz}
                alt="Client Databiz image"
                className="h-8"
              ></img>
              <img
                src={clientAudiophile}
                alt="Client Audiophile image"
                className="h-8"
              ></img>
              <img
                src={clientMeet}
                alt="Client Meet image"
                className="h-8"
              ></img>
              <img
                src={clientMaker}
                alt="Client Maker image"
                className="h-8"
              ></img>
            </div>
          </div>
          <div className="grid-item">
            <img
              src={backgroundDesktopImage}
              alt="Desktop background image"
              className="flex-grow w-full h-full object-cover"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
