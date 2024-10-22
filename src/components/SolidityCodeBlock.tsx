"use client";

import hljs from "@/lib/highlightjs";
import "highlight.js/styles/default.css";

import { useMemo } from "react";

export const SolidityCodeBlock = ({ code }: { code: string }) => {
  const formattedCode = useMemo(
    () => hljs.highlight(code, { language: "solidity" }).value,
    [code]
  );

  return (
    <pre className="flex flex-col shadow-custom grow basis-0 overflow-auto bg-gray-200 rounded-lg">
      <code
        className="grow overflow-auto p-4"
        dangerouslySetInnerHTML={{ __html: formattedCode }}
      />
    </pre>
  );
};
