import LinkText from "@/components/link-text";
import Text from "@/components/text";
import menus from "@/constant/menus";

export default function FooterMenuSection() {
  return (
    <div className="flex flex-row flex-wrap gap-[8px] lg:gap-[24px]">
      {menus.map((item, index) => {
        return (
          <>
            {index !== 0 && (
              <Text variant="menu" className={`text-border-[#434343] opacity-[40%]`}>
                /
              </Text>
            )}
            <LinkText
              type="default"
              variant="menu"
              href={item.route}
              className="shrink-0"
            >
              {item.label}
            </LinkText>
          </>
        );
      })}
    </div>
  );
}
