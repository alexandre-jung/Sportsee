import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./custom-tooltip";
import styles from "./styles.module.scss";

function adaptActivityData(activity) {
  return activity.map(({ kilogram, calories }, index) => ({
    key: index + 1,
    kilogram,
    calories,
  }));
}

export function Activity({ activity }) {
  const data = adaptActivityData(activity);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="4 4" />
        <XAxis
          dataKey="key"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "10px" }}
          dy={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "10px", fill: "black" }}
          yAxisId="left"
          domain={["dataMin - 2", "dataMax + 2"]}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "10px", fill: "#e60000" }}
          yAxisId="right"
        />
        <Tooltip
          content={CustomTooltip}
          wrapperStyle={{ outline: "none" }}
          cursor={{ fill: "gray", opacity: 0.1 }}
        />
        <text
          x={20}
          y={20}
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
        >
          Activité quotidienne
        </text>
        <Legend
          align="right"
          verticalAlign="top"
          height={80}
          wrapperStyle={{
            top: 15,
            right: 20,
            fontSize: 12,
          }}
          iconSize={12}
          iconType="circle"
          formatter={(value, entry, index) => {
            if (value === "calories") {
              return `Calories brûlées (kCal)`;
            }
            return `Poids (kg)`;
          }}
        />
        <Bar
          dataKey="kilogram"
          fill="black"
          barSize={8}
          radius={[10, 10, 0, 0]}
          yAxisId="left"
        />
        <Bar
          dataKey="calories"
          fill="#e60000"
          barSize={8}
          radius={[10, 10, 0, 0]}
          yAxisId="right"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
