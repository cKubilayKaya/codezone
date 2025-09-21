import Banner from "./Components/Home/Banner";
import Discover from "./Components/Home/Discover/Discover";
import Trends from "./Components/Home/Trends";
import Live from "./Components/Home/Live";
import Favorites from "./Components/Home/Favorites";

export const metadata = {
  title: "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri",
  description:
    "Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!",
  alternates: {
    canonical: "https://codezone-rouge.vercel.app/",
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <Live />
      <Trends />
      <Favorites />
      <Discover />
    </div>
  );
}
