import React from "react";
import MyIcon from "/src/assets/react.svg";

function HeroArea() {
  const boxStyle = {
    backgroundColor: "#f3f4f6",
    padding: "40px",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <>
      <div>
        <section style={boxStyle}>
          <h1 className="text-3xl font-bold mb-4">This is Hero Section</h1>

          <h2 className="text-xl text-gray-600 mb-2">
            This section design comes from external box
          </h2>

          <h3 className="text-md text-blue-500">
            This section design comes from JS object box
          </h3>
        </section>
        <div className="basis-1/2 flex">
          <img src="public/Img/hp-1.svg" alt="" className="w-md" />
          <img src={MyIcon} alt="" className="w-sm" />
        </div>
      </div>
    </>
  );
}

export default HeroArea;
