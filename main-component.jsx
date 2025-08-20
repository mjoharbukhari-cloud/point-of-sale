import Header from "../header";
import { HeroSection } from "../home/hero-section";
import About from "../about/page";
import PricingPlans from "../pricing/pricing-plan";
import Service from "../services/page";
import ContactUs from "../contact/contact-us"
import FaqSectionComponent from "../faq.section.component";
import Footer from "../footer";

export const MainComponent = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Service />
      <PricingPlans />
      <ContactUs />
      <FaqSectionComponent />
      <Footer />
    </div>
  );
};
