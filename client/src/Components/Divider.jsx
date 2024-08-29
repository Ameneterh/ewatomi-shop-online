import React from "react";

export default function Divider(prop) {
  const color = prop ? prop.color : "slate-600";

  return <div className={`border-b-2 border-${color} w-full h-2 mt-10`}></div>;
}
