"use client";

import React, { useEffect, useState } from "react";
import { SolidityCodeBlock } from "@/components/SolidityCodeBlock";
import { ButtonGroup } from "@/components/ButtonGroup";
import { CheckboxSection } from "@/components/sections/CheckboxSection";
import { SettingsSection } from "@/components/sections/SettingsSection";
import { ControlsProvider, useControls } from "@/contexts/Controls";

function AlloStrategyGenerator() {
  const [generatedCode, setGeneratedCode] = useState("");

  const {
    settings: { strategyName },
  } = useControls();

  const generateContract = () => {
    const code = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ${strategyName} {

    // Add your contract logic here
}
    `.trim();

    setGeneratedCode(code);
  };

  useEffect(() => {
    generateContract();
  }, [strategyName]);

  return (
    <div className="m-4 min-w-[512px] flex flex-col gap-4 p-4 bg-gray-1 border border-gray-2 rounded-[10px] shadow-lg">
      <div className="flex justify-between items-center">
        <div></div>{" "}
        <ButtonGroup code={generatedCode} strategyName={strategyName} />
      </div>
      <div className="flex flex-row gap-4 grow">
        <div className="bg-white p-size-4 rounded-[5px] shadow-custom w-64 flex flex-col shrink-0 h-[calc(100vh-84px)] overflow-auto">
          <SettingsSection />
          <CheckboxSection
            title="Features"
            checkboxes={[
              {
                label: "Pausable",
                checked: false,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e.target.checked);
                },
              },
            ]}
          />
        </div>

        <div className="flex flex-col grow overflow-auto h-[calc(100vh-84px)]">
          <SolidityCodeBlock code={generatedCode} />
        </div>
      </div>
    </div>
  );
}

export default () => (
  <ControlsProvider>
    <AlloStrategyGenerator />
  </ControlsProvider>
);
