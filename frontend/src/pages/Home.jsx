import React, { Suspense, lazy } from 'react';
import { Spinner } from '../components/Spinner';

const Hero = lazy(() => import('../sections/Hero'))
const WhyFlowerish = lazy(() => import('../sections/WhyFlowerish'))
const MidHero = lazy(() => import('../sections/MidHero'))
const MiniStore = lazy(() => import('../sections/MiniStore'))
const Technologies = lazy(() => import('../sections/Technologies'))
const Help = lazy(() => import('../sections/Help'))

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Spinner height="300px" />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Spinner height="300px" />}>
        <WhyFlowerish />
      </Suspense>
      <Suspense fallback={<Spinner height="300px" />}>
        <MiniStore />
      </Suspense>
      <Suspense fallback={<Spinner height="300px" />}>
        <MidHero />
      </Suspense>
      <Suspense fallback={<Spinner height="300px" />}>
        <Technologies />
      </Suspense>
      <Suspense fallback={<Spinner height="300px" />}>
        <Help />
      </Suspense>
    </div>
  )
}

export default Home
