import Button, { ButtonProps } from "@/components/button";

export default function BookButton(props: ButtonProps) {
  return (
    <Button {...props} className="max-w-[140px]">
      Book Now
    </Button>
  );
}
