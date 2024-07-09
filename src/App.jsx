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
      <div>
        <h1>Make remote work</h1>
        <h2>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </h2>
      </div>
      <div>
        <button>Learn more</button>
      </div>
      <div>
        <img src={clientDatabiz} alt="Client Databiz image"></img>
        <img src={clientAudiophile} alt="Client Audiophile image"></img>
        <img src={clientMeet} alt="Client Meet image"></img>
        <img src={clientMaker} alt="Client Maker image"></img>
      </div>
    </>
  );
}

export default App;
