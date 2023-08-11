import Profile from "../components/profile/profile";
import Switch from "../components/switch btn/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/Footer/footer";
import { useState } from "react";

import "./App.css";

import imgDarkMode from "../img/sus.jpg";
import imgLightMode from "../img/brack.jpg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode
    ? "imagem no Modo claro"
    : "imagem no modo escuro ";
  return (
    <div id="App" className={isLightMode ? "light" : ""}>
      <div id="container">
        <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
          @murilo
        </Profile>
        <Switch mode={toggleMode} infoButton={isLightMode} />
        <div id="links">
          <ul>
            <Links link={"https://github.com"}>GitHub</Links>
            <Links link={"#"}>Instagram</Links>
            <Links link={"#"}>Linkedin</Links>
            <Links link={"#"}>Project</Links>
          </ul>
        </div>
        <div id="socialLinks">
          <SocialLinks href={"#"} icon={"logo-github"} />
          <SocialLinks href={"#"} icon={"logo-instagram"} />
          <SocialLinks href={"#"} icon={"logo-linkedin"} />
          <SocialLinks href={"#"} icon={"logo-github"} />
        </div>
        <Footer >Murilo</Footer>
      </div>
    </div>
  );
};

export default App;
