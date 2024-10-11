// DropDown.tsx

import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';
import { DropDownProps, MenuTab, MenuCategory, MenuType, ApiResponse } from './types';
import Close from '/public/svg/close.svg';
import Chevron from '/public/svg/chevron.svg';
import styles from './DropDown.module.scss'; // Исправлено название файла
import { categoryStore } from '@/src/app/providers/Store/config/store';

export const DropDown = ({ isDropDown, setIsDropDown }: DropDownProps) => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [activeName, setActiveName] = useState<string>('');
  const [activeTypes, setActiveTypes] = useState<MenuType[]>([]);
  const [showTypes, setShowTypes] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menuData, setMenuData] = useState<MenuTab[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { path, onAddPathName } = categoryStore();

  useBodyOverflow(isDropDown);

  // Функция для запроса данных из API
  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://royal-equipment.ae/api/GetMenuItems');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result: ApiResponse = await response.json();

      if (result.isSuccess && result.value) {
        const formattedData: MenuTab[] = result.value.map((tabData) => ({
          tabName: tabData.catalogTabName,
          categories: tabData.categories.map((category) => ({
            categoryName: category.categoryName,
            categoryUrl: category.categoryUrl,
            types: category.types.map((type) => ({
              typeName: type.typeName,
              typeUrl: type.typeUrl,
            })),
          })),
        }));

        setMenuData(formattedData);
        if (formattedData.length > 0) {
          setActiveTab(formattedData[0].tabName);
          if (formattedData[0].categories.length > 0) {
            setActiveName(formattedData[0].categories[0].categoryName);
            setActiveTypes(formattedData[0].categories[0].types);
          }
        }
      } else {
        console.error('Error fetching menu items:', result.error);
        setError(result.error.description || 'Ошибка при загрузке меню');
      }
    } catch (error: any) {
      console.error('Failed to fetch menu items:', error);
      setError(error.message || 'Неизвестная ошибка');
    }
  };

  // Запрашиваем данные при первом рендере
  useEffect(() => {
    fetchMenuItems();
  }, []);

  const handleTabChange = (tabName: string) => {
    const selectedTabData = menuData.find((tab) => tab.tabName === tabName);
    if (selectedTabData) {
      setActiveTab(selectedTabData.tabName);
      if (selectedTabData.categories.length > 0) {
        setActiveName(selectedTabData.categories[0].categoryName);
        setActiveTypes(selectedTabData.categories[0].types);
      } else {
        setActiveName('');
        setActiveTypes([]);
      }
      setShowTypes(false); // Скрываем подкатегории при смене вкладки
    }
  };
  function handlerMenuClose(catUrl: string) {
    handlerSavePath(catUrl)
    setIsDropDown(false)

  }
  const handleChangeCategory = (category: MenuCategory) => {
    setActiveName(category.categoryName);
    setActiveTypes(category.types);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Получаем категории для активной вкладки
  const currentTabData = menuData.find((tab) => tab.tabName === activeTab);
  const currentCategories: MenuCategory[] = currentTabData
    ? currentTabData.categories
    : [];

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.menuActive]: isDropDown,
      })}
    >
      <Title className={styles.title} size="h3">
        Catalog
      </Title>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.tabs}>
        {menuData.map((tab) => (
          <div
            key={tab.tabName}
            className={cn(styles.tab, { [styles.tabActive]: activeTab === tab.tabName })}
            onClick={() => handleTabChange(tab.tabName)}
          >
            {tab.tabName}
          </div>
        ))}
      </div>

      <div className={styles.ulWrapper}>
        <ul className={styles.ul}>
          {currentCategories.map((category) => (
            <li
              key={category.categoryName}
              className={cn(styles.category, {
                [styles.active]: category.categoryName === activeName,
              })}
              onMouseEnter={() => handleChangeCategory(category)}
            >
              <Link className={styles.categoryLink} href={category.categoryUrl} onClick={() => handlerMenuClose(category.categoryUrl)} >
                {category.categoryName}
              </Link>
              <Chevron
                className={styles.icon}
                width="18"
                height="18"
                color="var(--white)"
              />
            </li>
          ))}
        </ul>

        <ul className={styles.ul}>
          {activeTypes.map((type) => (
            <li key={type.typeName} className={styles.typeName}>
              <Link href={type.typeUrl}>
                {type.typeName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.mobileUlWrapper}>
        {!showTypes && (
          <ul className={styles.ul}>
            {currentCategories.map((category) => (
              <li
                key={category.categoryName}
                className={cn(styles.category, {
                  [styles.active]: category.categoryName === activeName,
                })}
                onClick={() => handleChangeCategory(category)}
              >
                <Link className={styles.categoryLink} href={category.categoryUrl}>
                  {category.categoryName}
                </Link>
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
              Назад
            </button>

            <ul className={styles.ul}>
              {activeTypes.map((type) => (
                <li key={type.typeName} className={styles.typeName}>
                  <Link href={type.typeUrl}>
                    {type.typeName}
                  </Link>
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
