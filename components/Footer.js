import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoMediumSquare } from "react-icons/bi";

const footer_data = [
    {
        "name": "Linkedin",
        "href": "https://www.linkedin.com/in/rakaarfi/",
        "img": FaLinkedin,
        "color": "transition-all hover:scale-110 duration-150 h-[50%] w-[50%] hover:text-blue-500"
    },
    {
        "name": "Telegram",
        "href": "https://telegram.me/rakaarfi",
        "img": FaTelegram,
        "color": "transition-all hover:scale-110 duration-150 h-[50%] w-[50%] hover:text-[#24A1DE]"
    },
    {
        "name": "Instagram",
        "href": "https://instagram.com/rakaarfi",
        "img": FaInstagram,
        "color": "transition-all hover:scale-110 duration-150 h-[50%] w-[50%] hover:text-[#E1306C]"
    },
    {
        "name": "X",
        "href": "https://x.com/rakaarfi",
        "img": FaSquareXTwitter,
        "color": "transition-all hover:scale-110 duration-150 h-[50%] w-[50%] hover:text-[#000000]"
    },
    {
        "name": "Github",
        "href": "https://github.com/rakaarfi",
        "img": FaGithub,
        "color": "transition-all hover:scale-110 duration-150 h-[50%] w-[50%] hover:text-[#000000]"
    },
    {
        "name": "Medium",
        "href": "https://medium.com/@rakaarfi",
        "img": BiLogoMediumSquare,
        "color": "transition-all hover:scale-110 duration-150 h-[60%] w-[60%] hover:text-[#000000]"
    },
    // {   
    //     "name": "Email",
    //     "href": "mailto:0oWt9@example.com",
    //     "img": MdOutlineEmail,
    //     "color": "transition-all hover:scale-110 duration-150 h-[50%] w-[50%] hover:text-[#000000]"
    // }
]

export default function Footer({}) {

    return (
        <div className="flex flex-row items-center">
            {footer_data.map((link, i) => (
            <a key= {i} href={link.href} target="_blank" className="flex flex-col items-center ">
                <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
                    <link.img
                        className={link.color}
                        style={{
                            transition: 'transform 0.2s ease-in-out'
                        }}
                    />
                </span>
                <span className="sr-only">{link.name}</span>
            </a>
            ))}
        </div>
    );
}
