import HeroSection from './components/Hero.jsx'
import FeaturesAndDestinations from './components/FeaturesAndDestinations.jsx';
import CardSection from './components/CardSection.jsx';
import WorldWideSection from './components/worldWideSection.jsx';
import TestimonialSection from './components/TestinomialSection.jsx';
import PartnersMarquee from './components/PartnersMarquee.jsx';
import DownloadAppSection from './components/DownloadAppSection.jsx';
import TrustSection from './components/TrustSection.jsx';
import Footer from './components/Footer.jsx';
import BottomNav from './components/BottomNav.jsx';
export default function Hero() {
  return (
    <main>
      <HeroSection />
      <FeaturesAndDestinations/>
      <CardSection/>
      <WorldWideSection/>
      <TestimonialSection/>
      <PartnersMarquee/>
      <DownloadAppSection/>
      <TrustSection/>
      <Footer/>
      <BottomNav/>
    </main>
  );
}

