
import { useState } from "react";
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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Button } from "@/components/ui/button";
import { useDeliveries } from "@/hooks/useDeliveries";
import { toast } from "sonner";

// Dados simulados para o gráfico de entregas
const areaData = [
  { day: "Seg", deliveries: 23, onTime: 21, delayed: 2 },
  { day: "Ter", deliveries: 28, onTime: 25, delayed: 3 },
  { day: "Qua", deliveries: 35, onTime: 32, delayed: 3 },
  { day: "Qui", deliveries: 42, onTime: 38, delayed: 4 },
  { day: "Sex", deliveries: 50, onTime: 45, delayed: 5 },
  { day: "Sáb", deliveries: 38, onTime: 35, delayed: 3 },
  { day: "Dom", deliveries: 25, onTime: 24, delayed: 1 },
];

const barData = [
  { name: "Centro", completed: 42, pending: 11 },
  { name: "Norte", completed: 28, pending: 8 },
  { name: "Leste", completed: 35, pending: 10 },
  { name: "Sul", completed: 20, pending: 14 },
  { name: "Oeste", completed: 45, pending: 5 },
];

const pieData = [
  { name: "Pendentes", value: 38, color: "#facc15" },
  { name: "Em andamento", value: 25, color: "#3b82f6" },
  { name: "Entregues", value: 110, color: "#22c55e" },
  { name: "Falhas", value: 8, color: "#ef4444" },
];

type ChartType = "area" | "bar" | "pie";

const DeliveryChart = () => {
  const [chartType, setChartType] = useState<ChartType>("area");
  const { isLoading } = useDeliveries();

  const handleChartClick = (data: any) => {
    if (data && data.name) {
      toast(`Dados: ${data.name}`, {
        description: `Valores: ${Object.entries(data)
          .filter(([key]) => key !== 'name')
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ')}`,
      });
    }
  };

  return (
    <Card className="h-[400px]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Desempenho de Entregas</CardTitle>
        <div className="flex space-x-2">
          <Button
            variant={chartType === "area" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("area")}
          >
            Linha do Tempo
          </Button>
          <Button
            variant={chartType === "bar" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("bar")}
          >
            Por Região
          </Button>
          <Button
            variant={chartType === "pie" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("pie")}
          >
            Status
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-2 pb-2 h-[calc(100%-60px)]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin h-8 w-8 border-4 border-trackflow-blue border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "area" ? (
              <AreaChart
                data={areaData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                onClick={handleChartClick}
              >
                <defs>
                  <linearGradient id="colorDeliveries" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F52BA" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0F52BA" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorOnTime" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#03A9F4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#03A9F4" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorDelayed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF9800" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FF9800" stopOpacity={0} />
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
                  name="Total"
                />
                <Area
                  type="monotone"
                  dataKey="onTime"
                  stroke="#03A9F4"
                  fillOpacity={1}
                  fill="url(#colorOnTime)"
                  name="No prazo"
                />
                <Area
                  type="monotone"
                  dataKey="delayed"
                  stroke="#FF9800"
                  fillOpacity={1}
                  fill="url(#colorDelayed)"
                  name="Atrasadas"
                />
              </AreaChart>
            ) : chartType === "bar" ? (
              <BarChart
                data={barData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                onClick={handleChartClick}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#03A9F4" name="Concluídas" />
                <Bar dataKey="pending" fill="#FF9800" name="Pendentes" />
              </BarChart>
            ) : (
              <PieChart onClick={handleChartClick}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            )}
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default DeliveryChart;
