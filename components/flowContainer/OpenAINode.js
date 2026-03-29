"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import renderOutputs from "./renderOutput";
import TextAreaField from "./TextAreaField";
import StandaloneField from "./StandaloneNode";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default function OpenAINode() {
  return (
    <div className="w-64 rounded-lg">
      <Card
        className={`w-full relative rounded-lg before:rounded-lg py-4 pb-2 bg-white border-black/30 shadow-lg border`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/30 border-dashed px-4 py-0 mb-5 [.border-b]:pb-4">
          <CardTitle className="text-sm font-medium">
            <div className="flex items-center text-xs font-semibold">
              Transaction Execution
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0 space-y-4 -mt-2">
          {renderOutputs([
            {
              name: "Output",
              type: "text",
            },
          ])}

          <SelectField
            field={{
              name: "Action",
              value: "Swap",
              options: ["Swap", "Mint", "Approve", "Transfer"],
            }}
            currentValue={"Swap"}
          />

          <TextAreaField
            field={{ name: "Query", value: "Execute a trade in plain English" }}
            currentValue={""}
          />

          <TextField
            field={{ name: "Amount", value: "" }}
            currentValue={"0.5 ETH"}
          />
          <TextField
            field={{ name: "Maximum Slippage", value: "" }}
            currentValue={"0.5%"}
          />

          <StandaloneField
            input={{
              name: "Wallet",
              type: "RAG",
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
