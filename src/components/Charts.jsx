import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Treemap,
  Sector,
} from "recharts";

const COLORS = ["#1aa7ff", "#28d17c", "#ffb703", "#fb5607", "#8ecae6", "#adb5bd"];

function renderActiveShape(props) {
    const {
      cx, cy,
      innerRadius, outerRadius,
      startAngle, endAngle,
      fill,
    } = props;
  
    return (
      <g>
        {/* sector utama (normal) */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
  
        {/* ring highlight (lebih besar) */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={outerRadius + 3}
          outerRadius={outerRadius + 12}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={0.35}
        />
      </g>
    );
  }  

export function DusunBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Penduduk" fill="#1aa7ff" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PekerjaanPieChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={130}
          label={false}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function PertanianBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Luas" fill="#28d17c" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function LahanDonutChart({ data }) {
const [activeIndex, setActiveIndex] = useState(-1);

    const total = useMemo(
        () => data.reduce((sum, d) => sum + (Number(d.Luas) || 0), 0),
        [data]
    );

    return (
        <ResponsiveContainer width="100%" height={360}>
        <PieChart>
            {/* teks total di tengah */}
            <text
            x="50%"
            y="48%"
            textAnchor="middle"
            fill="rgba(11,18,32,.85)"
            style={{ fontWeight: 950, fontSize: 20 }}
            >
            {total.toLocaleString("id-ID")}
            </text>
            <text
            x="50%"
            y="56%"
            textAnchor="middle"
            fill="rgba(11,18,32,.55)"
            style={{ fontWeight: 800, fontSize: 12 }}
            >
            Total Luas (Ha)
            </text>

            <Pie
            data={data}
            dataKey="Luas"
            nameKey="name"
            innerRadius={92}
            outerRadius={132}
            paddingAngle={2}
            isAnimationActive={true}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
            label={false}   // label luar dimatiin biar gak nimpah
            >
            {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
            </Pie>

            <Tooltip formatter={(value) => [`${value} Ha`, "Luas"]} />
            <Legend />
        </PieChart>
        </ResponsiveContainer>
    );
}

export function PekerjaanDonutChart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={90}
            outerRadius={130}
            paddingAngle={2}
            label={false}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => [v, "Jumlah"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
}

export function PeternakanBarChart({ data }) {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Jumlah" fill="#fb5607" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
}
  