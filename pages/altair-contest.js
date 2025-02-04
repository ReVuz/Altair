import '../styles/globals.css';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights } from '../sections';
import SplashCursor from '../sections/SplashCursor/SplashCursor';

const Page = () => (
  <>
    <div className="relative">
      <SplashCursor />
    </div>
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        {/* <WhatsNew /> */}
      </div>
      {/* <World /> */}
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  </>

);

export default Page;
