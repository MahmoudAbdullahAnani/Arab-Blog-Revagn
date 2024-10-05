import React from "react";

export default function TopicName({
  name,
  customStyle,
}: {
  name: string;
  customStyle?: string;
}) {
  return <h1 className={` font-bold ${customStyle}`}>{name}</h1>;
}
