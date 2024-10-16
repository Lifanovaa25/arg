'use client'


import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './AllMiningEquipment.module.scss';
import { getPageProductsItems } from '@/src/app/api/products/productsAPI';
import { usePathname } from 'next/navigation';
import { LinkListItem, LinkListProps, ProductFilters } from '@/src/widgets/CategoriesList/LinksBlock';
import { CardsList } from '@/src/widgets/CardsList/CardsList';
import { CategoriesList } from '@/src/widgets/CategoriesList/CategoriesList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.scss';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { Loading } from '@/src/widgets/Loading';
import DynamicSeoHeader from '@/src/widgets/dinamicSeoHeader';
import Head from 'next/head';
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
  const { setParams, sort, onClearParams, params } = productCartStore();
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [pagesCount, setPagesCount] = useState<number[] | null>([])
  const [pageSize, setPageSize] = useState(20)

  const [SeoTitle, setSeoTitle] = useState('')
  const [SeoDescription, setSeoDescription] = useState('')


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
      pages(r.value.totalPages)
      setSeoTitle(r.value.SeoTitle)
      setSeoDescription(r.value.SeoDescription)
 
    }
  };

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [pageNum, params, sort, pageSize]);

  function PageIncrement(p: number) {

    setPageNum(p)
    setActiveTab(p)
  }
  function pages(p: number) {
    let arr: number[] = []
    let i = 0
    while (Number(p) > i) {
      i++
      arr.push(i)
    }
    console.log(arr)
    setPagesCount(arr)
  }
  return (
    <>  
     {/* <DynamicSeoHeader title={SeoTitle} description={SeoDescription} /> */}
     
     <Head>
      <title>{SeoTitle}</title>
      <meta name={SeoDescription}
        content={SeoDescription} />
      <meta property="og:title"
        content={SeoTitle} />
      <meta property="og:description"
        content={SeoDescription} />
        <meta property="og:title"
             content="My Page Title" />     

    </Head>
      {loading && <Loading />}

      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            <CategoriesList category={data?.category} filters={data?.filters} title={data?.category.label} />
            <CardsList subcategories={data?.items} />

          </div>

          <div className={styles.bottom}>
            <div className={styles.pagination}>
              <Swiper
                modules={[Navigation]}
                navigation

                slidesPerView="auto"
                slidesPerGroup={1}
                spaceBetween={14}
                speed={500}
                breakpoints={{
                  768: {
                    // loop: false,
                    centeredSlides: true,

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
