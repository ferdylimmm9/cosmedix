import images from "@/constant/images";
import ConcernItem, { ConcernItemType } from "./concern-item";
import Text from "@/components/text";
import { Swiper, SwiperSlide } from "swiper/react";
import sectionPadding from "../../../constant/section-padding";
import { Navigation, Pagination } from "swiper/modules";

const concerns: ConcernItemType[] = [
  {
    label: "Facial Anti-Ageing",
    image: images.concern01,
  },
  {
    label: "Acne Scarring & Acne Clearance",
    image: images.concern02,
  },
  {
    label: "Melasma, Pigmentation & Freckles",
    image: images.concern03,
  },
  {
    label: "Rosacea",
    image: images.concern04,
  },
];

export default function ConcernSection() {
  return (
    <div className={sectionPadding.y}>
      <Text className={sectionPadding.x} variant="pageHeading">
        Concerns
      </Text>
      <Text
        className={`${sectionPadding.x} mb-[16px] sm:mb-[32px] md:mb-[64px] lg:mb-[80px]`}
        variant="body"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <div className="relative">
        <div
          id="containerForBullets"
          className="absolute bottom-[-16px] left-0 right-0"
          style={{}}
        />
        <Swiper
          spaceBetween={32}
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          loop
          grabCursor
          pagination
          breakpoints={{
            320: {
              centeredSlides: true,
              centeredSlidesBounds: true,
            },
            1024: {
              centeredSlides: false,
              centeredSlidesBounds: true,
            },
          }}
          style={
            {
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-color": "#434343",
              "--swiper-pagination-bullet-inactive-color": "#CCCCCC",
            } as React.CSSProperties
          }
        >
          {concerns.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "fit-content" }}>
                <ConcernItem data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
