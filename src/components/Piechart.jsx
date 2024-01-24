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
      <div className='w-[15rem] h-[300px] bg-[#1C2438] p-3  border border-gray-800 flex flex-col flex-1 mt-5 mr-5 mb-5 items-center rounded-xl '>
        <Pie data={data} />
      </div>
    </>
  );
};

export default Piechart;

// import { ResponsivePie } from "@nivo/pie";
// // import { tokens } from "../theme";
// // import { useTheme } from "@mui/material";
// import { markerData as data } from "../Data/markerData";

// const PieChart = () => {
//   // const theme = useTheme();
//   // const colors = tokens(theme.palette.mode);
//   return (
//     <ResponsivePie
//       data={data}
//       theme={{
//         axis: {
//           domain: {
//             line: {
//               stroke: "#e0e0e0",
//             },
//           },
//           legend: {
//             text: {
//               fill: "#e0e0e0",
//             },
//           },
//           ticks: {
//             line: {
//               stroke: "#e0e0e0",
//               strokeWidth: 1,
//             },
//             text: {
//               fill: "#e0e0e0",
//             },
//           },
//         },
//         legends: {
//           text: {
//             fill: "#e0e0e0",
//           },
//         },
//       }}
//       margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       activeOuterRadiusOffset={8}
//       borderColor={{
//         from: "color",
//         modifiers: [["darker", 0.2]],
//       }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor={"#e0e0e0"}
//       arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: "color" }}
//       enableArcLabels={false}
//       arcLabelsRadiusOffset={0.4}
//       arcLabelsSkipAngle={7}
//       arcLabelsTextColor={{
//         from: "color",
//         modifiers: [["darker", 2]],
//       }}
//       defs={[
//         {
//           id: "dots",
//           type: "patternDots",
//           background: "inherit",
//           color: "rgba(255, 255, 255, 0.3)",
//           size: 4,
//           padding: 1,
//           stagger: true,
//         },
//         {
//           id: "lines",
//           type: "patternLines",
//           background: "inherit",
//           color: "rgba(255, 255, 255, 0.3)",
//           rotation: -45,
//           lineWidth: 6,
//           spacing: 10,
//         },
//       ]}
//       legends={[
//         {
//           anchor: "bottom",
//           direction: "row",
//           justify: false,
//           translateX: 0,
//           translateY: 56,
//           itemsSpacing: 0,
//           itemWidth: 100,
//           itemHeight: 18,
//           itemTextColor: "#999",
//           itemDirection: "left-to-right",
//           itemOpacity: 1,
//           symbolSize: 18,
//           symbolShape: "circle",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemTextColor: "#000",
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// };

// export default PieChart;
