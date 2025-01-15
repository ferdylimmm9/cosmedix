import Text from "@/components/text";
import TestimonialItem, { TestimonialItemType } from "./testimonial-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import sectionPadding from "../../../constant/section-padding";

const testimonialItems: TestimonialItemType[] = [
  {
    company: "Company Name",
    description:
      "Velit est minim officia fugiat labore ex proident dolor pariatur. Est voluptate sint proident qui ut ut consequat dolore mollit qui ullamco veniam. Exercitation est consectetur elit reprehenderit eiusmod officia exercitation duis occaecat amet cupidatat ea voluptate voluptate. Eu anim reprehenderit enim proident ullamco culpa fugiat dolore voluptate nostrud voluptate nulla Lorem et. Sunt et laborum ipsum esse excepteur minim qui reprehenderit minim tempor voluptate ipsum veniam nulla. Sit consectetur fugiat eiusmod non laborum eu sit commodo labore ad labore deserunt reprehenderit. Aliqua quis do incididunt elit occaecat magna duis anim.",
    name: "Name Surname",
    position: "Position",
  },
  {
    company: "Company Name",
    description:
      "Velit est minim officia fugiat labore ex proident dolor pariatur. Est voluptate sint proident qui ut ut consequat dolore mollit qui ullamco veniam. Exercitation est consectetur elit reprehenderit eiusmod officia exercitation duis occaecat amet cupidatat ea voluptate voluptate. Eu anim reprehenderit enim proident ullamco culpa fugiat dolore voluptate nostrud voluptate nulla Lorem et. Sunt et laborum ipsum esse excepteur minim qui reprehenderit minim tempor voluptate ipsum veniam nulla. Sit consectetur fugiat eiusmod non laborum eu sit commodo labore ad labore deserunt reprehenderit. Aliqua quis do incididunt elit occaecat magna duis anim.",
    name: "Name Surname",
    position: "Position",
  },

  {
    company: "Company Name",
    description:
      "Velit est minim officia fugiat labore ex proident dolor pariatur. Est voluptate sint proident qui ut ut consequat dolore mollit qui ullamco veniam. Exercitation est consectetur elit reprehenderit eiusmod officia exercitation duis occaecat amet cupidatat ea voluptate voluptate. Eu anim reprehenderit enim proident ullamco culpa fugiat dolore voluptate nostrud voluptate nulla Lorem et. Sunt et laborum ipsum esse excepteur minim qui reprehenderit minim tempor voluptate ipsum veniam nulla. Sit consectetur fugiat eiusmod non laborum eu sit commodo labore ad labore deserunt reprehenderit. Aliqua quis do incididunt elit occaecat magna duis anim.",
    name: "Name Surname",
    position: "Position",
  },
];

export default function TestimonialSection() {
  return (
    <div
      className={`aspect-auto lg:aspect-[2.3/1] bg-[#7D614B] text-white ${sectionPadding.x} ${sectionPadding.y} flex flex-col gap-[60px] shrink-0`}
    >
      <Text variant="pageHeading" className="text-center">
        Don’t just take our word for it
      </Text>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        centeredSlides
        loop
        grabCursor
        modules={[Pagination]}
        pagination
        style={
          {
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#CCCCCC",
            maxWidth: "100dvw",
          } as React.CSSProperties
        }
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          480: {
            spaceBetween: 36,
          },
        }}
      >
        {testimonialItems.map((item, index) => {
          return (
            <SwiperSlide key={index} style={{ width: "fit-content" }}>
              <TestimonialItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
