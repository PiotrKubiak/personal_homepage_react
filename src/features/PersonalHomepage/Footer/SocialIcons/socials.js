import { styledIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/PiotrKubiak",
        Icon: styledIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "http://https://www.facebook.com/profile.php?id=100006832847515",
        Icon: styledIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "http://linkedin.com",
        Icon: styledIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "http://https://www.instagram.com/kubiakpiotr86/",
        Icon: styledIcon(InstagramIcon),
    },
]