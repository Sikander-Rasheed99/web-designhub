// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import laptop from "media/website-development/services/laptop.png";

const Services = ({ content }) => {
  const { WebBanner } = content;
  return (
    <section>
      <div
        className={`bg-[#EBEBEB] py-10 ${WebBanner ? "lg:py-20" : "lg:py-[200px]"}`}
      >
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-base font-normal text-[#00B4FF]">
              Custom Website Development
            </span>
            <h2 className="font-megat font-normal text-3xl sm:text-4xl lg:text-5xl text-black mb-2">
              Building Custom Websites from Scratch.
            </h2>
            <p className="text-base text-black font-normal">
              In the digital age, your website is your brand's front door. At
              Web Design Hub, we're the architects of that door. We design and
              develop websites that don't just look good; they're SEO optimized,
              responsive and have the best user experience, all in one package.
            </p>
          </div>
          <Image src={laptop} alt="laptop" className="block m-auto" />
          <div className="flex items-center gap-3 justify-center mt-10 relative z-10">
            <Button
              text="Start Live Chat"
              icon={true}
              color="bg-[#283C3C] text-white"
              hover="hover:bg-[#000000]"
              link="javascript:$zopim.livechat.window.show();"
            />
            <Button
              text="(855) 888-8399"
              color="bg-transparent text-[#202020]"
              border="border-2 border-[#283C3C]"
              hover="hover:bg-[#283C3C] hover:text-white"
              link="tel:(855)888-8399"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
