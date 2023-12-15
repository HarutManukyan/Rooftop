import HomeAbout from "./HomeAbout";
import HomeSlider from "./HomeSlider";
import HomeTop from "./HomeTop";
import HomeGallery from "./HomeGallery";
import HomeContacts from "./HomeContacts";
import ScrollToTop from "../../components/ScrollToTop";

function Homepage() {
  return (
    <div className="home">
      <HomeTop />
      <ScrollToTop />
      <HomeSlider />
      <HomeAbout />
      <HomeGallery />
      <HomeContacts />
    </div>
  );
}

export default Homepage;
