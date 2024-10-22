import Image from "next/image";
import { Button } from "./Button";
import { PropsWithChildren } from "react";

export const ButtonIcon = ({
  onClick,
  disabled,
  iconSrc,
  iconAlt,
  children,
}: {
  onClick?: () => void;
  disabled?: boolean;
  iconSrc: string;
  iconAlt?: string;
  children?: string;
}) => {
  return (
    <Button
      className="flex items-center gap-2"
      onClick={onClick}
      disabled={disabled}>
      <Image src={iconSrc} alt={iconAlt} width={14} height={14} />
      <span className="hidden md:inline">{children}</span>{" "}
    </Button>
  );
};
