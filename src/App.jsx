import "./App.css";
import "./index.css";
import logo from "./assets/logo.svg";
import hamburger from "./assets/icon-menu.svg";
import backgroundImageMobile from "./assets/image-hero-mobile.png";
import clientAudiophile from "./assets/client-audiophile.svg";
import clientDatabiz from "./assets/client-databiz.svg";
import clientMaker from "./assets/client-maker.svg";
import clientMeet from "./assets/client-meet.svg";

function App() {
  return (
    <>
      <div className="space-y-4 bg-almost-white min-h-screen">
        {/* Header */}
        <div className="flex flex-row items-center justify-between pt-6 pl-6 pr-6">
          <div>
            <img src={logo} alt="Snap logo"></img>
          </div>
          <div>
            <img src={hamburger} alt="Dropdown menu" className="w-full"></img>
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
