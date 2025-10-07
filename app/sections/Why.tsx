import {IconType} from "react-icons";
import {
    GiFruitBowl,
    GiStarsStack,
} from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import Image from "next/image";



const WhyPage = () => {
    const Panel = ({Icon, title}: {Icon: IconType; title: string}) => (
        <div className={"flex flex-col items-center justify-center w-55 h-72 border border-[#CCCCCC] bg-[#FAFAF8] gap-5"}>
            <Icon size={80} color={"#AC892F"} />
            <p className={"font-bold"}>{title}</p>
        </div>
    )

    return (
        <div id={"why-section"} className={"xl:w-screen xl:h-screen bg-[#FFFFFF] text-zinc-900 flex flex-col xl:flex-row justify-evenly items-center px-25 py-25 xl:py-0"}>
                <div className={"flex flex-col justify-center h-full w-full gap-30"}>
                    {/* Description */}
                    <div className={"flex flex-col gap-10 pb-25 xl:pb-0"}>
                        <p className={"text-5xl"}>Why Dine With Us?</p>
                        <p className={"text-xl xl:w-1/2"}>Nestled in the heart of downtown, Bistro Bakery offers an intimate dining experience where culinary artistry meets cozy charm</p>
                    </div>

                    {/* Panels*/}
                    <div className={" gap-10 hidden xl:flex"}>
                        <Panel Icon={GiFruitBowl} title={"Fresh, Local Ingredients"} />
                        <Panel Icon={GiStarsStack} title={"Artisan Craftsmanship"} />
                        <Panel Icon={FaRegHandshake} title={"Inviting Atmosphere"} />
                        <Panel Icon={MdOutlineConnectWithoutContact} title={"Community Orientated"} />
                    </div>
                </div>

                <Image src={"/breakfast.jpg"} alt={"Breakfast"} width={400} height={500} priority />
        </div>
    );
}

export default WhyPage