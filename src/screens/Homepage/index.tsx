import Hero from "../../components/Hero";
import Cards from "../../components/Cards";
import Comments from "../../components/Comments";
import TopProducts from "../../components/TopProducts";
import Popup from "../../components/Popup";
import Products from "../../components/Products";
import "./index.css";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Homepage = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handleOrderPopup} />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Cards />
      <Products />
      <Comments />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Homepage;
