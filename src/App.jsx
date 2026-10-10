import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollTop from './components/ScrollTop.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import { WorkshopPage } from './components/Workshops.jsx';

import './App.css';
import './styles/styles.css';

/* General pages */
const About = lazy(() => import('./components/About.jsx'));
const Play = lazy(() => import('./components/Play.jsx'));
const Motion = lazy(() => import('./components/Motion.jsx'));
const Work = lazy(() => import('./components/Work.jsx'));
const Websites = lazy(() => import('./components/Websites.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Artbox = lazy(() => import('./components/Artbox.jsx'));
const Sides = lazy(() => import('./components/Sides.jsx'));

/* Design projects */
const OneTwentyEs = lazy(() =>
  import('./components/Design/120es.jsx')
);

const Cue = lazy(() =>
  import('./components/Design/Cue.jsx')
);

const Haven = lazy(() =>
  import('./components/Design/Haven.jsx')
);

const OrderUp = lazy(() =>
  import('./components/Design/OrderUp.jsx')
);

const FreshlyDropped = lazy(() =>
  import('./components/Design/FreshlyDropped.jsx')
);

const Workday = lazy(() =>
  import('./components/Design/Workday.jsx')
);

const Fukai = lazy(() =>
  import('./components/Design/Fukai.jsx')
);

const PPL = lazy(() =>
  import('./components/Design/PPL.jsx')
);

const Memo = lazy(() =>
  import('./components/Design/Memo.jsx')
);

const Tang = lazy(() =>
  import('./components/Design/Tang.jsx')
);

const Veil = lazy(() =>
  import('./components/Design/Veil.jsx')
);

const TwoReel = lazy(() =>
  import('./components/Design/TwoReel.jsx')
);

/* Motion projects */
const DropDead = lazy(() =>
  import('./components/Motion/DropDead.jsx')
);

const Collections = lazy(() =>
  import('./components/Motion/Collections.jsx')
);

const Mono = lazy(() =>
  import('./components/Motion/Projectmono.jsx')
);

const Supercut = lazy(() =>
  import('./components/Motion/Supercut.jsx')
);

const AASAFormal = lazy(() =>
  import('./components/Motion/AASAFormal.jsx')
);

/* Games */
const PlinkyPlights = lazy(() =>
  import('./components/Games/plinkyplights.jsx')
);

const Mousestopper = lazy(() =>
  import('./components/Games/Mousestopper.jsx')
);

function PageFallback() {
  return (
    <div
      className="
        min-h-dvh
        w-full
        bg-[var(--primary)]
      "
    />
  );
}

function App() {
  return (
    <>
      <ScrollTop />

      <Suspense fallback={<PageFallback />}>
        <Routes>

          <Route path="/" element={<Hero />} />

          <Route path="/workshops/:id" element={<WorkshopPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/artbox" element={<Artbox />} />
          <Route path="/work" element={<Work />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/sides" element={<Sides />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/play" element={<Play />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/dropdead" element={<DropDead />} />
          <Route path="/aasaformal" element={<AASAFormal />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/projectmono" element={<Mono />} />
          <Route path="/supercut" element={<Supercut />} />

          <Route path="/120es" element={<OneTwentyEs />} />
          <Route path="/cue" element={<Cue />} />
          <Route path="/haven" element={<Haven />} />
          <Route path="/orderup" element={<OrderUp />} />
          <Route
            path="/freshlydropped"
            element={<FreshlyDropped />}
          />
          <Route path="/workday" element={<Workday />} />

          <Route path="/PPL" element={<PPL />} />
          <Route path="/fukai" element={<Fukai />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/tang" element={<Tang />} />
          <Route path="/veil" element={<Veil />} />
          <Route path="/tworeel" element={<TwoReel />} />

          <Route path="/plinky" element={<PlinkyPlights />} />
          <Route
            path="/mousestopper"
            element={<Mousestopper />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;