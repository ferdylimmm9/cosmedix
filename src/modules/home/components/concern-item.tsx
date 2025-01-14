import Text from "@/components/text";

interface ConcernSectionProps {
  data: ConcernItemType;
  className?: string;
}

export type ConcernItemType = { label: string; image: string };
export default function ConcernItem(props: ConcernSectionProps) {
  const { data } = props;
  return (
    <div
      className={`relative flex flex-col justify-end overflow-hidden rounded-[24px] bg-gradient-to-b from-transparent to-[#95796399] aspect-[52/77] w-[290px] sm:w-[380px] lg:w-[416px] flex-shrink-0 pl-[36px] pb-[31px] ${props.className}`}
    >
      <img
        src={data.image}
        className="absolute inset-0 z-[-1] w-full h-full object-cover object-[75%_50%]"
        alt="Background"
        fetchPriority="low"
        loading="lazy"
      />
      <Text variant="bodyLg" className={`text-[#F4F4F4] max-w-[80%]`}>
        {data.label}
      </Text>
    </div>
  );
}
