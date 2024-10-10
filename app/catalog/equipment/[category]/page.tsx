"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Top } from './Top/Top';
import { Description } from './Description/Description';
import { CardsList } from './CardsList/CardsList';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://royal-equipment.ae/api/GetCategory?Slug=${pathname}/`);
        const result: ApiResponse = await response.json(); // Указываем тип результата
        if (result.isSuccess) {
          setData(result.value); // Успешно загружаем данные
        } else {
          setError(result.error?.description || 'Произошла ошибка'); // Обрабатываем ошибку
        }
      } catch (err) {
        setError('Ошибка при загрузке данных'); // Обрабатываем исключения
      } finally {
        setLoading(false); // Выключаем состояние загрузки
      }
    };

    fetchData();
  }, [pathname]);

  if (loading) {
    return <p>Загрузка...</p>; // Сообщение о загрузке
  }

  if (error) {
    return <p>Ошибка: {error}</p>; // Сообщение об ошибке
  }

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
