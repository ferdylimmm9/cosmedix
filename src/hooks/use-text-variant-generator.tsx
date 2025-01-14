import colors, { ColorType } from "@/constant/color";
import { TypographyVariantType } from "@/constant/typography";
import React from "react";

export default function useTextVariantGenerator(
  variant: TypographyVariantType,
  color?: ColorType,
  className?: string
) {
  return React.useMemo(() => {
    const classNames = [className];

    switch (variant) {
      case "body":
        classNames.push(
          "text-[14px] font-[400] leading-[21px]", // Mobile
          "md:text-[18px] md:leading-[27px]" // Desktop
        );
        break;
      case "pageHeading":
        classNames.push(
          "text-[32px] font-[400] leading-[50px]", // Mobile
          "lg:text-[64px] md:leading-[76.8px]" // Desktop
        );
        break;
      case "bodyLg":
        classNames.push(
          "text-[24px] font-[500] leading-[48px]", // Mobile
          "lg:text-[47px] lg:leading-[57.6px]" // Desktop
        );
        break;
      case "titleMd":
        classNames.push(
          "text-[16px] font-[500] leading-[24px]", // Mobile
          "md:text-[24px] md:leading-[28.8px]" // Desktop
        );
        break;
      case "button":
        classNames.push(
          "text-[14px] font-[500] leading-[20px]", // Mobile
          "md:text-[16px] md:leading-[24px]" // Desktop
        );
        break;
      case "menu":
        classNames.push(
          "text-[20px] font-[500] leading-[33.6px]", // Mobile
          "md:text-[32px] md:leading-[44.8px]" // Desktop
        );
        break;
      case "tag":
        classNames.push(
          "text-[8px] font-[500] leading-[10px]", // Mobile
          "md:text-[10px] md:leading-[13px]" // Desktop
        );
        break;
    }

    if (typeof color === "string" && !!color) {
      classNames.push(`text-[${colors[color]}]`);
    }

    return classNames.filter(Boolean).join(" ");
  }, [className, color, variant]);
}
