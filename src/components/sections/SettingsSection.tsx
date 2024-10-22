import React from "react";
import { ControlSection } from "./ControlSection";
import { useControls } from "@/contexts/Controls";

export const SettingsSection = () => {
  const {
    settings: { strategyName },
    setStrategyName,
  } = useControls();
  return (
    <ControlSection isFirst title="Settings">
      <label className="flex flex-col">
        <span className="text-text-small mt-size-1">Strategy Name</span>
        <input
          className="w-full"
          value={strategyName}
          onChange={e => setStrategyName(e.target.value)}
        />
      </label>
    </ControlSection>
  );
};
