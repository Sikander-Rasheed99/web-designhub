// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/website-development/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Portfolios from "@/components/portfolios/portfolios";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
// Import Images
import smallBannerImage from "media/website-development/smallBanner.png";
import portfolioOne from "media/logo-design/portfolios/one.png";
import portfolioTwo from "media/logo-design/portfolios/two.png";
import portfolioThree from "media/logo-design/portfolios/three.png";
import portfolioFour from "media/logo-design/portfolios/four.png";
import portfolioFive from "media/logo-design/portfolios/five.png";
import PopupAlert from "@/components/popup-alert/popup-alert";

const Page = () => {
  // Array for Hero Component Props
  const hero = {
    page: "websiteDevelopmentCompany",
    subtitle: "Website Design & Development",
    title: "100% Custom Websites By Top Website Development Company",
    desc: "Tired of generic websites that don't make an impact? Experience the difference with our top design and website development company where we uniquely represent your brand and drive results.",
    points: [
      "Optimized Performance",
      "Responsive Design",
      "Brand Consistency",
      "Search Engine Visibility",
    ],
    bg: "bg-[#0f1013]",
    video: "videos/websiteDevelopment.mp4",
    isForm: true,
    WebBanner: false,
    btnBg: "bg-[#283C3C]",
    btnBorder: "border-[#283C3C]",
    btnHover: "hover:bg-[#283C3C]",
  };
  // Array for Small Banner Component Props
  const smallbanner = {
    page: "websiteDevelopment",
    title:
      "Let us develop a responsive website to help you attract more visitors",
    desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
    img: smallBannerImage,
    bgColor: "bg-[#0f1013]",
    btnBg: "bg-[#283C3C]",
    btnBorder: "border-[#283C3C]",
    btnHover: "hover:bg-[#283C3C]",
    theme: "dark",
  };
  // Array for Portfolios Component Props
  const portfolios = {
    title: "Reliability Guaranteed At Our Web Development Company",
    desc: "Take a look at our web design and development projects. They're like examples of our work, showing how we bring ideas to life on the internet. ",
    images: [
      portfolioOne,
      portfolioTwo,
      portfolioThree,
      portfolioFour,
      portfolioFive,
    ],
    theme: "light",
  };
  // Array for Packages Component Props
  const packages = {
    subtitle: "Web Development Packages",
    title: "Budget-Friendly Website Development Company",
    desc: "Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.",
    key: 1,
    name: "Website Development",
  };
  // Array for Letstalk Component Props
  const letstalk = {
    title: "Design Consultation",
    desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!",
  };
  // Array for Reviews Component Props
  const reviews = [
    {
      message:
        "The experience of working with Web Design Hub has been wonderful. They have surpassed our expectations at every turn, starting with the initial consultation and ending with the launch. Their team's dedication to detail, originality, and technological expertise were essential to realizing our vision. Due to their dedication to quality, our website not only looks amazing but also runs without a hitch. Anyone looking for top-notch web development services should get in contact with them immediately.",
      name: "John Mitchell",
      jd: false,
      profile: "/website-development/reviews/1.png",
    },
    {
      message:
        "For years, Web Design Hub has been our dependable website development partner, and they never cease to wow us. It's amazing how well they can translate complicated concepts into web pages that are easy to use. The team's commitment to comprehending our brand and goals has produced websites that are an ideal representation of us. Their superb post-launch assistance makes them the ideal long-term partner. I am quite pleased with their services.",
      name: "Sarah Anderson",
      jd: false,
      profile: "/website-development/reviews/2.png",
    },
    {
      message:
        "Our website development agency is the best ally we discovered who actually cared about our success. Every project exhibits innovation, technical mastery, and attention to detail. The unique features and perfect operation of our website have increased user interaction and conversion rates. We appreciate their spirit of cooperation and persistent commitment to our objectives. Contact Web Design Hub and get yourself on a journey of success.",
      name: "Michael George",
      jd: false,
      profile: "/website-development/reviews/3.png",
    },
  ];
  return (
    <>
      <main>
        {/* <PopupAlert /> */}
        <Header />
        <Hero content={hero} />
        <Services content={hero} />
        <SmallBanner content={smallbanner} />
        <Portfolios content={portfolios} />
        <Packages content={packages} />
        <Reviews content={reviews} />
        <Weare />
        <Contact />
        <Letstalk content={letstalk} />
        <Footer />
        <Script id="general-schema" type="application/ld+json">
          {`
                        {
                            "@context": "http://schema.org",
                            "@type": "Product",
                            "name": "Website Development Company",
                            "description": "WebDesignHub provides top-tier website development services, leveraging the latest technologies to build scalable, responsive, and user-friendly websites tailored to meet the unique needs of businesses.",
                            "brand": {
                                "@type": "brand",
                                "name": "WebDesignHub"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "141"
                            }
                        }
                    `}
        </Script>
      </main>
    </>
  );
};

export default Page;
