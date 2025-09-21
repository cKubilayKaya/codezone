import Banner from "./Components/Home/Banner";
import Discover from "./Components/Home/Discover/Discover";
import Trends from "./Components/Home/Trends";
import Live from "./Components/Home/Live";
import Favorites from "./Components/Home/Favorites";

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
