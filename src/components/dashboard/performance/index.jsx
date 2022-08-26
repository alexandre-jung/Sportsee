import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export const PERFORMANCE_SUBJECT_MAP = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  endurance: "Endurance",
  energy: "Energie",
  cardio: "Cardio",
};

function adaptPerformanceData(performance) {
  return Object.entries(performance).map(([key, value]) => ({
    subject: PERFORMANCE_SUBJECT_MAP[key],
    value,
  }));
}

export function Performance({ performance }) {
  const data = adaptPerformanceData(performance);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="50%"
        data={data}
        style={{ backgroundColor: "black" }}
      >
        <PolarGrid stroke="white" />
        <PolarAngleAxis
          stroke="white"
          dataKey="subject"
          tick={{ fontSize: "10px" }}
          tickLine={false}
        />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#e60000"
          fill="#e60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
