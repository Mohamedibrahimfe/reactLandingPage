import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Testimonials from "./pages/Testmonials";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Resources />
      <Testimonials />
      <Pricing />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
