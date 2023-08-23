import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subcribe,
} from "./sections/index.js";

const App = () => (
  <main className="relative">
    <Navbar />
    <Hero />
    <PopularProducts />
    <SuperQuality />
    <Services />
    <SpecialOffer />
    <CustomerReviews />
    <Subcribe />
    <Footer />
  </main>
);

export default App;
