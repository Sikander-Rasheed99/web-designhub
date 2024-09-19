// Imports Components
import Image from "next/image";
import Link from "next/link";
// Import Images
import hover from "media/portfolios/hover.png";
import arrow from "media/portfolios/arrow.svg";

const Portfolios = ({ content }) => {
    const { title, desc, images, theme } = content;
    return (
        <section>
            <div className={`${theme === "light" ? "bg-[#F5F5F5]" : "bg-[#0F2847]"} py-10 md:py-20`}>
                <div className="container">
                    <div className="flex">
                        <div className="basis-full">
                            <h2 className={`text-2xl sm:text-4xl xl:text-5xl font-megat ${theme === "light" ? "text-black" : "text-white"} text-center font-normal leading-none mb-3`}>
                                {title}
                            </h2>
                            <p className={`text-base ${theme === "light" ? "text-black" : "text-white"} text-center font-normal mb-10`}
                                dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br className='hidden lg:block' />") }} />
                            <div className="flex gap-x-5 flex-wrap md:flex-nowrap">
                                <div className="basis-full md:basis-6/12">
                                    <div className="group/image hover:cursor-pointer relative z-10">
                                        <Image src={images[0]} alt="porfolios" className="h-[200px] xl:h-auto object-cover rounded-xl" />
                                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl">
                                            {/* <Image src={hover} alt="hover" className="w-6/12" />
                                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-2 z-30">
                                                <Image src={arrow} alt={arrow} />
                                                <Link href="/" className="text-lg xl:text-3xl font-normal leading-none text-white">Logo</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="group/image hover:cursor-pointer relative z-10 mt-5 mb-5">
                                        <Image src={images[1]} alt="porfolios" className="h-[300px] xl:h-auto object-cover rounded-xl" />
                                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl">
                                            {/* <Image src={hover} alt="hover" className="w-6/12" />
                                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-2 z-30">
                                                <Image src={arrow} alt={arrow} />
                                                <Link href="/" className="text-lg xl:text-3xl font-normal leading-none text-white">Brands Color</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="group/image hover:cursor-pointer relative z-10 mb-5 md:mb-0">
                                        <Image src={images[2]} alt="porfolios" className="h-[200px] xl:h-auto object-cover rounded-xl" />
                                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl">
                                            {/* <Image src={hover} alt="hover" className="w-[45%]" />
                                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-2 z-30">
                                                <Image src={arrow} alt={arrow} />
                                                <Link href="/" className="text-lg xl:text-3xl font-normal leading-none text-white">Animations</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-full md:basis-6/12">
                                    <div className="group/image hover:cursor-pointer relative z-10 mb-5">
                                        <Image src={images[3]} alt="porfolios" className="h-[360px] xl:h-auto object-cover rounded-xl" />
                                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl">
                                            {/* <Image src={hover} alt="hover" className="w-6/12" />
                                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-2 z-30">
                                                <Image src={arrow} alt={arrow} />
                                                <Link href="/" className="text-lg xl:text-3xl font-normal leading-none text-white">UI/UX</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="group/image hover:cursor-pointer relative z-10">
                                        <Image src={images[4]} alt="porfolios" className="h-[360px] xl:h-auto object-cover rounded-xl" />
                                        <div className="opacity-0 flex items-center justify-center absolute z-20 top-0 right-0 left-0 bottom-0 group-hover/image:opacity-100 group-hover/image:bg-[#0f284773] rounded-xl">
                                            {/* <Image src={hover} alt="hover" className="w-6/12" />
                                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-2 z-30">
                                                <Image src={arrow} alt={arrow} />
                                                <Link href="/" className="text-lg xl:text-3xl font-normal leading-none text-white">Brandings</Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolios;