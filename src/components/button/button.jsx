"use client"
// Import Components
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Import Images
import liveChatIcon from "media/liveChatIcon.svg";

const Button = ({ text, icon, color, link, border, hover, rounded }) => {
    const router = usePathname();
    return (
        <Link className={`${color} inline-flex items-center gap-3 w-max pr-3.5 pl-3.5 h-12 ${router === "/website-design-develop-landing" ? "rounded-[100px]" : "rounded-md"} ${hover} ${border}`} href={link}>
            <span className="text-sm xl:text-lg font-medium">{text}</span>
            {icon ? <Image src={liveChatIcon} alt="liveChatIcon" /> : null}
        </Link>
    );
}

export default Button;