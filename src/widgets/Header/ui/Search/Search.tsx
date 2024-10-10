import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'classnames';
import Input from '@/src/shared/ui/Input/Input';
import { checkMobileScreen } from '@/src/shared/lib/utils/checkMobileScreen/checkMobileScreen';
import { SearchProps, FormProps } from './types';
import styles from './Search.module.scss';
import { searchStore } from '@/src/app/providers/Store/config/store';

export const Search = (props: SearchProps) => {
  const { isCatalogRoute, isScrolledFar } = props;
  const {query, onAddSearchRequest } = searchStore();

  const { push } = useRouter();
  const { register, handleSubmit } = useForm<FormProps>();

  const handleForm: SubmitHandler<FormProps> = ({ search }) => {
    onAddSearchRequest(search)
    push(`/search?q=${search}`);
  };

  const handleCheckMobileScreen = () => {
    const isMobile = checkMobileScreen();

    if (isMobile) push('/search');
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <Input
        className={cn(styles.input, {
          [styles.white]: isCatalogRoute,
          [styles.default]: !isCatalogRoute || (isCatalogRoute && isScrolledFar),
        })}
        variant="secondary"
        isSearch
        placeholder="Search"
        onClick={handleCheckMobileScreen}
        {...register('search')}
      />
    </form>
  );
};
