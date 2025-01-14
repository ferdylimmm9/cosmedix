import Text from "@/components/text";

interface TestimonialItemProps {
  data: TestimonialItemType;
}
export type TestimonialItemType = {
  description: string;
  name: string;
  position: string;
  company: string;
};

export default function TestimonialItem(props: TestimonialItemProps) {
  const { data } = props;
  return (
    <div className="flex-shrink-0 w-full max-w-[320px] md:max-w-[540px] overflow-visible">
      <Text variant="body" className="text-center">
        {data.description}
      </Text>
      <Text variant="titleMd" className="text-center mt-8">
        {data.name}
      </Text>
      <Text variant="body" className="text-center">
        {[data.position, data.company].filter(Boolean).join(", ")}
      </Text>
    </div>
  );
}
