import React from "react";
import OurTeam from "./OurTime/OurTeam";
export default function ourTeamContainer() {
  return (
    <div style={{ background: "#f4eeee87" }} id="Team">
      <div
        style={{
          gap: "15px",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          width: "93%"
        }}
      >
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
