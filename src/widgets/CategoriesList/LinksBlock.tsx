import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Params } from '@/src/shared/types/productCard';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';

export interface LinkListItem {
  title: string;
  link: string;
  id: number;
  label: string;
}
export interface ProductFilters {
  name: string;
  allItems: string;
  radio: boolean;
  hideAfter: boolean;
  ignore: boolean;
  items: LinkListItem[];
}

export interface LinkListProps {
  itemsCount?: number;
  label?: string;
  items?: LinkListItem[];
}

export const LinksBlock = (props: LinkListProps) => {
  const { label, items, itemsCount } = props;
  const [activeTab, setActiveTab] = useState(props.label);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const [productQuantity, setProductQuantity] = useState<Params | undefined>();

  const { onChangeParams, params } = useCart();
  const [showMore, setShowMore] = useState(3);
  const handleClick = (tab: string, val: string) => {
    setActiveTab(tab);
    let key = String(props.label);
    let value = String(val);
    onChangeParams({ key, value });
  };
  const handlerShowMore = () => {
    setVisible(true);
    setShowMore(showMore + 3);
  };
  return (
    <div className={styles.links}>
      <div className={styles.links_item}>
        {props.label !== undefined && (
          <h3 className={styles.links_title}>{props.label}</h3>
        )}
        {items != undefined &&
          props.label === undefined &&
          items.map((item, index) => (
            <>
              <Link
                key={index}
                href={item.link}
                className={cn(styles.link, {
                  [styles.active]: pathname + '/' === item.link,
                })}
                style={index > showMore ? { display: 'none' } : { display: 'block' }}
                onClick={() => setActiveTab(item.label)}
              >
                {item.label}
              </Link>
              {props.itemsCount === undefined && index === showMore && (
                <div className={styles.show_more} onClick={() => handlerShowMore()}>
                  Show more
                  <span className={styles.all_items}>
                    (
                    {props.itemsCount !== undefined ? props.itemsCount - showMore - 1 : 0}
                    ) Items
                  </span>
                </div>
              )}
            </>
          ))}

        {items != undefined &&
          props.label !== undefined &&
          items.map((item, index) => (
            <>
              <div
                key={index}
                className={cn(styles.link, {
                  [styles.active]: activeTab === item.label,
                })}
                style={index > showMore ? { display: 'none' } : { display: 'block' }}
                onClick={() => handleClick(item.label, item.link)}
              >
                {item.label}
              </div>
              {props.itemsCount === undefined && index == showMore && (
                <div className={styles.show_more} onClick={() => handlerShowMore()}>
                  Show more
                  <span className={styles.all_items}>
                    (
                    {props.itemsCount !== undefined ? props.itemsCount - showMore - 1 : 0}
                    ) Items
                  </span>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};
