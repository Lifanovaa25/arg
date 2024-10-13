
import styles from './CategoriesList.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useState } from 'react';

const arr = [
    { title: 'title 1', href: '/', id: 1 },
    { title: 'title 2', href: '/', id: 2 },
    { title: 'title 3', href: '/', id: 3 },
    { title: 'title 4', href: '/', id: 4 },
    { title: 'title 5', href: '/', id: 5 },
    { title: 'title 6', href: '/', id: 6 },
  ];
interface CatListProps {
    title?: string | undefined;
    link?:string;
    index?:number
}


export const LinksBlock = (props: CatListProps) => {
   const {title,link,index} = props
    const [activeTab, setActiveTab] = useState('');
    const [visible, setVisible] = useState(false);

    return (

        <div className={styles.links}>
     
            <div className={styles.links_item}>
             {props.title &&    <h3 className={styles.links_title}>Manufacturers</h3>}
                {arr.map((item, index) =>
                    <>  <Link href={item.href}
                        className={cn(styles.link, {
                            [styles.active]: activeTab === item.title,
                        })}
                        style={index > 3 && !visible ? { display: 'none' } : { display: 'block' }}
                        onClick={() => setActiveTab(item.title)}>{item.title}
                    </Link>
                        {index == 3 && !visible &&
                            <div className={styles.show_more}
                                onClick={() => setVisible(true)}>Show more
                                <span className={styles.all_items}>(45) Items</span>
                            </div>
                        }

                    </>

                )}


            </div>
        </div>

    );
};
