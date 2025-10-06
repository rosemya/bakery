import Image from "next/image";
import { PiCoffeeThin } from 'react-icons/pi';

const AboutPage = () => (
    <div id={"about-section"} className={"xl:w-screen xl:h-screen py-25 xl:py-0 bg-[#1F2B2B] flex items-center flex-col-reverse xl:flex-row"}>
        {/* Images */}
        <div className={"flex flex-col lg:flex-row h-full items-center gap-10 pl-10"}>
            <Image src={"/bread.jpg"} alt={"Bread"} width={375} height={500} />
            <Image src={"/chef.jpg"} alt={"Chef"} width={350} height={500} />
        </div>

        {/* About */}
        <div className={"flex flex-col xl:w-1/2 justify-center gap-10 items-center h-full "}>
            <p className={"text-4xl"}>Our Story</p>
            <p className={"w-3/5 leading-10 text-lg"}>
                Founded in 2015 by pastry chef Julia Simmons, Bistro Bakery has
                grown from a small local shop to a beloved community landmark.
                Julia’s dream was to create a space where people could gather, enjoy
                mouth-watering baked goods and meals, and feel at home. Today, we
                continue to honor that vision with every cake, cookie, loaf of
                bread, and dish that comes out of our ovens.</p>
            <PiCoffeeThin size={75} color={"#4B6967"} />
        </div>
    </div>
);

export default AboutPage;