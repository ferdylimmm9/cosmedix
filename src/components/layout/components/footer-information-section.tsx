import Text, { TextProps } from "@/components/text";
import company from "@/constant/company";
import FooterSocialMediaSection from "./footer-social-media-section";

const informations: {
  label: string;
  content: string;
  variant: TextProps["variant"];
}[] = [
  {
    label: "CONTACT US",
    content: company.contact,
    variant: "titleMd",
  },
  {
    label: "ADDRESS",
    content: company.address,
    variant: "body",
  },
  {
    label: "EMAIL",
    content: company.email,
    variant: "body",
  },
  {
    label: "OPENING HOURS",
    content: company.workHour,
    variant: "titleMd",
  },
];

export default function FooterInformationSection() {
  return (
    <div className="grid w-full grid-cols-[auto] md:grid-cols-[auto_auto] gap-[16px] mt-[32px] md:mt-0">
      {informations.map((info) => (
        <div key={info.label}>
          <Text variant="tag">{info.label}</Text>
          <Text variant="body">{info.content}</Text>
        </div>
      ))}
      <div />
      <div className="hidden lg:block">
        <FooterSocialMediaSection />
      </div>
    </div>
  );
}
