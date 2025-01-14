import BookingSection from "./components/booking-section";
import ConcernSection from "./components/concern-section";
import JumbotronSection from "./components/jumbotron-section";
import TestimonialSection from "./components/testimonial-section";
import TreatmentSection from "./components/treatment-section";

export default function Home() {
  return (
    <>
      <JumbotronSection />
      <TreatmentSection />
      <ConcernSection />
      <TestimonialSection />
      <BookingSection />
    </>
  );
}
