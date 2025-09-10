import React, { useState } from "react";

export function Accordion({ children }) {
  return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ value, children }) {
  return <div className="border rounded-xl">{children}</div>;
}

export function AccordionTrigger({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left px-4 py-2 font-medium flex justify-between items-center"
    >
      {children}
      <span>{open ? "−" : "+"}</span>
    </button>
  );
}

export function AccordionContent({ children }) {
  return <div className="px-4 py-2 text-gray-700">{children}</div>;
}
