import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/sus.jpg";
import imgLightMode from "../img/brack.jpg";

const app = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode
    ? "imagem no Modo claro"
    : "imagem no modo escuro ";
  return (
    <div>
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @murilo
      </Profile>
    </div>
  );
};

export default app;