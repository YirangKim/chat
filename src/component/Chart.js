import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["CPU성능", "GPU성능", "화면성능", "배터리", "무게"],
  datasets: [
    {
      label: "# of Votes",
      data: [8, 9, 7, 8, 8],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

//크기줄이고, 폰트사이트 키우고
const NewChart = () => {
  return (
    <div style={{ position: "relative", height: "30vh" }}>
      <Radar
        data={data}
        options={{
          scale: {
            pointLabels: {
              fontSize: 16, // 폰트 크기를 16px로 설정
            },
          },
        }}
      />
    </div>
  );
};

// const NewChart = () => {
//   return (
//     <div style={{ position: "relative", height: "20vh" }}>
//       {" "}
//       {/* height를 "20vh"로 설정 */}
//       <Radar data={data} />
//     </div>
//   );
// };

// const NewChart = () => {
//   return (
//     <div style={{ position: "relative", height: "40vh" }}>
//       <Radar data={data} />
//     </div>
//   );
// };

export default NewChart;
