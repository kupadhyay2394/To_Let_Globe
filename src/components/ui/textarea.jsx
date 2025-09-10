import * as React from "react";

const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={
        "flex w-full rounded-md border border-gray-300  py-2 text-sm " +
        "placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
        "disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px] " +
        className
      }
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
