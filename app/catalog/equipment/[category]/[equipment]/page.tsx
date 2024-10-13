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
interface Product {
  value: {
    category: {
      label: string;
      title: string;
      link: string;
      titleToEnd: boolean;
      items: LinkListItem[];
    };
    // filters: ProductFilters; 
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
  };
}
interface ICard {

  Id: number;
  Link: string;
  Label: string;
  Title: string;


}
const AllMiningEquipment: React.FC = () => {
  const pathname = usePathname(); // Получаем путь
  const [data, setData] = useState<Product['value'] | null>(null); // Данные из API
  const [pageNum, setPageNum] = useState(1)
  const [activeTab, setActiveTab] = useState(1);

  const fetchData = async (): Promise<void> => {
    const result = await getPageProductsItems({
      Page: pageNum,
      PageSize: 10,
      PageUrl: pathname,
      Params: [],
      Sort: 1
    });
    if (result) {
      const r: Product = result as unknown as Product;
      setData(r.value);
    }
  };
  useEffect(() => {
    
    if (data === null) {
      fetchData()
    }
  }, [pathname, data]);
  useEffect(() => {
    
      fetchData()
    
  }, [pageNum]);
  function PageIncrement(count: number | undefined) {
    if (pageNum <= Number(count) ) {
      setPageNum(pageNum + 1)
      setActiveTab(pageNum)
    }
   
    return

  }
  return (
    <>
      <section>
        <div className="big-container">
          <div className={styles.wrapper}>
            <CategoriesList category={data?.category} filters={data?.filters} title={data?.category.label} />
            <CardsList subcategories={data?.items} />

          </div>


          <div className={styles.pagination}>
            {/* <div className={styles.pag_wrap}> */}
            <Swiper
              modules={[Navigation]}
              navigation

              slidesPerView="auto"
              slidesPerGroup={1}
              spaceBetween={14}
              speed={500}
              breakpoints={{
                768: {
                  loop: false,
                },
                0: {
                  loop: true,
                  centeredSlides: true,
                },
              }}
            >
              {Array(data?.totalPages).fill(
                <SwiperSlide className={styles.pag_wrap}>

                  <div 
                    className={cn(styles.pag_btn, {
                      [styles.active]: activeTab === pageNum,
                    })}
                    onClick={() => PageIncrement(data?.totalPages)}> {pageNum} </div>
                </SwiperSlide>

              )}
            </Swiper>

          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};
export default AllMiningEquipment
