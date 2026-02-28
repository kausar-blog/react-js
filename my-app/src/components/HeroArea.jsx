import "./Hero.css"; // normal

import Styles from "./heroArea.module.css";

function HeroArea() {
  const myStyle = {
    color: "yellow",
    backgroundColor: "red",
    fontSize: "32px",
    textAlign: "center",
  };
  return (
    <>
      <h1
        style={{
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
        }}
      >
        This is hero section.
      </h1>

      <h2 id="Heading2">This section design comes from external css</h2>
      <h3 style={myStyle}>
        This section design comes from js object style for css
      </h3>
      <div className={Styles.HeroArea}></div>
      <div className="HeroArea"></div>
    </>
  );
}

export default HeroArea;
