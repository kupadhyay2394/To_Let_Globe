export function Card({ children, className }) {
  return <div className={`rounded-2xl shadow p-4 bg-white ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-2 font-semibold text-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="mt-4 border-t pt-2">{children}</div>;
}
