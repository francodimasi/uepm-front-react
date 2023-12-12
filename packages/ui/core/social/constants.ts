import { SocialNetwork } from "./Social.types";
import facebook from "ui/assets/icons/social/facebook-light.svg";
import instagram from "ui/assets/icons/social/instagram-light.svg";
import linkedin from "ui/assets/icons/social/linkedin-light.svg";

export const DEFAULT_NETWORKS: SocialNetwork[] = [
  {
    icon: linkedin,
    alt: "Linkedin",
    link: "https://www.linkedin.com/company/unensayoparami/mycompany/",
  },
  {
    icon: instagram,
    alt: "Instagram",
    link: "https://www.instagram.com/unensayoparami",
  },
  {
    icon: facebook,
    alt: "Facebook",
    link: "https://www.facebook.com/unensayoparami.org",
  },
];
