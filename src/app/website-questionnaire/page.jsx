"use client"
// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Input from "./Input";
import Label from "./Label";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import { useState } from "react";
import Axios from "axios";

const Page = () => {
    const [formFields, setFormFields] = useState({
        clientName: "",
        contactPerson: "",
        designation: "",
        email: "",
        businessPhone: "",
        stypeGtalk: "",
        industry: "",
        webistePrincipalPurpose: "",
        webisteTargetAudience: "",
        webisteExistingURL: "",
        webisteColorPreferences: "",
        websiteDomainAlready: false,
        websiteHostingAlready: false,
        topCompetitors: "",
        paymentMethods: [],
        websiteCMS: false,
        openForBestOption: [],
        websiteSSLrequired: false,
        otherRequirementsAndPreferences: "",
        listContentPages: "",
        contactInformation: false,
        bannerSlider: false,
        contentArea: false,
        newsEventsWidget: false,
        siteSearch: false,
        informationForm: false,
        blogFeed: false,
        featuredProducts: false,
        videoGallery: false,
        newsletterOption: false,
        shoppingCart: false,
        socialMediaIcons: false,
        twitterFeed: false,
        facebookFeed: false,
        externalAPIDetailes: "",
        functionalRequirements: "",
        functionalRequirementsAdmin: "",
        anySpecificCMS: "",
        specificDeadline: "",
        websiteOtherSuggestion: "",
        websiteDesignReference: ""
    });
    const handleFormFields = (e) => {
        if (e.target.name === "paymentMethods") {
            let a = { ...formFields };
            if (e.target.checked) {
                a.paymentMethods.push(e.target.value);
            }
            setFormFields(a);
        } else if (e.target.name === "openForBestOption") {
            let b = { ...formFields };
            if (e.target.checked) {
                b.openForBestOption.push(e.target.value);
            }
            setFormFields(b);
        } else {
            setFormFields((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        }
    }
    const handleForm = async (e) => {
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(formFields);
        let reqOptions = {
            url: "/api/website-questionnaire",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }
        let res = await Axios.request(reqOptions);
        console.log(res.data);
        console.log(bodyContent);
    }
    return (
        <main>
            <Header />
            <section>
                <div className="__homeHeroGradientBg h-[250px] flex items-center text-center">
                    <div className="container">
                        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-megat text-white font-normal leading-none mt-10">
                            Website Client Questionnaire
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px]">
                    <form className="container">
                        <h3 className="text-2xl sm:text-3xl font-megat text-black font-normal leading-none mb-5">
                            Client Information to put on to the website:
                        </h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <Label title="Client Name:" htmlFor="clientName" required={true} />
                                <input   type="text" name="clientName" placeholder="Enter Your Name" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="Contact Person:" htmlFor="contactPerson" required={false} />
                                <input   type="text" name="contactPerson" placeholder="Enter Contact Person" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="Designation:" htmlFor="designation" required={false} />
                                <input   type="text" name="designation" placeholder="Enter Your Designation" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="Email:" htmlFor="email" required={true} />
                                <input   type="email" name="email" placeholder="Enter Your Email" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="Business Phone:" htmlFor="businessPhone" required={true} />
                                <input   type="tel" name="businessPhone" placeholder="Enter Phone No" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="Skype / Gtalk:" htmlFor="stypeGtalk" required={false} />
                                <input   type="text" name="stypeGtalk" placeholder="Enter Your Skype / Gtalk" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="Industry:" htmlFor="industry" required={false} />
                                <input   type="text" name="industry" placeholder="Enter Your Industry" handle={handleFormFields} />
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-megat text-black font-normal leading-none mt-8 mb-1">
                            Website Concept:
                        </h3>
                        <h3 className="text-lg sm:text-xl font-sans text-black font-normal leading-none mb-5">
                            Business Specifics
                        </h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <Label title="1. What is the Business Name?" htmlFor="businessName" required={false} />
                                <input   type="text" name="businessName" placeholder="Enter Your Business Name" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="2. Do you have a Business Logo?" required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Radio name="businessLogo" value="true" title="Yes" handle={handleFormFields} />
                                    <Radio name="businessLogo" value="false" title="No" handle={handleFormFields} />
                                </div>
                            </div>
                            <div>
                                <Label title="3. Do you have a Business Slogan?" htmlFor="businessSlogan" required={false} />
                                <input   type="text" name="businessSlogan" placeholder="Enter Your Business Slogan" handle={handleFormFields} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-sans text-black font-normal leading-none my-5">
                            Website Specifics
                        </h3>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <Label title="1. What is the Principal Purpose of the website?" htmlFor="webistePrincipalPurpose" required={false} />
                                <input   type="text" name="webistePrincipalPurpose" placeholder="Enter Principal Purpose" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="2. Who is the Target Audience?" htmlFor="webisteTargetAudience" required={false} />
                                <input   type="text" name="webisteTargetAudience" placeholder="Enter Your Target Audience" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="3. Is there an existing website? If yes, provide the URL" htmlFor="webisteExistingURL" required={false} />
                                <input   type="text" name="webisteExistingURL" placeholder="Enter Your Existing URL" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="4. Are there any website color preferences" htmlFor="webisteColorPreferences" required={false} />
                                <input   type="text" name="webisteColorPreferences" placeholder="Enter Your Color Preferences" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="5. Have you purchased domain already?" required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Radio name="websiteDomainAlready" value="true" title="Yes" handle={handleFormFields} />
                                    <Radio name="websiteDomainAlready" value="false" title="No" handle={handleFormFields} />
                                </div>
                            </div>
                            <div>
                                <Label title="6. Have you purchased hosting already?" required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Radio name="websiteHostingAlready" value="true" title="Yes" handle={handleFormFields} />
                                    <Radio name="websiteHostingAlready" value="false" title="No" handle={handleFormFields} />
                                </div>
                            </div>
                            <div>
                                <Label title="7. Please mention at least 3 top competitors" required={false} />
                                <input   type="text" name="topCompetitors" placeholder="Enter Your Top Competitors" handle={handleFormFields} />
                            </div>
                            <div>
                                <Label title="8. Which payment method would you like to integrate on the website?" required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Checkbox name="paymentMethods" title="PayPal" handle={handleFormFields} />
                                    <Checkbox name="paymentMethods" title="Stripe" handle={handleFormFields} />
                                    <Checkbox name="paymentMethods" title="Pay by credit card" handle={handleFormFields} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <Label title="9. Do you need a CMS (Content Management System) like WordPress? to edit the content of the website pages"
                                    required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Radio name="websiteCMS" value="true" title="Yes" handle={handleFormFields} />
                                    <Radio name="websiteCMS" value="false" title="No" handle={handleFormFields} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <Label title="10. Do you have any preferences for the platform / technology to be used for the website?"
                                    required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Checkbox name="openForBestOption" title="Open to best option which suites my business" handle={handleFormFields} />
                                </div>
                            </div>
                            <div>
                                <Label title="11. SSL Integration required?" required={false} />
                                <div className="flex gap-5 h-10 items-center">
                                    <Radio name="websiteSSLrequired" value="true" title="Yes" handle={handleFormFields} />
                                    <Radio name="websiteSSLrequired" value="false" title="No" handle={handleFormFields} />
                                </div>
                            </div>
                            <div>
                                <Label title="12. Are there any specific requirements or preferences not mentioned above?"
                                    htmlFor="otherRequirementsAndPreferences" required={false} />
                                <input   type="text" name="otherRequirementsAndPreferences" placeholder="Enter Here" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="13. Please list down content pages you will have on your website? (Example About Us, Privacy Policy, FAQ's etc.)"
                                    htmlFor="listContentPages" required={false} />
                                <input   type="text" name="listContentPages" placeholder="Enter List Down Content Pages" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="14. Please specify which of the below mentioned moduels / components you would like to see on your home page?"
                                    required={false} />
                            </div>
                            <div className="col-span-2 grid grid-cols-3 gap-5">
                                <div>
                                    <Label title="Contact Information" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="contactInformation" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="contactInformation" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Banner / Slider" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="bannerSlider" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="bannerSlider" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Content Are" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="contentArea" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="contentArea" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="News and Events Widget" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="newsEventsWidget" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="newsEventsWidget" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Site Search" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="siteSearch" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="siteSearch" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Request for information Form" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="informationForm" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="informationForm" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Blog Feed" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="blogFeed" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="blogFeed" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Featured Products" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="featuredProducts" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="featuredProducts" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Video Gallery" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="videoGallery" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="videoGallery" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Newsletter Subscription Option" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="newsletterOption" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="newsletterOption" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Shopping Cart Widget" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="shoppingCart" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="shoppingCart" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Social Media Icons" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="socialMediaIcons" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="socialMediaIcons" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Twitter Feed" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="twitterFeed" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="twitterFeed" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                                <div>
                                    <Label title="Facebook Feed" required={false} />
                                    <div className="flex gap-5 h-10 items-center">
                                        <Radio name="facebookFeed" value="true" title="Yes" handle={handleFormFields} />
                                        <Radio name="facebookFeed" value="false" title="No" handle={handleFormFields} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <Label title="15. Any External API required? If yes then please mention the details"
                                    htmlFor="externalAPIDetailes" required={false} />
                                <input   type="text" name="externalAPIDetailes" placeholder="Enter External API Details" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="16. Detailed Functional Requirements: (Please mention the detailed functional requirements of the applicaton)"
                                    htmlFor="functionalRequirements" required={false} />
                                <input   type="text" name="functionalRequirements" placeholder="Enter Functional Requirements" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="17. Administration area Detailed Functional Requirements: (Please mention the detailed functional requirements of the Admin module)"
                                    htmlFor="functionalRequirementsAdmin" required={false} />
                                <input   type="text" name="functionalRequirementsAdmin" placeholder="Enter Admin Functional Requirements"
                                    handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="18. Any specific (Content Management System) platform you require? (Drupal, Magento, Wordpress etc) Or do you leave that to the developer's suggestion?"
                                    htmlFor="anySpecificCMS" required={false} />
                                <input   type="text" name="anySpecificCMS" placeholder="Enter Any Specific CMS" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="19. Is there a specific deadline you have for the completion of the website? (Kindly note that website completion depends on the scope of work)"
                                    htmlFor="specificDeadline" required={false} />
                                <input   type="text" name="specificDeadline" placeholder="Enter Specific Deadline" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="20. Do you have any other suggestion, idea or requirements for the website?"
                                    htmlFor="websiteOtherSuggestion" required={false} />
                                <input   type="text" name="websiteOtherSuggestion" placeholder="Enter Other Suggestions or Idea" handle={handleFormFields} />
                            </div>
                            <div className="col-span-2">
                                <Label title="21. Do you have any reference website that you would like to provide in terms of design inspiration?"
                                    htmlFor="websiteDesignReference" required={false} />
                                <input   type="text" name="websiteDesignReference" placeholder="Enter Reference Website" handle={handleFormFields} />
                            </div>
                            <div>
                                <input   type="button" value="Submit" onClick={handleForm} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Page;