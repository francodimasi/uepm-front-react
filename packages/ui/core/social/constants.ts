import facebookDark from "ui/assets/icons/social/facebook-dark.svg";
import instagramDark from "ui/assets/icons/social/instagram-dark.svg";
import linkedinDark from "ui/assets/icons/social/linkedin-dark.svg";
import facebookLight from "ui/assets/icons/social/facebook-light.svg";
import instagramLight from "ui/assets/icons/social/instagram-light.svg";
import linkedinLight from "ui/assets/icons/social/linkedin-light.svg";
import { SocialNetwork } from "./Social.types";

export type DefaultNetworks = {
  [key: string]: SocialNetwork[];
};

export const DEFAULT_NETWORKS: DefaultNetworks = {
  light: [
    {
      icon: linkedinLight,
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/unensayoparami/mycompany/",
    },
    {
      icon: instagramLight,
      alt: "Instagram",
      link: "https://www.instagram.com/unensayoparami",
    },
    {
      icon: facebookLight,
      alt: "Facebook",
      link: "https://www.facebook.com/unensayoparami.org",
    },
  ],
  dark: [
    {
      icon: linkedinDark,
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/unensayoparami/mycompany/",
    },
    {
      icon: instagramDark,
      alt: "Instagram",
      link: "https://www.instagram.com/unensayoparami",
    },
    {
      icon: facebookDark,
      alt: "Facebook",
      link: "https://www.facebook.com/unensayoparami.org",
    },
  ],
};
