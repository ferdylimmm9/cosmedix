import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "white";
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", type = "button", ...rest } = props;
  const className = React.useMemo(() => {
    const classNames = [
      rest.className,
      "px-[24px] py-[12px] h-[48px] max-h-[48px] rounded-[100px] text-[16px] font-[500] leading-[24px]",
    ];
    switch (variant) {
      case "primary":
        classNames.push("bg-brown text-white");
        break;
      case "secondary":
        classNames.push("bg-transparent text-white border-2 border-white");
        break;
      case 'white':
        classNames.push('bg-white');
        break;
    }
    return classNames.filter(Boolean).join(" ");
  }, [rest.className, variant]);
  return <button {...rest} type={type} className={className} />;
}
