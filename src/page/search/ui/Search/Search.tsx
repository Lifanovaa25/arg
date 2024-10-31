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
import { Loading } from '@/src/widgets/Loading';

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
  const [pageSize, setPageSize] = useState(10)
  const { register, handleSubmit, getValues } = useForm<FormProps>({
    defaultValues: {
      search: searchParams.get('q') || '',
    },
  });
  const fetchProducts = async (): Promise<void> => {
    const result = await getSearchResults({
      Page: pageNumber, PageSize: pageSize, SearchString: searchRequest
    });

    if (result) {
      const r: ISearchResponse2numbernumber = result as unknown as ISearchResponse2numbernumber;
      //@ts-ignore
      setProducts(result.value.items);

    }
  };


  const fetchMoreData = () => {
    setPageSize(pageSize + 10)
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    fetchProducts();

  }
  const handleForm: SubmitHandler<FormProps> = ({ search }) => {
    push(`/search?q=${search}`);
    setSearchRequest(search)
    fetchProducts()
  };

  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';

    if (searchQuery) {

      setSearchRequest(searchQuery)

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
                aria-label="Search"
              >
                Search
              </Button>
            </form>
          </div>

          <div className={styles.list}>
            {/* {isLoading ? (
              <p className={styles.not_found}>Loading...</p> // Индикация загрузки
            ) :  */}
            {isLoading && <Loading />}
            {products.length > 0 ? (
              products.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.label}
                  price={item.price}
                  link={item.link}
                  manufacturer={item.props[1][1] ?? ""}
                  view="list" quantity={0} />
              ))
            ) : (
              <p className={styles.not_found}>No products found</p> // Сообщение, если товары не найдены
            )}
            {products.length > 0 &&
              <div className={styles.more_btn}>
                <Button
                  variant="golden"
                  className={styles.btn}
                  aria-label="More products"
                  //@ts-ignore
                  onClick={() => {
                    fetchMoreData()
                  }}
                >
                  <span>More products</span>
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};
