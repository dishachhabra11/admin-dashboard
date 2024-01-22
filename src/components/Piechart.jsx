import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(Tooltip, Title, ArcElement, Legend, ChartDataLabels);

const data = {
  type: 'pie',
  labels: ['Property Tax', 'Water Tax', 'Garbage Tax'],
  datasets: [
    {
    //   label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['#03396c', '	#005b96', '#6497b1'],
      hoverOffset: 4,
    },
  ],
  options: {
    plugins: {
      datalabels: {
        
         color:'white',
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
    responsive:"true",
  },
};

const Piechart = () => {
  return (
    <>
      <div className='w-[15rem] h-[281px] bg-white p-3 rounded-sm border border-gray-200 flex flex-col flex-1 mt-5 mr-5 mb-5 items-center '>
        <Pie data={data} />
      </div>
    </>
  );
};

export default Piechart;
