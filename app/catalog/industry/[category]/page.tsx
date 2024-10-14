"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Top } from './Top/Top';
import { Description } from './Description/Description';
import { CardsList } from './CardsList/CardsList';
import { getCategory } from '@/src/app/api/categories/categoriesAPI';
import DynamicSeoHeader from '@/src/widgets/dinamicSeoHeader';

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
  SeoTitle: string,
  SeoDescription: string,
  SeoCanonical: string
}

const EquipmentCategoryPage: React.FC = () => {
  const pathname = usePathname(); // Получаем путь
  const [data, setData] = useState<ApiResponse['value'] | null>(null); // Данные из API
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [error, setError] = useState<string | null>(null); // Сообщение об ошибке

  const [SeoTitle, setSeoTitle] = useState('')
  const [SeoDescription, setSeoDescription] = useState('')
  useEffect(() => {
    setLoading(true)
    const fetchData = async (): Promise<void> => {
      const result = await getCategory({ Slug: pathname });
      if (result) {
        const r: ApiResponse = result as ApiResponse;
        setData(r.value);
        setLoading(false); // Выключаем состояние загрузки
        setSeoTitle(r.SeoTitle)
        setSeoDescription(r.SeoDescription)
      }
    };

    fetchData();
  }, [pathname]);

 
  return (
    <>
      <DynamicSeoHeader title={SeoTitle} description={SeoDescription} />
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
