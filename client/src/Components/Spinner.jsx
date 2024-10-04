import React from "react";

export default function Spinner({ height, width, border_width, border_color }) {
  return (
    <div
      className={`h-${height} w-${width} border-${border_width} rounded-full border-${border_color} border-r-transparent animate-spin opacity-50 mr-3`}
    ></div>
  );
}
