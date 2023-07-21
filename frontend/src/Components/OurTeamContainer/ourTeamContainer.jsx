import React from "react";
import OurTeam from "./OurTime/OurTeam";
export default function ourTeamContainer() {
  return (
    <div style={{ background: "#f4eeee87" }}>
      <div style={{ gap: "15px", display: "flex", flexWrap: "wrap", margin: "auto", width: "93%" }}>
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
        <OurTeam img="./image/duha.png" name="Duha Jilani" />
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
       
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
        <OurTeam img="./image/Kayyali.jpg" name="Mohammad Alkayyali" />
      </div>
    </div>
  );
}
