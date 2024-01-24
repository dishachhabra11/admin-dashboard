import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const Piechart = ({ selectedTaxType }) => {
  const [data, setData] = useState([]);

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

  const getChartData = () => {
    if (!data || data.length === 0) {
      return {
        labels: [],
        datasets: [],
      };
    }

    if (selectedTaxType) {
      // Display division of paid and unpaid for the selected tax type
      const paidCount = data.filter((item) => item[selectedTaxType] === 'Paid').length;
      const unpaidCount = data.filter((item) => item[selectedTaxType] === 'UnPaid').length;

      return {
        labels: ['Paid', 'UnPaid'],
        datasets: [
          {
            data: [paidCount, unpaidCount],
            backgroundColor: ['#2ecc71', '#e74c3c'],
            hoverOffset: 4,
          },
        ],
      };
    }

    // Display total counts for all tax types
    const totalPropertyTax = data.filter((item) => item['Property Tax'] === 'UnPaid').length;
    const totalWaterTax = data.filter((item) => item['Water Tax'] === 'UnPaid').length;
    const totalGarbageTax = data.filter((item) => item['Garbage Tax'] === 'UnPaid').length;

    return {
      labels: ['Property Tax', 'Water Tax', 'Garbage Tax'],
      datasets: [
        {
          data: [totalPropertyTax, totalWaterTax, totalGarbageTax],
          backgroundColor: ['#03396c', '#005b96', '#6497b1'],
          hoverOffset: 4,
        },
      ],
    };
  };

  return (
    <>
      <div className='w-[15rem] h-[281px] bg-white p-3 rounded-sm border border-gray-200 flex flex-col flex-1 mt-5 mr-5 mb-5 items-center '>
        <Pie data={getChartData()} />
      </div>
    </>
  );
};

export default Piechart;
