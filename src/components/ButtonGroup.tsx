import { useState } from "react";
import { ButtonIcon } from "./buttons/ButtonIcon";

export type ButtonData = {
  iconSrc: string;
  iconAlt?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export type ButtonGroupProps = {
  code: string;
  strategyName: string;
};

export const ButtonGroup = ({ code, strategyName }: ButtonGroupProps) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    console.log("clicked");
    navigator.clipboard
      .writeText(code)
      .then(() => setCopied(!copied))
      .catch(err => console.error("Failed to copy: ", err));
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${strategyName}.sol`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const actionButtons: ButtonData[] = [
    {
      iconSrc: "/copyIcon.svg",
      iconAlt: "Copy to clipboard",
      text: copied ? "Copied!" : "Copy to clipboard",
      onClick: copyToClipboard,
    },
    {
      iconSrc: "/downloadIcon.svg",
      iconAlt: "Download",
      text: "Download",
      onClick: downloadFile,
    },
    // {
    //   iconSrc: "/remixIcon.svg",
    //   iconAlt: "Remix",
    //   text: "Open in Remix",
    //   onClick: openInRemix,
    // },
  ];
  return (
    <div className="flex items-center gap-2 shrink-0">
      {actionButtons.map((button, index) => (
        <ButtonIcon
          key={index}
          iconSrc={button.iconSrc}
          iconAlt={button.iconAlt}
          disabled={button.disabled}
          onClick={button.onClick}>
          {button.text}
        </ButtonIcon>
      ))}
    </div>
  );
};
