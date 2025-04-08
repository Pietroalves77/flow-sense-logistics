
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: number;
  trend?: "up" | "down" | "neutral";
  description?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  change,
  trend = "neutral",
  description,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("dashboard-card overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-muted-foreground/70">{icon}</div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            {(change || change === 0) && (
              <div className="flex items-center mt-1">
                {trend === "up" && (
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                )}
                {trend === "down" && (
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={cn("text-sm", {
                    "text-green-500": trend === "up",
                    "text-red-500": trend === "down",
                    "text-muted-foreground": trend === "neutral",
                  })}
                >
                  {change > 0 && "+"}
                  {change}%
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last period</span>
              </div>
            )}
          </div>
          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
