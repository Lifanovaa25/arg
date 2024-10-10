'use client';

import { useState } from 'react';
import cn from 'classnames';
import Title from '@/src/shared/ui/Title/Title';
import { Equipment } from '../Equipment/Equipment';
import { Industry } from '../Industry/Industry';
import styles from './Catalog.module.scss';

const tabs = ['Equipment', 'Industry'];

export const Catalog = () => {
  const [activeTab, setActiveTab] = useState('Equipment');

  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <Title size="h1" variant="secondary">
            Product catalog
          </Title>

          <div className={styles.tabs}>
            {tabs.map((item) => (
              <div
                key={item}
                className={cn(styles.tab, {
                  [styles.active]: activeTab === item,
                })}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {activeTab === 'Equipment' ? <Equipment /> : <Industry />}
      </div>
    </section>
  );
};
