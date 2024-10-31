'use client'

import dynamic from 'next/dynamic';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './AllMiningEquipment.module.scss';
import { getPageProductsItems } from '@/src/app/api/products/productsAPI';
import { usePathname } from 'next/navigation';
import { LinkListItem, LinkListProps } from '@/src/widgets/CategoriesList/LinksBlock';
import { CardsList } from '@/src/widgets/CardsList/CardsList';
import { CategoriesList } from '@/src/widgets/CategoriesList/CategoriesList';
const Swiper = dynamic(() => import('swiper/react').then((module) => module.Swiper));
const SwiperSlide = dynamic(() => import('swiper/react').then((module) => module.SwiperSlide));
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';
import { Loading } from '@/src/widgets/Loading';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';

interface Product {
  value: {
    category: {
      label: string;
      title: string;
      link: string;
      titleToEnd: boolean;
      items: LinkListItem[];
    };

    filters: LinkListProps[];
    items: {
      id: number;
      image: string;
      label: string;
      price: number;
      props: string[][];
      link: string;
      toCart: boolean;
      articul: string;
    }[];
    totalPages: number;
    aboutManufacturer: {
      title: string;
      text: string;
      personImg: string;
      personName: string;
      personPost: string;
    };
    SeoTitle: string,
    SeoDescription: string,
    SeoCanonical: string
  };
}
interface ICard {

  Id: number;
  Link: string;
  Label: string;
  Title: string;


}
const AllMining: React.FC = () => {
  const pathname = usePathname(); // Получаем путь
  const [data, setData] = useState<Product['value'] | null>(null); // Данные из API
  const [pageNum, setPageNum] = useState(1)
  const [activeTab, setActiveTab] = useState(1);
  const { params } = useCart();
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [pagesCount, setPagesCount] = useState<number[]>([1])
  const [pageSize, setPageSize] = useState(20)

  const { sort } = useCart()


  useEffect(() => {

    const fetchData = async (): Promise<void> => {
      const result = await getPageProductsItems({
        Page: pageNum,
        PageSize: pageSize,
        PageUrl: pathname,
        Params: params,
        Sort: sort
      });
      if (result) {
        const r: Product = result as unknown as Product;
        setData(r.value);
        setLoading(false)
      }
    };
    setLoading(true)
    fetchData()



  }, [pageNum, params, pageSize, pathname, sort]);
  useEffect(() => {

    setPagesCount(pagCount(Number(data?.totalPages)))
    console.log(pagesCount)
  }, [data]);
  function pagCount(totalPages: number) {
    let array: number[] = []
    for (let i = 0; i < totalPages; i++) {
      array.push(i)
    }
    return array
  }
  function PageIncrement(p: number) {
    setPageNum(p)
    setActiveTab(p)
  }
  return (
    <>
      {loading && <Loading />}

      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            <CategoriesList category={data?.category} filters={data?.filters} title={data?.category.label} />
            <CardsList subcategories={data?.items} />
          </div>
          <div className={styles.bottom}>
            <div className={styles.pagination}>

              {/* {pagesCount.length != 1 && */}
              <Swiper
                modules={[Navigation]}
                navigation
                pagination
                slidesPerView="auto"
                slidesPerGroup={1}
                spaceBetween={14}
                speed={500}

                breakpoints={{
                  768: {
                    // centeredSlides: true,
                    loop: false,
                  },
                  0: {
                    loop: true,
                    centeredSlides: true,
                  },
                }}
              >
                {pagesCount?.map((item, index) =>
                  <SwiperSlide key={index} className={styles.pag_wrap}>

                    <div
                      className={cn(styles.pag_btn, {
                        [styles.active]: activeTab === index + 1,
                      })}
                      onClick={() => PageIncrement(index + 1)}> {index + 1} </div>
                  </SwiperSlide>
                )}
              </Swiper>
              {/* } */}
            </div>
            <div className={styles.prodPerPage}>
              Products per page:
              <div
                className={cn(styles.span, {
                  [styles.active_span]: pageSize === 20,
                })}
                onClick={() => setPageSize(20)}>20
              </div>
              <div
                className={cn(styles.span, {
                  [styles.active_span]: pageSize === 30,
                })}
                onClick={() => setPageSize(30)}>30
              </div>
              <div
                className={cn(styles.span, {
                  [styles.active_span]: pageSize === 40,
                })}
                onClick={() => setPageSize(40)}>40
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllMining
