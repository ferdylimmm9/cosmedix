import Text from "@/components/text";

interface TreatmentItemProps {
  data: TreatmentItemType;
  className?: string;
}

export type TreatmentItemType = {
  description: string;
  image: string;
  order: string;
};

export default function TreatmentItem(props: TreatmentItemProps) {
  const { data } = props;
  return (
    <div className={`aspect-[1.5/1] md:aspect-[1.2/1] lg:aspect-[669/482] rounded-bl-[32px] md:rounded-bl-[100px] border-y-[1px] border-l-[1px] max-w-[200px] sm:max-w-[480px] lg:max-w-[669px] flex-shrink-0 p-[16px] md:p-[60px] border-[#434343] relative flex flex-col justify-between ${props.className}`}
    >
      <Text variant="bodyLg">{data.description}</Text>
      <img
        src={data.image}
        className="aspect-[1.23/1] max-w-[90px] sm:max-w-[180px] md:max-w-[240px] lg:max-w-[288.59px]  object-cover rounded-[24px] absolute z-[-1] bottom-[32px] right-[32px]"
        alt="image"
        fetchPriority="low"
        loading="lazy"
      />
      <Text variant="bodyLg">{data.order}</Text>
    </div>
  );
}
