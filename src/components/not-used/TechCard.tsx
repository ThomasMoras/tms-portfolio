import React from "react";
import { JSX } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const TechCard = ({
  title,
  items,
  logo,
}: {
  title: string;
  items: { name: string; icon: JSX.Element; color: string }[];
  logo: JSX.Element;
}) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader className="flex items-center flex-row justify-center">
      <div className="flex-shrink-0">{logo}</div>
      <CardTitle className="text-xl leading-none">{title}</CardTitle>
    </CardHeader>

    <CardContent>
      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg transition-transform duration-200 hover:scale-110"
          >
            <div style={{ color: item.color }}>{item.icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default TechCard;
