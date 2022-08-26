import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DAYS_MAP } from "../../../constants";
import { CustomTooltip } from "./custom-tooltip";
import styles from "./styles.module.scss";

function adaptAverageSessionsData(averageSessions) {
  return Object.entries(averageSessions).map(([day, length]) => ({
    key: day,
    translatedDay: DAYS_MAP[day],
    abbreviatedDay: DAYS_MAP[day].slice(0, 1).toUpperCase(),
    length,
  }));
}

export function AverageSessions({ averageSessions }) {
  const data = adaptAverageSessionsData(averageSessions);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        style={{ backgroundColor: "red" }}
      >
        <XAxis
          dataKey="abbreviatedDay"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "10px", fill: "white" }}
          dy={10}
        />
        <Tooltip content={CustomTooltip} wrapperStyle={{ outline: "none" }} />
        <Line
          type="monotone"
          dataKey="length"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
          fill="white"
        >
          Durée moyenne des
        </text>
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
          fill="white"
        >
          sessions
        </text>
      </LineChart>
    </ResponsiveContainer>
  );
}
