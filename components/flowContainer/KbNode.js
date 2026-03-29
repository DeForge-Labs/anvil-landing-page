"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import renderOutputs from "./renderOutput";
import TextField from "./TextField";

export default function KbNode() {
  return (
    <div className="w-64 rounded-lg">
      <Card
        className={`w-full border-black/30 shadow-lg relative rounded-lg before:rounded-lg py-4 pb-2 bg-white border`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/30 border-dashed px-4 py-0 mb-5 [.border-b]:pb-4">
          <CardTitle className="text-sm font-medium">
            <div className="flex items-center text-xs font-semibold">
              Filter Condition
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 py-0 space-y-4 -mt-2">
          {renderOutputs([
            {
              name: "Pass",
              type: "text",
            },
          ])}

          <TextField
            field={{ name: "Liquidity Threshold", value: "" }}
            currentValue={"> 50 ETH"}
          />
        </CardContent>
      </Card>
    </div>
  );
}
