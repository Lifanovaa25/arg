'use client';

import { Top } from '../Top/Top';
import { Carousel } from '../Carousel/Carousel';
import { MobileSection } from '../MobileSection/MobileSection';
import { useEffect, useState } from 'react';

export const Home = () => {



  return (
    <>
      <Top />
      <Carousel />
      <MobileSection />
    </>
  );
};
