import React from "react";

export function Select({ children, className, ...props }) {
  return (
    <select
      className={`w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children, ...props }) {
  return (
    <div className="relative">
      <select
        className="w-full px-3 py-2 border rounded-xl appearance-none focus:ring-2 focus:ring-blue-500"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export function SelectValue({ value }) {
  return <span>{value}</span>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
