import React from "react";
import { ControlSection } from "./ControlSection";

interface CheckboxProps<T extends string> {
  label: T;
  displayName: string;
  checked?: boolean;
  onChange?: () => void;
}

interface CheckboxSectionProps<T extends string> {
  title: string;
  checkboxes: CheckboxProps<T>[];
  values: Record<T, boolean>;
  onChange: (value: T) => void;
  isFirst?: boolean;
}

export const CheckboxSection = <T extends string>({
  title,
  checkboxes,
  values,
  onChange,
  isFirst,
}: CheckboxSectionProps<T>) => {
  return (
    <ControlSection title={title} isFirst={isFirst}>
      <div className="flex flex-col p-size-2">
        {checkboxes.map((checkbox, index) => (
          <div key={index} className="flex items-center p-size-1">
            <input
              type="checkbox"
              className="mr-size-2"
              checked={values[checkbox.label]}
              onChange={() => onChange(checkbox.label)}
            />
            <label>{checkbox.displayName}</label>
          </div>
        ))}
      </div>
    </ControlSection>
  );
};
