'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Input from '@/src/shared/ui/Input/Input';
import Button from '@/src/shared/ui/Button/Button';
import { ProductCard } from '@/src/widgets/ProductCard/ui/ProductCard';
import { FormProps } from '../../model/types';
import styles from './Search.module.scss';

interface Product {
  id: number;
  image: string;
  label: string;
  price: number;
  props: string[][];
  link: string;
  toCart: boolean;
  articul: string;
  parts: boolean;
}

export const Search = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, getValues } = useForm<FormProps>({
    defaultValues: {
      search: searchParams.get('q') || '',
    },
  });

  // Функция для выполнения запроса к API
  const fetchProducts = async (search: string, page = 1, pageSize = 30) => {
    setIsLoading(true);
    try {
      const query = new URLSearchParams({
            SearchString: search.toString(),
            Page: page.toString(),
            PageSize: pageSize.toString()
          }).toString();
          
      const response = await fetch(
        `https://royal-equipment.ae/api/GetSearchResult?${query}`, 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.isSuccess && result.value && result.value.items) {
        setProducts(result.value.items);
      } else {
        console.error('Ошибка при загрузке данных:', result.error);
        setProducts([]); // Очистить список продуктов при ошибке
      }
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Обработчик формы поиска
  const handleForm: SubmitHandler<FormProps> = ({ search }) => {
    push(`/search?q=${search}`);
    fetchProducts(search); // Выполнить поиск при сабмите
  };

  // Выполнить запрос при загрузке страницы или изменении строки запроса
  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    if (searchQuery) {
      fetchProducts(searchQuery);
    }
  }, [searchParams]);

  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.actions}>
            <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
              <Input
                className={styles.input}
                placeholder="Search"
                {...register('search')}
              />
              <Button
                className={styles.btn}
                variant="golden"
                isLoading={isLoading}
                type="submit"
              >
                Search
              </Button>
            </form>
          </div>

          <div className={styles.list}>
            {isLoading ? (
              <p className={styles.not_found}>Loading...</p> // Индикация загрузки
            ) : products.length > 0 ? (
              products.map((item) => (
                <ProductCard
                  // key={item.Id}
                  id={item.id}
                  image={item.image}
                  title={item.label}
                  price={item.price}
                  // props={item.Props}
                  link={item.link}
                  // toCart={item.ToCart}
                  // articul={item.Articul}
                  manufacturer={item.props[1][1]??""}
                  view="list"
                />
              ))
            ) : (
              <p className={styles.not_found}>No products found</p> // Сообщение, если товары не найдены
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
