import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DigitalServices from "./components/DigitalServices";
import CaseStudyPage from "./components/CaseStudyPage";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-[1110px] mx-auto">
        <Services />
        <DigitalServices />
        <CaseStudyPage />
        <Testimonials />
        <News />
        <Footer />
      </div>
    </>
  );
}

export default App;
