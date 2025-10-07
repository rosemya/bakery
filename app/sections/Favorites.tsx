import Image from "next/image";

const FavoritesPage = () => {

    const FavoriteImage = ({image, text}: {image: string; text: string}) => (
        <div>
            <div className={"relative w-[300px] h-[400px]"}>
                <Image src={image} alt={text} fill={true} priority />
            </div>
            <p>{text}</p>
        </div>
    )

    return (
        <div id={"favorite-section"} className={"h-full 2xl:w-screen 2xl:h-screen bg-[#EDC75F] text-zinc-900 flex flex-col items-center justify-center gap-10 py-25 2xl:py-0"}>
            <p className={"text-5xl text-center"}>Our Customers Favorite Dishes</p>
            <p className={"text-lg xl:w-1/2 text-center"}>Whether you’re in the mood for a healthy breakfast or a leisurely lunch our culinary team is dedicated to providing an unforgettable gastronomic journey</p>
            <div className={"flex gap-20 pt-10 flex-col xl:flex-row flex-wrap"}>
                <FavoriteImage image={"/croissants.jpg"} text={"Chocolate Croissants"} />
                <FavoriteImage image={"/toast.jpg"} text={"Avocado Toast"} />
                <FavoriteImage image={"/salad.jpg"} text={"Chicken Salad"} />
                <FavoriteImage image={"/pasta.jpg"} text={"Pasta Special"} />
            </div>
        </div>
    )
}

export default FavoritesPage;