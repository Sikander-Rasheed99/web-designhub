// Components
import Image from "next/image";
import Link from "next/link";
import CTA from "./cta";

const Header = () => {
    return (
        <header>
            <div className="py-[25px] bg-[#0F072F]">
                <div className="container">
                    <nav className="flex items-center">
                        <Link href="/website-design-develop-usa-landing" className="m-auto sm:m-0">
                            <Image src="/logo.svg" alt="logo" width={212} height={51} />
                        </Link>
                        <div className="hidden sm:flex items-center gap-3 ml-auto">
                            <CTA
                                text="Start Live Chat"
                                href="javascript:$zopim.livechat.window.show();"
                                css="hover:bg-transparent border-[#F85F84]"
                                bg="bg-[#F85F84]"
                                icon="/liveChatIcon.svg"
                            />
                            <CTA
                                text="(855)888-8399"
                                href="tel:(855)888-8399"
                                css="hover:bg-[#F85F84] border-[#F85F84]"
                                bg="bg-transparent"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;