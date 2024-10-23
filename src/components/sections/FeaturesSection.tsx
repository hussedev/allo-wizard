import React from "react";
import { TFeatures, useControls } from "../../contexts/Controls";
import { CheckboxSection } from "./CheckboxSection";

const checkboxes: {
  label: TFeatures;
  displayName: string;
}[] = [
  {
    label: "registrable",
    displayName: "Registrable",
  },
  {
    label: "allocatable",
    displayName: "Allocatable",
  },
  {
    label: "fromList",
    displayName: "From list",
  },
  {
    label: "milestones",
    displayName: "Milestones",
  },
];

export const FeaturesSection = () => {
  const { features, toggleFeature } = useControls();
  return (
    <CheckboxSection
      title="features"
      checkboxes={checkboxes}
      values={features}
      onChange={toggleFeature}
    />
  );
};
