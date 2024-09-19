// Import Components
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";

const Page = () => {
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    return (
        <main>
            <Header />
            <section>
                <div className="__homeHeroGradientBg h-[250px] flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mt-10">Terms & Conditions
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px]">
                    <div className="container">
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Revision Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We provide revisions depending on the package you have selected. Customers enjoy the leverage of unlimited free revisions as we revise their websites without any additional charges, provided that the theme and layout remain the same. The Turnaround Time for revision would be 48-72 hours.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Turn Around Time
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub have a turnaround time of 48-72 hours for most web development services. Note that this is not the complete time frame for a project. It is only the turnaround time for a single iteration of the development stage. Depending on the kind of service, the time required for revisions could vary from a minimum of 48 hours to 72 hours which means two working days.
                        </p>
                        <h3 className="text-md sm:text-lg font-sans text-[#202020] font-semibold leading-none mb-2">
                            For Example:
                        </h3>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website Orders placed or Revisions Requested on a Monday will be delivered by Wednesday.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    Website Orders placed or Revisions Requested on a Friday will be delivered by the end of the day Tuesday.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Refund Policy & Money Back Guarantee
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            In any event, any deposited funds for a project shall not be subject to refund after delivery if the initial website design and theme are approved, or a change is requested unless Web Design Hub cancels or terminates your contract for a reason other than your breach or non-performance.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            All refund requests will be fulfilled as per the following arrangement:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    You can make a request when the initial designs for the website are offered. However, once you approve or request changes in the initial layout, the refund offer becomes void, and the refund request will not be entertained.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    If the request for a refund is made before the delivery of the initial layout, then you would be eligible for a Full Refund (less 10% service & processing fee).
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    If the request for a refund is made within 48 hours, you would be eligible for a 66% refund (less 10% service & processing fee).
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    If the request for a refund is made between 48- 120 hours of the initial layout delivery, you would be eligible 33% refund (less 10% service & processing fee).
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    If the request for a refund is made between 48- 120 hours of the initial layout delivery, you would be eligible 33% refund (less 10% service & processing fee).
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    No refund request will be entertained after 120 hours of your initial layout delivery. However, since we believe in 100% customer satisfaction, you're encouraged to contact us in case of any concern.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    No refund request will be entertained if you have not taken any action on your order for 30 days after placing your order. However, if you want to reactivate your website order, you will be charged a certain fee depending on your project.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    No refund requests will be entertained after the final files have been delivered.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    During the project, if the client asks for a refund due to a change of mind or any other personal issues, then the client is not eligible for a refund, although we can store credit the amount which he/she can later utilize for another service.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    For website packages, no refund will be entertained once website development has been completed or once the website has been deployed live.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Refund is processed for the orders placed in good faith. When a customer has placed website orders with more than one website agency for the same job with the intention to claim a refund, we do not consider it a good faith. In such a case, we reserve the right to decline a refund request.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    For video animation packages, no refund request will be entertained after the designing of the storyboard.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    All refund requests should be communicated to the support department. Web Design Hub, based on the violation of your user agreement, reserves the right to approve/disapprove your request on an individual case-to-case basis.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    For Web Design Hub Custom packages, the refund will be applicable depending on similar terms as it is on the single packages.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    For example, if you order web design and video animation services and approve the website, you can claim a refund for the video animation service before designing the storyboard only.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    A refund request will need to have a valid reason to support it, which must qualify against the website brief and customer feedback for revisions. Unless a layout has not been designed according to the brief, a refund will not be processed; however, further revisions will be provided until complete satisfaction.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Money back guarantee is for the orders placed in good faith. When a customer has placed website orders with more than one website agency for the same job with the intention to claim a refund, we do not consider it a good faith. In such a case, we reserve the right to decline a refund request.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    All website jobs require customer feedback before finalizing the design and development; therefore, it is only fair that the customer gets involved and provides feedback in order to get the desired results.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    100% unique website guarantee entitles you to a re-draw if our developed website is to be found considerably similar to another website that may already exist. Any resemblance to an existing website will be merely a coincidence, and Web Design Hub will not accept any responsibility or claim of any compensation in such a case. It is the client's responsibility to get their website copyrighted.
                                </span>
                            </li>
                        </ul>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-2">
                            Note: Web Design Hub hold all the rights to reject any project or cancel the contract whenever it deems necessary. After the refund, you will not have any rights to use the domain for any purpose; they will be the sole property of Web Design Hub. The company will be the rightful owner of the website.
                        </p>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Services not related to website services are not eligible for refunds under any circumstances. They are not covered under our 100% money-back guarantee. If such a service is acquired as part of a Package Deal of any kind, it cannot be used to request a refund on the entire package. Examples of such services are as follows:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Copyrights Protection Certificates.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website & Emails Hosting Services.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website SSL Certificates.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website Domain Purchase.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website Maintenance Plans.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website SEO Plans.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Social Media Marketing.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    Google AdWords Campaigns.
                                </span>
                            </li>
                        </ul>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            For services that are not covered under the 100% refund policy, in case of dissatisfaction, Web Design Hub management, after reviewing the project, may choose to offer a partial refund to the client.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            How to claim your refund
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            To assure your refund request is approved, please make sure you meet the following requirements.
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Claim your refund specifying your concern by contacting us via any of the following three modes:
                                </span>
                                <ul className="list-decimal list-inside pl-5">
                                    <li>
                                        <span>
                                            Toll-free <a href="tel:(855)888-8399" className="text-[#0F2847]">(855) 888-8399</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Live Chat
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <a href="mailto:info@webdesignhub.co" className="text-[#0F2847]">info@webdesignhub.co</a>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    We will try to resolve your concern by virtue of our revision policy immediately, or else we will email you a refund request approval from our refund department. After the refund, your website copyrights would be obtained by Web Design Hub, and you would not be able to use the website design sent by the company. Let us also specify that:
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Since the website rights would now be transferred to the company, you agree that you will have no right (direct or indirect) to use any response or other content, work product, or media, nor will you have any ownership interest in or to the same.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    Working in collaboration with the Government Copyright Agencies, Web Design Hub would share Copyright Acquisition information for the refunded designs that would restrict the re-use of the website as its original layout in the future. If you have any questions or concerns about our Refund Policy, please contact us by clicking here <a href="mailto:info@webdesignhub.co" className="text-[#0F2847]">info@webdesignhub.co</a>
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            My Account
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            The My Account area is a convenient way to communicate. It is your sole responsibility to check the account area to address any queries, concerns, or additional instructions required by the designer. Not checking or using the Account Area frequently shall not provide you with adequate grounds for a refund. However, if you are uncertain how to use the area, you may contact the customer support team at any time for assistance.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Communication Policy
                        </h2>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Emails Sent back and forth through official emails that are "<a href="mailto:info@webdesignhub.co" className="text-[#0F2847]">info@webdesignhub.co</a>" are to be only considered forms of valid communication.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    We are not responsible for any damages, issues, or delays caused due to contacts made through means of communication not provided by us.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    We take full responsibility for all the information provided through our official domains.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Quality Assurance Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub will do their best to meet your requirements, and our web developers will do their best to fulfill your expectations. We believe in providing the best website, and each of our layouts is well crafted.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            100% Satisfaction Guarantee
                        </h2>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Our unlimited revisions policy is to make sure that you are 100% satisfied.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    We aim to exceed your expectations and strive to accomplish them.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    We do not stop our revisions until you are completely satisfied with your website (the number of revisions will be according to your package).
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Delivery Policy
                        </h2>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    The complete order will be sent to the mentioned account on the date stated on Order Confirmation as well as a confirmation email will also be sent.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    The turnaround time will be according to the package; the minimum time required is two business days.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Websites will only be made life once all dues have been cleared. Under no condition will a website be made life if there are any kind of dues outstanding.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    In case of an urgent or rush order, contact our customer support team.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Website Ownership & Rights
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            All finalized websites provided by Web Design Hub are done so on a written request of finalization by the client, and upon finalization, the client receives all the credentials and owns 100% of all rights of ownership to the said website.
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    The client shall own the Final Website design provided by Web Design Hub in all its entirety.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    All ownership rights of the said finalized website will belong to the client 100%.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    The Client is free to use the finalized website as they see fit.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    The client shall not, however, own any materials, media, or other content generated during any revision cycles leading up to the Final Product.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Content Creation & Population
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub will not be responsible for creating or populating content (e.g., text/Images) into the website unless purchased exclusively otherwise. In which case:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Web Design Hub will populate the website with content created for the client
                                </span>
                                <ul className="list-decimal list-inside pl-5">
                                    <li>
                                        <span>
                                            The content/text for the website will be created specifically for the customer's website.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Web Design Hub will populate the website with images
                                </span>
                                <ul className="list-decimal list-inside pl-5">
                                    <li>
                                        <span>
                                            Web Design Hub will acquire stock imagery for the client from stock photo websites.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Images will be purchased upon approval from the client.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Images will be purchased upon approval from the client.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Web Design Hub will populate the website with products and product details.
                                </span>
                                <ul className="list-decimal list-inside pl-5">
                                    <li>
                                        <span>
                                            Product images and product details will be provided by the client.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            N.D.A. & Reputation Management Policy
                        </h2>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Web Design Hub does not share the customer information regarding their project or contact details with anyone. The client's person and project information is kept confidential at all points.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Once the project is completed successfully, both parties, Web Design Hub and The Client, agree not to intentionally defame or otherwise disparage the other with respect to matters arising after project completion.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    Once the project is completed successfully, each Party agrees to refrain from (and Web Design Hub shall take reasonable steps to cause its officers and directors to refrain from), either directly or indirectly, hereafter making any defamatory comments of any type or nature whatsoever to anyone about the Client (and in the case of the Company, its employees, officers, directors, agents, consultants, affiliates, investors or business partners).
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Record Maintenance
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub keep the records of finalized product delivery and communication.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Customer Support
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Our Customer Support Team is present in the office Monday - Friday from 9 AM to 5 PM GMT to answer all of your concerns and queries over the phone. All other queries after business hours need to be emailed through the Team Works Account section by the customer and will be picked up the next working day.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Technical Support Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub is primarily a website service and website consultancy provider. We will design and develop the services that the client needs. On occasions, our packages and services purchased will include technical aspects to help the client with their websites and emails. Web Design Hub will provide the client with the basic information regarding those services and the settings required to make those services work. Web Design Hub will not be responsible for providing detailed training or installations of said services on the customer's end. Such services may include but are not limited to:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    Website Deployment
                                </span>
                                <ul className="list-decimal list-inside pl-5">
                                    <li>
                                        <span>
                                            Web Design Hub will deploy the website for the customer on
                                        </span>
                                        <ul className="list-disc list-inside pl-5">
                                            <li>
                                                <span>
                                                    A Hosting server is provided by us.
                                                </span>
                                                <ul className="list-decimal  list-inside pl-5">
                                                    <li>
                                                        <span>
                                                            Hosting Service provided by Web Design Hub is a free service provided to the client as an added feature without any cost. It is acquired from a Third Party Service provider.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className="list-disc list-inside pl-5">
                                            <li>
                                                <span>
                                                    A Hosting server provided by the customer (purchased from a Third Party)
                                                </span>
                                                <ul className="list-decimal  list-inside pl-5">
                                                    <li>
                                                        <span>
                                                            In the event the website is hosted on a third-party web server purchased by the customer, Web Design Hub will not be held responsible for any kind of server or hosting-related issues.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            There is no Service Level Agreement (SLA) between the client and Web Design Hub in terms of technical assistance or service outage unless purchased separately as an ongoing maintenance service.
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    Website Content Management System (CMS: Content Management System)
                                </span>
                                <ul className="list-decimal  list-inside pl-5">
                                    <li>
                                        <span>
                                            Web Design Hub will provide the customer with a user manual to use the Website CMS (Content Management System).
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Web Design Hub will not be responsible for training the client in the said Website CMS (Content Management System).
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal">
                                <span>
                                    Emails Setup
                                </span>
                                <ul className="list-decimal  list-inside pl-5">
                                    <li>
                                        <span>
                                            Web Design Hub will provide the customer with the necessary settings and information to install the emails on their end.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Web Design Hub will not be responsible for installing said emails onto the customer end.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Web Design Hub will not be responsible for providing technical support or assistance in troubleshooting errors on email usage as all our emails are on open servers and accessible by all service providers.
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub will not be held responsible in any way for the customer's failure to execute, install or learn the usage of the above-said services on their end, as the responsibilities for those lie on the customer's end.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Email & Mobile Phone Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            This policy outlines the terms and conditions regarding the use of email and mobile phone contact information provided to Web Design Hub.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Consent and Usage
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            By providing your email address and/or mobile phone number, you consent to receive communication from Web Design Hub. This includes, transitional messages, periodic updates about your service or project, updates, newsletters, and services delivery e.g. Design attachments, Project updates and Revisions update.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Carrier Charges Disclosure
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Standard messaging and data rates may apply. Please consult your mobile service carrier for details.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Stop & Unsubscribe
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            If you wish to stop receiving emails or mobile communications, you can:
                        </p>
                        <ul className="list-disc list-inside mb-5">
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    For emails, click the "unsubscribe" link located at the bottom of any email you receive from us.
                                </span>
                            </li>
                            <li className="text-[14px] leading-[28px] text-[#565151] font-normal mb-2">
                                <span>
                                    For mobile communications, reply "STOP" or “Unsub” “Unsubscribe” to any SMS message you receive from us. The SMS will be stopped right away.
                                </span>
                            </li>
                        </ul>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Frequency of Communication
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            We will strive to limit the frequency of our communications to a reasonable level. However, there may be exceptions during special update about project or urgent notifications.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Security of Information
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Your email address and mobile phone number will be kept confidential and will not be shared with third parties without your explicit consent, except as required by law.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Changes to Policy
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal mb-5">
                            Web Design Hub reserves the right to modify this policy at any time. Any changes will be posted on our website, and it is your responsibility to review these changes.
                        </p>
                        <h2 className="text-xl sm:text-2xl font-sans text-[#202020] font-semibold leading-none mb-2">
                            Contact Us
                        </h2>
                        <p className="text-[15px] leading-[25px] text-[#565151] font-normal">
                            if you have any questions or concerns regarding this policy, please contact us at <a href="mailto:info@webdesignhub.co" className="text-[#0F2847] font-bold">info@webdesignhub.co</a>
                        </p>
                    </div>
                </div>
            </section>
            <Letstalk content={letstalk} />
            <Reviews />
            <Contact />
            <Footer />
        </main>
    );
}

export default Page;