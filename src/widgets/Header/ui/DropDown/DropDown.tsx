import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';
import { useMenuItems } from '../../model/hooks/useMenuItems';
import { DropDownProps, MenuItem, ItemType } from './types';
import Close from '/public/svg/close.svg';
import Chevron from '/public/svg/chevron.svg';
import styles from './Dropwodn.module.scss';
import { categoryStore } from '@/src/app/providers/Store/config/store';

const tabs = ['Equipment', 'Industry'];

export const DropDown = (props: DropDownProps) => {
  const { isDropDown, setIsDropDown } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeName, setActiveName] = useState('');
  const [activeTypes, setActiveTypes] = useState<ItemType[]>([]);
  const [showTypes, setShowTypes] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { path, onAddPathName } = categoryStore();


  const { data } = useMenuItems();
  useBodyOverflow(isDropDown);
  console.log({ data })
  const currentCategories: MenuItem[] =
    data?.[activeTab === 'Equipment' ? 0 : 1]?.categories || [];
  function capitalizeFirstLetter(string: string) {

    string = string.replace(' ', '-')
    console.log(string)
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  const handleTabChange = (tabIndex: number) => {
    const selectedTabData = data[tabIndex];
    setActiveTab(tabs[tabIndex]);
    setActiveName(selectedTabData.categories[0].categoryName);
    setActiveTypes(selectedTabData.categories[0].types);
  };

  const handleChangeCategory = ({ categoryName, types }: MenuItem) => {
    setActiveName(categoryName);
    setActiveTypes(types);

    if (isMobile) {
      setShowTypes(true);
    }
  };
  const handlerSavePath = (path: string) => {
    onAddPathName(path)
    // alert(path)
  }
  const handleMobileBackToCategories = () => {
    setShowTypes(false);
  };

  useEffect(() => {
    if (data) {
      const initialTabData = data[0];
      setActiveName(initialTabData.categories[0].categoryName);
      setActiveTypes(initialTabData.categories[0].types);
    }
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.menuActive]: isDropDown,
      })}
    >
      <Title className={styles.title} size="h3">
        Catalog
      </Title>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={cn(styles.tab, { [styles.tabActive]: activeTab === tab })}
            onClick={() => handleTabChange(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className={styles.ulWrapper}>
        {
          <ul className={styles.ul}>
            {currentCategories.map(({ categoryName, types }) => (
              <li
                key={categoryName}
                className={cn(styles.category, {
                  [styles.active]: categoryName === activeName,
                })}
              // onClick={() => handleChangeCategory({ categoryName, types })}
              >

                <Link href={`/catalog/${capitalizeFirstLetter(activeTab)}/${capitalizeFirstLetter(categoryName)}`} > {categoryName}</Link>

                <Chevron
                  className={styles.icon}
                  width="18"
                  height="18"
                  color="var(--white)"
                />
              </li>
            ))}
          </ul>
        }

        <ul className={styles.ul}>
          {activeTypes.map(({ typeName, typeUrl }) => (
            <li key={typeName} className={styles.typeName}>
              <Link href={typeUrl} onClick={() => handlerSavePath(typeUrl)}>{typeName}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.mobileUlWrapper}>
        {!showTypes && (
          <ul className={styles.ul}>
            {currentCategories.map(({ categoryName, types }) => (
              <li
                key={categoryName}
                className={cn(styles.category, {
                  [styles.active]: categoryName === activeName,
                })}
                onClick={() => handleChangeCategory({ categoryName, types })}
              >
                {categoryName}
                <Chevron
                  className={styles.icon}
                  width="18"
                  height="18"
                  color="var(--white)"
                />
              </li>
            ))}
          </ul>
        )}

        {showTypes && (
          <>
            <button className={styles.backBtn} onClick={handleMobileBackToCategories}>
              <Chevron
                className={styles.mobileIcon}
                width="18"
                height="18"
                color="var(--white)"
              />
            </button>

            <ul className={styles.ul}>
              {activeTypes.map(({ typeName, typeUrl }) => (
                <li key={typeName} className={styles.typeName}>
                  <Link href={typeUrl} >{typeName}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <button className={styles.mobileBtn} onClick={() => setIsDropDown(false)}>
        <Close width="22" height="22" color="var(--white)" />
      </button>
    </div>
  );
};
