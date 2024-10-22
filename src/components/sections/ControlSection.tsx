import React, { PropsWithChildren } from "react";

interface ControlSectionProps {
  title: string;
  isFirst?: boolean;
}

export const ControlSection = ({
  title,
  children,
  isFirst,
}: PropsWithChildren<ControlSectionProps>) => {
  return (
    <section
      className={`flex flex-col ${
        !isFirst ? "border-t border-gray-3 pt-size-4 mt-size-4" : ""
      }`}>
      <h1 className="mt-0 mb-0 uppercase font-small-caps text-text-small text-gray-4 font-semibold">
        {title}
      </h1>
      {children}
    </section>
  );
};
