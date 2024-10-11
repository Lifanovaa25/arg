"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Top } from './Top/Top';
import { Description } from './Description/Description';
import { CardsList } from './CardsList/CardsList';
import { ICategoriesResponse200 } from '@/src/app/api/categories/interfaces';
import { getCategory } from '@/src/app/api/categories/categoriesAPI';
import { categoryStore } from '@/src/app/providers/Store/config/store';

// Описание типов для данных, возвращаемых API
interface Subcategory {
  name: string;
  url: string;
  image: string;
}

interface ApiResponse {
  isSuccess: boolean;
  isFailure: boolean;
  error?: {
    code: string;
    description: string;
    type: string;
  };
  value?: {
    label: string;
    text: string;
    subcategories: Subcategory[];
  };
}

const EquipmentCategoryPage: React.FC = () => {
  const pathname = usePathname(); // Получаем путь
  const [data, setData] = useState<ApiResponse['value'] | null>(null); // Данные из API
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [error, setError] = useState<string | null>(null); // Сообщение об ошибке
  const { path, onAddPathName } = categoryStore();

  useEffect(() => {
    const fetchData =  async (): Promise<void> => {
      const result = await getCategory({  Slug: pathname});
      
      if (result) {
        //@ts-ignore
        // setData(r); // Успешно загружаем данные

        const r: CatData = result.value as CatData;
        setData(r); 
      // setLoading(false); // Выключаем состояние загрузки
       
      }
    };
   
    fetchData();
  }, [pathname]);

  // if (loading) {
  //   return <p>Загрузка...</p>; // Сообщение о загрузке
  // }

  // if (error) {
  //   return <p>Ошибка: {error}</p>; // Сообщение об ошибке
  // }

  return (
    <>
      {data && (
        <>
      
          <Top title={data.label} />
          <Description text={data.text} />
          <CardsList subcategories={data.subcategories} />
        </>
      )}
    </>
  );
};

export default EquipmentCategoryPage;
