// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/creative-copywriting/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";
// Import Images
import banner from "media/creative-copywriting/hero/deskGirl.png";
import smallBannerImage from "media/creative-copywriting/smallBanner.png";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "creativeCopywriting",
        subtitle: "Top Copywriters For Hire",
        title: "Dominate Your Market with Our Creative Copywriting Company",
        desc: "Web Design Hub shapes your words and ideas into perfectly persuasive tales and narratives. As a highly competitive copywriting company, we grab the attention of your audience, driving positive outcomes. Our team comprises of experienced;",
        points: ["SEO Copywriters", "Website Copywriters", "Technical Copywriters", "Landing Page Copywriters"],
        banner,
        bg: "__creativeCopywritingHeroGradientBg",
        isForm: true,
        btnBg: "bg-[#768DF1]",
        btnBorder: "border-[#768DF1]",
        btnHover: "hover:bg-[#768DF1]"
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "creativeCopywriting",
        title: "Weave Your Digital Dreams with Our Professional Copywriters",
        desc: "Top copywriters at Web Design Hub write the best content distinguishing your business from others. Our strategic finesse helps create the web presence everyone wishes for.",
        img: smallBannerImage,
        bgColor: "__creativeCopywritingHeroGradientBg",
        btnBg: "bg-[#768DF1]",
        btnBorder: "border-[#768DF1]",
        btnHover: "hover:bg-[#768DF1]",
        theme: "dark"
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 8,
        name: "Creative Copy Writing"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk.",
        desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles."
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "I'm pleased with the authoring assistance I got from Web Design Hub. They immediately demonstrated a profound grasp of my business and goals when I got in touch with them. The content that they provided was not only interesting, but it also precisely reflected the tone and values of my brand. They exceeded my expectations and improved the way I communicated with my target audience. You need to look no further than Web Design Hub for excellent copywriting services!",
            name: "Emily Thompson",
            jd: false,
            profile: "/creative-copywriting/reviews/1.png"
        },
        {
            message: "Our top-secret tool for creating intriguing material is Web Design Hub. Our brand's soul was brilliantly captured by their copywriters, who translated it into the language that connects with our target audience. Their work has improved our brand's reputation and increased our online visibility, from website text to social media postings. They certainly deserve praise for their commitment to quality. This copywriting agency is a wonderful copywriting partner, and we appreciate them",
            name: "Karen Roberts",
            jd: false,
            profile: "/creative-copywriting/reviews/2.png"
        },
        {
            message: "The copywriting services offered by Web Design Hub are priceless. Their team has a special aptitude for transforming concepts into compelling and interesting material. They regularly provide outstanding outcomes, whether they are building engaging landing sites or writing catchy headlines. Since joining forces with Web Design Hub, we've noticed a huge improvement in both our conversion rates and consumer engagement. They truly provide value to our company",
            name: "Laura Turner",
            jd: false,
            profile: "/creative-copywriting/reviews/3.png"
        },

    ]
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Packages content={packages} />
                <Reviews content={reviews} />
                <Weare />
                <Contact />
                <Letstalk content={letstalk} />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org/",
                            "@type": "Product",
                            "name": "Creative Copywriting Company",
                            "description": "WebDesignHub offers expert creative copywriting services, delivering persuasive and captivating content that engages audiences and drives brand success.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "450"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;