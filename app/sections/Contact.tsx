import {BsTwitterX} from "react-icons/bs";
import {FaFacebookF, FaInstagram} from "react-icons/fa";

const ContactPage = () => (
    <div id={"contact-section"} className={"w-screen xl:h-[50vh] bg-[#222222] items-center justify-between flex flex-col p-10"}>
        {/* Newsletter */}
        <div className={"hidden xl:flex justify-between items-center w-full"}>
            <p className={"text-6xl w-1/4"}>Subscribe to our newsletter</p>
            <p>Stay up-to-date with the latest news, promotions, and exclusive offers!</p>
            {/* Email Input */}
            <div>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className=" w-[250px] flex-auto rounded-md border-0 bg-white/5 px-5"
                    placeholder="Enter your email"
                />
                <button
                    type="submit"
                    className="flex-none rounded-md bg-[#FFD064] text-[#222222] px-5  text-sm font-semibold  shadow-sm hover:bg-yellow-400  focus-visible:outline-yellow-500"
                >
                    Subscribe
                </button>
            </div>
        </div>

        <div className={"flex flex-col xl:flex-row justify-between items-center w-full gap-10"}>
            <div>
                <p className={"text-xl"}>600 Brickell Ave, Miami, FL 33131</p>
                <p className={"text-xl"}>(305) 778-4585</p>
                <div className={"flex mt-[10%] justify-between w-1/2"}>
                    <a href={"https://x.com"} target={"_blank"}>
                        <BsTwitterX size={20} />
                    </a>

                    <a href={"https://facebook.com"} target={"_blank"}>
                        <FaFacebookF size={20} />
                    </a>

                    <a href={"https://instagram.com"} target={"_blank"}>
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
            <div className={"flex flex-col gap-5"}>
                <p className={"font-bold text-xl"}>We&#39;re Open!</p>
                <p>Monday - Saturday 9am - 10pm</p>
            </div>

        </div>

    </div>
);

export default ContactPage;