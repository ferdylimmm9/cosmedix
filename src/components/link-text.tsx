import { ColorType } from "@/constant/color";
import { TypographyVariantType } from "@/constant/typography";
import useTextVariantGenerator from "@/hooks/use-text-variant-generator";
import Link from "next/link";

interface LinkTextProps extends React.ComponentProps<typeof Link> {
  type: "default";
  variant?: TypographyVariantType;
  color?: ColorType;
}

interface OutsideLinkProps extends React.ComponentProps<"a"> {
  type: "outside";
  variant?: TypographyVariantType;
  color?: ColorType;
}

export default function LinkText(props: LinkTextProps | OutsideLinkProps) {
  const { variant = "menu", color = "F4F4F4" } = props;
  const classname = useTextVariantGenerator(variant, color, props.className);

  if (props.type === "default") {
    return <Link {...props} className={classname} />;
  } else if (props.type === "outside") {
    return <a {...props} className={classname} />;
  }
}
