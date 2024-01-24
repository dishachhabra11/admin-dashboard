import ReactSpeedometer from "react-d3-speedometer";
import React from "react";

const Speedometer = () => {
  return (
    <div className="bg-[#1C2438] flex flex-1   border border-gray-800 w-[15rem] h-[12rem] ml-5 mb-5 rounded-xl">
      <div
        style={{
          width: "15rem",
          height: "192px",
          background: "#1C2438",
          display: "flex",
          flex: "1 1 0%",
          borderRadius: "5px",
        }}
      >
        <ReactSpeedometer
          fluidWidth={false}
          minValue={0}
          maxValue={100}
          value={86}
          needleColor="steelblue"
          segments={5}
          startColor="#793FDF"
          endColor="#14C38E"
          ringWidth={10}
          // textColor=""
        />
      </div>
    </div>
  );
};

export default Speedometer;
