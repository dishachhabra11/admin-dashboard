import ReactSpeedometer from "react-d3-speedometer";
import React, { useState, useEffect } from 'react';

const Speedometer = ({ selectedTaxType }) => {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/maps/markers');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      if (selectedTaxType) {
        // Display division of paid and unpaid for the selected tax type
        const paidCount = data.filter((item) => item[selectedTaxType] === 'Paid').length;
        const unpaidCount = data.filter((item) => item[selectedTaxType] === 'UnPaid').length;

        const total = paidCount + unpaidCount;
        setValue((paidCount / total) * 100);
      } else {
        // Display total counts for all tax types
        const totalPropertyTax = data.filter((item) => item['Property Tax'] === 'UnPaid').length;
        const totalWaterTax = data.filter((item) => item['Water Tax'] === 'UnPaid').length;
        const totalGarbageTax = data.filter((item) => item['Garbage Tax'] === 'UnPaid').length;

        const total = totalPropertyTax + totalWaterTax + totalGarbageTax;
        setValue((totalPropertyTax / total) * 100);
      }
    }
  }, [data, selectedTaxType]);

  return (
    <div className="bg-white flex flex-1 rounded-sm border border-gray-200 w-[15rem] h-[12rem] ml-5 mb-5">
      <div style={{
        width: "15rem",
        height: "192px",
        background: "white",
        display: "flex",
        flex: "1 1 0%",
        borderRadius: "5px",
      }}>
        <ReactSpeedometer
          fluidWidth={false}
          minValue={0}
          maxValue={100}
          value={value}
          needleColor="steelblue"
          segments={5}
          ringWidth={10}
        />
      </div>
    </div>
  );
};

export default Speedometer;
