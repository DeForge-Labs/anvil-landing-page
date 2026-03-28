"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TextAreaField from "./TextAreaField";

export default function ChatbotResponse() {
  return (
    <div className="w-64 rounded-lg">
      <Card
        className={`w-full relative before:rounded-sm rounded-lg py-4 pb-2 bg-white border-black/15 border`}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-black/15 border-dashed px-4 py-0 mb-5 [.border-b]:pb-4">
          <CardTitle className="text-sm font-medium">
            <div className="flex items-center text-xs font-semibold">
              Telegram Alert
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 py-0 space-y-4 -mt-2">
          <TextAreaField
            field={{ name: "Message", value: "0x..." }}
            currentValue={
              "🚀 Snipe Successful! Bought {{tokenAmount}} of {{tokenSymbol}} for 0.5 ETH."
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
