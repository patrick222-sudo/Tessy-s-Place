import SEO from "../../components/seo/SEO";
import { SEO_DATA } from "../../constants/seo";

import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import FeaturedMeals from "./FeaturedMeals";
import FoodByLitre from "./FoodByLitre";
import ShareToNeedy from "./ShareToNeedy";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../../components/testimonials/Testimonials";
import ContactCTA from "../../components/cta/ContactCTA";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <SEO
        title={SEO_DATA.home.title}
        description={SEO_DATA.home.description}
      />

      <Navbar/>
      <Hero/>
      <FeaturedMeals/>
      <FoodByLitre/>
      <ShareToNeedy/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactCTA/>
      <Footer/>
    </>
  );
}

export default Home;