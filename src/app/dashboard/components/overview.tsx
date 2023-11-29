"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Fev",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Abr",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Mai",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Ago",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Set",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Out",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 100),
  },
  {
    name: "Dez",
    total: Math.floor(Math.random() * 100),
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={value => value}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
