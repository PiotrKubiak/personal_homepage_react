import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/PiotrKubiak",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100006832847515",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/piotr-kubiak-1927a41bb",
        Icon: styleIcon(LinkedInIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/kubiakpiotr86/",
        Icon: styleIcon(InstagramIcon),
    },
]