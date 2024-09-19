"use client";
// Css
import { useEffect, useState } from "react";
// Material
import { Alert } from "@material-tailwind/react";
// import CTA from "C/CTA";

import styles from "./popup-alert.module.css";
import Form from "./form/form";

//
import SpeakerIcon from "public/popup/speaker-icon.png";
import Image from "next/image";

const PopupAlert = () => {
  const [openTop, setOpenTop] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  useEffect(() => {
    setOpenTop(!openTop);
  }, []);
  return (
    <>
      {openTop && (
        <Alert
          open={openTop}
          onClose={() => {
            setOpenTop(false);
            setOpenBottom(true);
          }}
          animate={{
            mount: { y: 0 },
            unmount: { y: -100 },
          }}
          className={`${styles.bgGradient2} !fixed !rounded-none !top-0 !left-0 !right-0 !bottom-0 h-full z-[99999] bg-[#222222ad] !p-0 items-center justify-center !hidden lg:!flex`}
        >
          <div
            className={`${styles.popupBg} !w-[700px] m-auto h-full rounded-lg py-5 flex items-center flex-col justify-center relative`}
          >
            <Image
              src={SpeakerIcon}
              alt="speaker icon"
              className="absolute bottom-[10px] right-[30px]"
              quality={80}
            />
            <h3 className="text-[40px] leading-tight font-megat font-bold text-center">
              Black <span className="text-light-yellow">Friday</span> Offer...
            </h3>
            <p className="text-center font-sans text-[16px] leading-normal">
              Get A <span className="font-bold">FREE LOGO DESIGN NOW!</span>{" "}
              Grab <br /> this Limited-Time Offer
            </p>
            <Form />
          </div>
        </Alert>
      )}
      {!openTop && (
        <Alert
          open={openBottom}
          onClose={() => {
            setOpenTop(true);
            setOpenBottom(false);
          }}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
          className={`!fixed !bottom-[10px] !left-0 !right-0 !w-[800px] m-auto !z-50 bg-[#000] rounded-3xl !hidden lg:!block __homeHeroGradientBg`}
        >
          <div className="grid grid-cols-2 items-center">
            <div>
              <h3 className="text-[25px] leading-tight font-sans font-[600]">
                Black <span className="text-light-yellow">Friday</span> <br />{" "}
                Offer...
              </h3>
            </div>
            <div>
              <p className="text-right font-sans text-[12px] leading-normal">
                Get A <span className="font-bold">FREE LOGO DESIGN NOW!</span>{" "}
                <br /> Grab this Limited-Time Offer
              </p>
              <div className="w-max ml-auto mt-2">
                {/* <CTA
                                text="Claim Now"
                                href="#contactForm"
                                bg="bg-[#000]"
                                css="px-4  font-megat uppercase !text-[14px]"
                                width="w-max"
                                height="h-[35px]"
                            /> */}
              </div>
            </div>
          </div>
        </Alert>
      )}
    </>
  );
};

export default PopupAlert;
