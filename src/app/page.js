import Banner from "./Components/Banner";
import Discover from "./Components/Discover";
import Favorites from "./Components/Favorites";
import Live from "./Components/Live";
import Trends from "./Components/Trends";

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
