"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import renderOutputs from "./renderOutput";
import TextField from "./TextField";

export default function ChatbotNode() {
  return (
    <div className="w-64 rounded-lg">
      <Card
        className={`w-full relative before:rounded-sm rounded-lg py-4 pb-2 border-black/30 border bg-white shadow-lg`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/30 border-dashed px-4 py-0 mb-5 [.border-b]:pb-4">
          <CardTitle className="text-sm font-medium">
            <div className="flex items-center text-xs font-semibold">
              On-chain Event
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 py-0 space-y-4 -mt-2">
          {renderOutputs([
            {
              name: "Event",
              type: "text",
            },
          ])}

          <TextField
            field={{ name: "Protocol", value: "" }}
            currentValue={"Uniswap V3"}
          />
        </CardContent>
      </Card>
    </div>
  );
}
