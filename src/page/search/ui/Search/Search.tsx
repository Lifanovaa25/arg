'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Input from '@/src/shared/ui/Input/Input';
import Button from '@/src/shared/ui/Button/Button';
import { ProductCard } from '@/src/widgets/ProductCard/ui/ProductCard';
import { FormProps } from '../../model/types';
import styles from './Search.module.scss';
import { getSearchResults } from '@/src/app/api/search/searchAPI';
import { ISearchResponse2numbernumber } from '@/src/app/api/search/interfaces';

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
  const [pageNumber, setPageNumber] = useState(1)
  const [searchRequest, setSearchRequest] = useState('')
  const { register, handleSubmit, getValues } = useForm<FormProps>({
    defaultValues: {
      search: searchParams.get('q') || '',
    },
  });
  const fetchProducts = async (): Promise<void> => {
  
    let num = pageNumber
    setPageNumber(num++)
    const result = await getSearchResults({
      Page: pageNumber, PageSize: '30', SearchString: searchRequest
    });

    if (result) {
      const r: ISearchResponse2numbernumber = result as unknown as ISearchResponse2numbernumber;
      //@ts-ignore
      setProducts(result.value.items);

    }
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.offsetHeight - 100
  //     ) {
  //       setPageNumber(pageNumber+1)

  //       let q = searchParams.get('q') 
  //       if(q != null) {
  //          setSearchRequest(q)
  //       }
  //       // console.log(pageNumber)
  //       fetchProducts()
  //       // console.log(document.body.offsetHeight);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  // }, [window.scrollY])
 
  const handleForm: SubmitHandler<FormProps> = ({ search }) => {
    push(`/search?q=${search}`);
    setSearchRequest(search)
    fetchProducts()
    console.log(searchRequest)
    // fetchProducts(search); // Выполнить поиск при сабмите
  };

  // Выполнить запрос при загрузке страницы или изменении строки запроса
  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    console.log(searchParams.get('q'))
    if (searchQuery) {
      // fetchProducts(searchQuery);
      setSearchRequest(searchQuery)
      fetchProducts()
    }
  }, [searchParams]);

  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.actions}>
            <form className={styles.form} onSubmit={handleSubmit(handleForm)} >
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
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.label}
                  price={item.price}
                  // props={item.Props}
                  link={item.link}
                  // toCart={item.ToCart}
                  // articul={item.Articul}
                  manufacturer={item.props[1][1] ?? ""}
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
