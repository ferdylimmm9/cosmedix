import images from "@/constant/images";
import BookButton from "@/modules/home/components/book-button";

export default function Header() {
  return (
    <div
      className={`sticky top-0 flex h-[100px] max-h-[100px] items-center justify-between bg-[#F4F4F4] px-[25px] z-20 overflow-hidden`}
    >
      <img
        src={images.cosmedixLogoHeader}
        className="h-[50px] max-h-[50px]"
        alt="Cosmedix Logo"
        fetchPriority="low"
        loading="lazy"
      />
      <BookButton />
    </div>
  );
}
