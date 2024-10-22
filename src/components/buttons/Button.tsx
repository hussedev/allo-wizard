import { PropsWithChildren } from "react";

export const Button = ({
  onClick,
  disabled,
  children,
  className,
}: PropsWithChildren<{
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}>) => {
  return (
    <button
      className={`rounded-md px-3 py-2 bg-[#f9fafb] border border-[#d8dbe2] text-[#2c374b] cursor-pointer hover:bg-[#eff1f3] active:bg-[#eff1f3] disabled:text-[#818998] text-[14px]/[18px] font-bold ${className}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};
