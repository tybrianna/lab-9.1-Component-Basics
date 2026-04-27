import React from "react";
import { AlertBoxProps } from "./types";

const alertStyles: Record<string, string> = {
  success: "bg-green-100 text-green-800 border-green-400",
  error: "bg-red-100 text-red-800 border-red-400",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
  info: "bg-blue-100 text-blue-800 border-blue-400",
};

const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children,
}) => {
  return (
    <div
      className={`border p-4 rounded-md flex justify-between items-start ${alertStyles[type]}`}
    >
      <div>
        <p className="font-medium">{message}</p>

        {/* Render children if provided */}
        {children && <div className="mt-2">{children}</div>}
      </div>

      {/* Only render close button if onClose exists */}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-sm font-bold hover:opacity-70"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default AlertBox;