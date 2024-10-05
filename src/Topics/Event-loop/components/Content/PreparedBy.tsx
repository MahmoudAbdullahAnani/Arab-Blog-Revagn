import React from "react";

export default function PreparedBy({
  content,
  customStyle,
}: {
  content: string;
  customStyle?: string;
}) {
  return <p className={`  ${customStyle}`}>{content}</p>;
}
