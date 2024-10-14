
import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { SetStateAction, useState } from 'react';
import { usePathname } from 'next/navigation';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { Params } from '@/src/shared/types/productCard';


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
    const { label, items, itemsCount } = props
    const [activeTab, setActiveTab] = useState(props.label);
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();
    const [productQuantity, setProductQuantity] = useState<Params | undefined>()
    const { setParams, params } = productCartStore();

    const handleClick = (tab: string, val: string) => {
        setActiveTab(tab)
        let key = String(props.label)
        let value = String(val)
        // setProductQuantity(props.label, val,val)
        setParams({ key, value })
      
    };
    return (

        <div className={styles.links}>

            <div className={styles.links_item}>

                {props.label !== undefined && <h3 className={styles.links_title}>{props.label}</h3>}
                {items != undefined && props.label === undefined && items.map((item, index) =>
                    <>
                        <Link
                        key={index}
                         href={item.link}
                            className={cn(styles.link, {
                                [styles.active]: pathname + '/' === item.link,
                            })}
                            style={index > 3 && !visible ? { display: 'none' } : { display: 'block' }}
                            onClick={() => setActiveTab(item.label)}>{item.label}
                        </Link>
                        {index == 3 && !visible &&
                            <div className={styles.show_more}
                                onClick={() => setVisible(true)}>Show more
                                <span className={styles.all_items}>({props.itemsCount !== undefined ? props.itemsCount - 4 : 0}) Items</span>
                            </div>
                        }

                    </>

                )}

                {items != undefined && props.label !== undefined && items.map((item, index) =>
                    <>
                        <div
                            key={index}
                            className={cn(styles.link, {
                                [styles.active]: activeTab === item.label,
                            })}
                            style={index > 3 && !visible ? { display: 'none' } : { display: 'block' }}
                            onClick={() => handleClick(item.label, item.link)}>{item.label}
                        </div>
                        {index == 3 && !visible &&
                            <div className={styles.show_more}
                                onClick={() => setVisible(true)}>Show more
                                <span className={styles.all_items}>({props.itemsCount !== undefined ? props.itemsCount - 4 : 0}) Items</span>
                            </div>
                        }

                    </>

                )}


            </div>
        </div>

    );
};
