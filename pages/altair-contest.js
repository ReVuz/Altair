import '../styles/globals.css';
import Head from 'next/head';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, World } from '../sections';
import SplashCursor from '../sections/SplashCursor/SplashCursor';
import { TimelineDemo } from '../sections/Timeline/Timeline';

const Page = () => (
  <>
    <Head>
      <title>SAE X ALTAIR</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/metadroid-fav.png" />
    </Head>
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
        <TimelineDemo />
      </div>
      <Insights />

      <div className="relative">
      <World />

        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  </>

);

export default Page;
