import React from "react";
import { CheckboxSection } from "./CheckboxSection";
import { TExternals, useControls } from "../../contexts/Controls";

const checkboxes: {
  label: TExternals;
  displayName: string;
}[] = [
  {
    label: "merkle",
    displayName: "OZ Merkle",
  },
  {
    label: "superfluid",
    displayName: "Superfluid",
  },
];

export const ExternalsSection = () => {
  const { externals, toggleExternals } = useControls();

  return (
    <CheckboxSection
      title="external"
      checkboxes={checkboxes}
      values={externals}
      onChange={toggleExternals}
    />
  );
};
