import React from "react";

interface IconButtonProps extends React.ComponentProps<"button"> {
  src: string;
  variant?: "secondary" | "white";
}

export default function IconButton(props: IconButtonProps) {
  const { variant = "secondary", src } = props;

  const className = React.useMemo(() => {
    const classNames = [props.className, "w-[24px] h-[24px] rounded-full"];
    switch (variant) {
      case "secondary":
        classNames.push("bg-transparent text-white border-2 border-white");

        break;
      case "white":
        classNames.push("bg-white");

        break;
    }

    return classNames.filter(Boolean).join(" ");
  }, [props.className, variant]);

  return (
    <button {...props}>
      <img src={src} className={className} fetchPriority="low" loading="lazy" alt='icon-button'/>
    </button>
  );
}
