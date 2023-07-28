import React from "react";
import OurTeam from "./OurTime/OurTeam";
import "./Teamcontainer.css";
export default function ourTeamContainer() {
  return (
    <div id="Team">
      <div className="TeamContainer">
        <OurTeam img="./image/Abdulraof.jpg" name="Abdulraof Mattur" />
        <OurTeam img="./image/amer.png" name="Amer Naser" />
        <OurTeam img="./image/duha.png" name="Duha Jilani" />
        <OurTeam img="./image/jehad.jpg" name="Jehad Mansra" />
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
      </div>
    </div>
  );
}
