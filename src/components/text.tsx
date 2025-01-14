import { ColorType } from "@/constant/color";
import { TypographyVariantType } from "@/constant/typography";
import useTextVariantGenerator from "@/hooks/use-text-variant-generator";
import React from "react";

export interface TextProps extends React.ComponentProps<"p"> {
  variant?: TypographyVariantType;
  color?: ColorType;
}

export default function Text(props: TextProps) {
  const { variant = "body", color, ...rest } = props;
  const classNames = useTextVariantGenerator(variant, color, rest.className);
  return <p {...rest} className={classNames} />;
}
