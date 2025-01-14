import Text from "@/components/text";
import images from "@/constant/images";
import BookButton from "./book-button";

export default function BookingSection() {
  return (
    <div className="relative w-screen max-w-screen overflow-hidden bg-gradient-to-l from-transparent to-black/40 text-white aspect-[3/2]  lg:aspect-[3.08/1] px-[16px] py-[16px] sm:px-[24px] sm:py-[24px] md:px-[32px] md:py-[32px] lg:px-[57px] lg:py-[64px] flex flex-col gap-6 justify-center">
      <Text variant="pageHeading" className="text-white">
        Heading goes here
      </Text>
      <Text className="max-w-[612px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </Text>
      <BookButton variant="secondary" />
      <img
        src={images.footer}
        className="absolute inset-0 -z-10 w-full object-cover object-top"
        alt="Footer Background"
        fetchPriority="low"
        loading="lazy"
      />
    </div>
  );
}
