import React from "react";
import { TGating, useControls } from "../../contexts/Controls";
import { CheckboxSection } from "./CheckboxSection";

const checkboxes: {
  label: TGating;
  displayName: string;
}[] = [
  {
    label: "nft",
    displayName: "NFT Gated",
  },
  {
    label: "eas",
    displayName: "EAS Gated",
  },
  {
    label: "token",
    displayName: "Token Gated",
  },
];

export const GatingSection = () => {
  const { gating, toggleGating } = useControls();
  return (
    <CheckboxSection
      title="features"
      checkboxes={checkboxes}
      values={gating}
      onChange={toggleGating}
    />
  );
};
