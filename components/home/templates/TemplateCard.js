import React from "react";

import { cn } from "@/lib/utils";

function TemplateCard({
  icon,
  title,
  description,
  className,
  embedded = false,
}) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 shadow-md hover:shadow-md transition-shadow bg-secondary/70 border border-black/10 relative z-10",
        className,
      )}
    >
      {embedded ? (
        <div className="h-20 w-20 bg-background rounded-sm shadow-md flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
      ) : (
        icon
      )}

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default React.memo(TemplateCard);
