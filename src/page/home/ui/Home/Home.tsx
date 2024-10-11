'use client';

import { Top } from '../Top/Top';
import { Carousel } from '../Carousel/Carousel';
import { MobileSection } from '../MobileSection/MobileSection';
import { useEffect, useState } from 'react';
import { ICategoriesResponse200 } from '@/src/app/api/categories/interfaces';
import { getCategory } from '@/src/app/api/categories/categoriesAPI';

// ПРИМЕР ИСПОЛЬЗОВАНИЯ АПИ

export const Home = () => {
  const [test, setTest] = useState<ICategoriesResponse200>()
  
  const gategoriesList = async (): Promise<void> => {
    const result = await getCategory({  Slug: "/catalog/equipment/replacement-and-spare-parts/" });
    
    if (result) {
      const r: ICategoriesResponse200 = result as ICategoriesResponse200;
      setTest(r);
    }
  };

  useEffect(() => {
    gategoriesList();
  }, []);

  useEffect(() => {
    console.log({test});
  }, [test]);
  
  
  return (
    <>
      <Top />
      <Carousel />
      <MobileSection />
      {/* {test && test.Value.Label} */}
    </>
  );
};

// %2Fcatalog%2Fequipment%2Freplacement-and-spare-parts%2F
// %2F = /

// /catalog/equipment/replacement-and-spare-parts/
