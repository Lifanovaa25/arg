
import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


export interface LinkListItem{
  title:string;
  link:string;
  id: number;
  label:string;
}


export interface ProductFilters{
    name: string;
    allItems: string;
    radio: boolean;
    hideAfter: boolean;
    ignore: boolean;
    items: LinkListItem[];
  }

export interface LinkListProps {
    itemsCount?: number;
    label?:string;
    items?:LinkListItem[];
}
  


export const LinksBlock = (props: LinkListProps) => {
   const {label, items, itemsCount} = props
    const [activeTab, setActiveTab] = useState('');
    const [visible, setVisible] = useState(false);
    const pathname = usePathname();

    return (

        <div className={styles.links}>
     
            <div className={styles.links_item}>
             {props.label !== undefined && <h3 className={styles.links_title}>{props.label}</h3>}
                {items != undefined && items.map((item, index) =>
                    <>  <Link href={item.link}
                        className={cn(styles.link, {
                            [styles.active]: pathname+'/' === item.link,
                        })}
                        style={index > 3 && !visible ? { display: 'none' } : { display: 'block' }}
                        onClick={() => setActiveTab(item.label)}>{item.label}
                    </Link>
                        {index == 3 && !visible &&
                            <div className={styles.show_more}
                                onClick={() => setVisible(true)}>Show more
                                <span className={styles.all_items}>({props.itemsCount !== undefined ? props.itemsCount-4: 0}) Items</span>
                            </div>
                        }

                    </>

                )}


            </div>
        </div>

    );
};
