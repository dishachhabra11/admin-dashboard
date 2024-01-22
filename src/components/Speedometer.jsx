import ReactSpeedometer from "react-d3-speedometer";
import React from 'react'

const Speedometer = () => {
  return (
    <div className="bg-white flex flex-1  rounded-sm border border-gray-200 w-[15rem] h-[12rem] ml-5 mb-5">
        <div style={{
    width: "15rem",
    height: "192px",
    background: "white",
    display:"flex",
    flex: "1 1 0%",
    borderRadius:"5px",
    

}}>
    <ReactSpeedometer
        fluidWidth={false}
        minValue={0}
        maxValue={100}
        value={86}
        needleColor="steelblue"
        segments={5}
        // startColor=""
        // endColor=""
        ringWidth={10}
        // textColor=""

    />
    </div>
</div>

  )
}

export default Speedometer