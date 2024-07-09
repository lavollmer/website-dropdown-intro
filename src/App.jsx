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
      <div className="flex flex-row items-center justify-between">
        <div>
          <img src={logo} alt="snap logo"></img>
        </div>
        <div>
          <img src={hamburger} alt="hamburger menu"></img>
        </div>
      </div>
      <div>
        <img src={backgroundImageMobile} alt="background"></img>
      </div>
      <div className="flex flex-col">
        <h1>Make remote work</h1>
        <h2>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-almost-black text-almost-white font-bold rounded-lg p-2">Learn more</button>
      </div>
      <div className="flex flex-row items-center justify-between">
        <img src={clientDatabiz} alt="Client Databiz image" className="h-4"></img>
        <img src={clientAudiophile} alt="Client Audiophile image" className="h-4"></img>
        <img src={clientMeet} alt="Client Meet image" className="h-4"></img>
        <img src={clientMaker} alt="Client Maker image" className="h-4"></img>
      </div>
    </>
  );
}

export default App;
