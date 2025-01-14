import Text from "@/components/text";
import images from "@/constant/images";
import BookButton from "./book-button";

export default function JumbotronSection() {
  return (
    <div className="relative flex flex-col justify-end overflow-hidden aspect-[8/5] px-[16px] py-[16px] sm:px-[24px] sm:py-[24px] md:px-[32px] md:py-[32px] lg:px-[57px] lg:py-[64px] bg-gradient-to-b from-transparent to-[#432D1C99] text-[#F4F4F4] gap-6">
      <img
        src={images.jumbotron}
        className="absolute inset-0 -z-10 w-full h-full object-top"
        alt="Jumbotron Background"
        fetchPriority="low"
        loading="lazy"
      />
      <Text variant="pageHeading" className="max-w-[856px]">
        Unveil Your Best Self with Cosmedix Clinics’ Expert Care and
        Cutting-Edge Treatments
      </Text>
      <BookButton variant="secondary" />
    </div>
  );
}
