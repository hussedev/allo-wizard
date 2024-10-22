import React from "react";
import { ControlSection } from "./ControlSection";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckboxSectionProps {
  title: string;
  checkboxes: CheckboxProps[];
  isFirst?: boolean;
}

export const CheckboxSection = ({
  title,
  checkboxes,
  isFirst,
}: CheckboxSectionProps) => {
  return (
    <ControlSection title={title} isFirst={isFirst}>
      <div className="flex flex-col">
        {checkboxes.map((checkbox, index) => (
          <div key={index} className="flex items-center p-size-2">
            <input
              type="checkbox"
              className="mr-size-2"
              checked={checkbox.checked}
              onChange={checkbox.onChange}
            />
            <label>{checkbox.label}</label>
          </div>
        ))}
      </div>
    </ControlSection>
  );
};
