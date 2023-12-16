import { FooterSectionProps } from "./FooterSection.types";
import { FooterSectionLink } from "./FooterSectionLink";

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div className="flex flex-col ps-2">
      <span className="text-light font-bold p-1 pb-3">{title}</span>
      {links?.map((link, index) => (
        <FooterSectionLink key={index} label={link.label} link={link.link} />
      ))}
    </div>
  );
};
