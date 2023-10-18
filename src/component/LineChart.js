import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jun", "Jul", "Aug", "Sep", "Oct"];

const data = {
  labels,
  datasets: [
    {
      label: "가격 변동 추이",
      data: [8, 8, 8, 9, 7],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderWidth: 1,
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

//크기줄이고, 폰트사이트 키우고
const NewLineChart = () => {
  return (
    <div style={{ position: "relative", height: "10vh" }}>
      <Line
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

export default NewLineChart;
