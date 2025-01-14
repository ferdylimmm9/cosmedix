import icons from "@/constant/icons";

const socialMedias = [
  {
    alt: "facebook",
    icon: icons.facebook,
    url: "https://www.facebook.com/cosmedixclinics",
  },
  {
    alt: "instagram",
    icon: icons.instagram,
    url: "https://www.instagram.com/cosmedixclinics/",
  },
  {
    alt: "tiktok",
    icon: icons.tiktok,
    url: "https://www.tiktok.com/@cosmedixclinics",
  },
  {
    alt: "youtube",
    icon: icons.youtube,
    url: "https://youtube.com/cosmedix_clinics",
  },
];

export default function FooterSocialMediaSection() {
  return (
    <div className="flex flex-row flex-wrap gap-[24px]">
      {socialMedias.map((item) => {
        return (
          <a href={item.url} target="_blank" key={item.url}>
            <img
              src={item.icon}
              fetchPriority="low"
              loading="lazy"
              alt={item.alt}
            />
          </a>
        );
      })}
    </div>
  );
}
