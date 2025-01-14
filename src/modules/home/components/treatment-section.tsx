import images from "@/constant/images";
import TreatmentItem, { TreatmentItemType } from "./treatment-item";
import { Swiper, SwiperSlide } from "swiper/react";
import sectionPadding from "../../../constant/section-padding";

const treatments: TreatmentItemType[] = [
  {
    description:
      "Specialise in non-surgical corrective and cosmetic treatments",
    image: images.treatment01,
    order: "1",
  },
  {
    description: "Option between In-Clinic and Virtual Consultation",
    image: images.treatment02,
    order: "2",
  },
];

export default function TreatmentSection() {
  return (
    <div className={`m-auto ${sectionPadding.x} ${sectionPadding.y}`}>
      <Swiper slidesPerView="auto">
        {treatments.map((item, index) => {
          return (
            <SwiperSlide key={index} style={{ width: "fit-content" }}>
              <TreatmentItem
                data={item}
                key={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
