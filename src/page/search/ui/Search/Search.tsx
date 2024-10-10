'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/src/shared/ui/Input/Input';
import Button from '@/src/shared/ui/Button/Button';
import { ProductCard } from '@/src/widgets/ProductCard/ui/ProductCard';
import { useSearchProducts } from '../../model/useSearch';
import { FormProps } from '../../model/types';
import styles from './Search.module.scss';

//TODO: убрать
const arr = [
  { title: 'title 1', price: '100', id: 7 },
  { title: 'title 2', price: '200', id: 8 },
];

export const Search = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const { register, handleSubmit, getValues } = useForm<FormProps>({
    defaultValues: {
      search: searchParams.get('q') || '',
    },
  });

  const { data, isLoading } = useSearchProducts(getValues('search'));

  const handleForm: SubmitHandler<FormProps> = ({ search }) => {
    push(`/search?q=${search}`);
  };

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
            {arr.map((item) => (
              <ProductCard key={item.id} {...item} view="list" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
