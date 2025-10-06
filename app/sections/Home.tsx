import Image from "next/image";
import Link from "next/link";

const HomePage = () => (
    <div className={"w-screen h-screen"}>
        {/* Background Image */}
        <div className={"fixed bg-center bg-cover w-screen h-screen overflow-hidden -z-1 brightness-20"}>
            <Image src={"/donuts.jpg"} alt={"Donuts Background"} fill={true} />
        </div>

        {/* Menu */}
        <div className={"hidden lg:flex justify-center gap-15 pt-10"}>
            <Link href={"#about-section"}>
                <p className={"text-lg"}>About</p>
            </Link>
            <Link href={"#why-section"}>
                <p className={"text-lg"}>Why?</p>
            </Link>
            <Link href={"#favorite-section"}>
                <p className={"text-lg"}>Favorites</p>
            </Link>
            <Link href={"#contact-section"}>
                <p className={"text-lg"}>Contact</p>
            </Link>
        </div>

        {/* Content */}
        <div className={"flex flex-col h-screen items-center justify-center"}>
            {/* Logo */}
            <Image src={"/logo.png"} alt={"Bistro Bakery Logo"} width={500} height={200} />

            {/* Description */}
            <p className={"lg:w-[700px] px-10 lg:px-0 text-lg text-center pt-10 leading-9"}>Pulling on influences from around the globe with the chef&#39;s talent, pedigrees and passions. Bistro Bakery features hearty breakfasts, fulfilling lunches, and freshly made morning pastries including Danish products and a variety of croissants, signature desserts such as macaroons, cakes, tarts, and more!</p>
        </div>
    </div>
)

export default HomePage;