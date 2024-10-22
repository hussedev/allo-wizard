"use client";

import React, { useState } from "react";
import { ControlSection } from "./ControlSection";
import { useControls } from "@/contexts/Controls";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const SettingsSection = () => {
  const [isEdited, setIsEdited] = useState(false);
  const {
    settings: { strategyName },
    setStrategyName,
  } = useControls();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEdited(true);
    setStrategyName(e.target.value);
  };

  return (
    <ControlSection isFirst title="Settings">
      <div className="flex flex-col gap-size-2 pt-size-4">
        {!!strategyName && <Label htmlFor="strategyName">Strategy Name</Label>}
        <Input
          error={isEdited && !strategyName}
          type="text"
          id="strategyName"
          placeholder="Strategy name"
          autoComplete="off"
          value={strategyName}
          onChange={handleChange}
        />
      </div>
    </ControlSection>
  );
};
