import images from "@/constant/images";
import FooterInformationSection from "./footer-information-section";
import FooterMenuSection from "./footer-menu-section";
import FooterSocialMediaSection from "./footer-social-media-section";
import Text from "@/components/text";
import sectionPadding from "@/constant/section-padding";

export function Footer() {
  return (
    <div
      className={`flex flex-col lg:flex-row bg-[#434343] text-white ${sectionPadding.x} ${sectionPadding.y}`}
    >
      <div className="flex-2">
        <img
          className="h-[64px] md:h-[94px] mb-[32px] lg:mb-[60px]"
          src={images.cosmedixLogoFooter}
          alt="Cosmedix Logo"
          fetchPriority="low"
          loading="lazy"
        />
        <FooterMenuSection />
      </div>
      <div className="flex-2">
        <FooterInformationSection />
      </div>
      <div className="flex flex-col justify-center items-center gap-[32px] lg:hidden">
        <FooterSocialMediaSection />
        <Text>&copy; {new Date().getFullYear()} - COPYRIGHT</Text>
      </div>
    </div>
  );
}
