import "./App.css";
import "./index.css";
import logo from "./assets/logo.svg";
import hamburger from "./assets/icon-menu.svg";
import backgroundImageMobile from "./assets/image-hero-mobile.png";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientDatabiz from "./assets/client-databiz.svg";
import clientMaker from "./assets/client-maker.svg";
import clientMeet from "./assets/client-meet.svg";
import closeMenu from "./assets/icon-close-menu.svg";
import { useState } from "react";

function App() {
  // useState to toggle the sidebar - set to false by default
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <>
      <div className="space-y-4 bg-almost-white min-h-screen">
        {/* Header */}
        <div className="flex flex-row items-center justify-between pt-6 pl-6 pr-6">
          <div>
            <img src={logo} alt="Snap logo"></img>
          </div>
          <div className={`flex ${isOpen ? "w-72" : "w-20"} bg-almost-white`}>
            <div className="absolute top-0 right-0 pt-6 pr-6 z-50">
              <img
                // Ternary operator - Toggle the hamburger/close menu icon based on the isOpen state
                // if isOpen is true, show the close menu icon, else show the hamburger icon
                src={isOpen ? closeMenu : hamburger}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="cursor-pointer"
                // onClick event handler - when user clicks on the element, it listens and toggles the isOpen state
                // if isOpen is true, it will set to false, else it will set to true
                onClick={() => setIsOpen(!isOpen)}
              ></img>
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
            <div className="flex flex-col m-14 space-y-4 font-bold text-md font-epilogue">
              <h2 className="text-medium-gray cursor-pointer onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}">
                Features
              </h2>
              {isFeaturesOpen && (
                <div className="flex flex-col ml-4 space-y-2">
                  <a href="#" className="text-medium-gray">
                    Todo List
                  </a>
                  <a href="#" className="text-medium-gray">
                    Calendar
                  </a>
                  <a href="#" className="text-medium-gray">
                    Reminders
                  </a>
                  <a href="#" className="text-medium-gray">
                    Planning
                  </a>
                </div>
              )}

              <h2>Company</h2>
              <h2>Careers</h2>
              <h2>About</h2>
              <div className="flex flex-col p-6">
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
        {/* Background Image */}
        <div>
          <img src={backgroundImageMobile} alt="background"></img>
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
          <img src={clientMaker} alt="Client Maker image" className="h-4"></img>
        </div>
      </div>
    </>
  );
}

export default App;
