import HomePage from "@/app/sections/Home";
import AboutPage from "@/app/sections/About";
import WhyPage from "@/app/sections/Why";
import FavoritesPage from "@/app/sections/Favorites";
import ContactPage from "@/app/sections/Contact";

export default function Home() {
  return (
      <main>
          <HomePage />
          <AboutPage />
          <WhyPage />
          <FavoritesPage />
          <ContactPage />
      </main>
  );
}
