
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Sample data for the delivery chart
const areaData = [
  { day: "Mon", deliveries: 23, onTime: 21, delayed: 2 },
  { day: "Tue", deliveries: 28, onTime: 25, delayed: 3 },
  { day: "Wed", deliveries: 35, onTime: 32, delayed: 3 },
  { day: "Thu", deliveries: 42, onTime: 38, delayed: 4 },
  { day: "Fri", deliveries: 50, onTime: 45, delayed: 5 },
  { day: "Sat", deliveries: 38, onTime: 35, delayed: 3 },
  { day: "Sun", deliveries: 25, onTime: 24, delayed: 1 },
];

const barData = [
  { name: "Downtown", completed: 42, pending: 11 },
  { name: "North", completed: 28, pending: 8 },
  { name: "East", completed: 35, pending: 10 },
  { name: "South", completed: 20, pending: 14 },
  { name: "West", completed: 45, pending: 5 },
];

type ChartType = "area" | "bar";

const DeliveryChart = () => {
  const [chartType, setChartType] = useState<ChartType>("area");

  return (
    <Card className="h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Delivery Performance</CardTitle>
        <div className="flex space-x-2">
          <Button
            variant={chartType === "area" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("area")}
          >
            Timeline
          </Button>
          <Button
            variant={chartType === "bar" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("bar")}
          >
            By Region
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-2 pb-2 h-[calc(100%-60px)]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "area" ? (
            <AreaChart
              data={areaData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorDeliveries" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#0F52BA"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#0F52BA"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorOnTime" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#03A9F4"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#03A9F4"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorDelayed" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#FF9800"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#FF9800"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="deliveries"
                stroke="#0F52BA"
                fillOpacity={1}
                fill="url(#colorDeliveries)"
              />
              <Area
                type="monotone"
                dataKey="onTime"
                stroke="#03A9F4"
                fillOpacity={1}
                fill="url(#colorOnTime)"
              />
              <Area
                type="monotone"
                dataKey="delayed"
                stroke="#FF9800"
                fillOpacity={1}
                fill="url(#colorDelayed)"
              />
            </AreaChart>
          ) : (
            <BarChart
              width={500}
              height={300}
              data={barData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#03A9F4" name="Completed" />
              <Bar dataKey="pending" fill="#FF9800" name="Pending" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DeliveryChart;
