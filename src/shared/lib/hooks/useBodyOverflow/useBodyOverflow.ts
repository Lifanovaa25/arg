import { useEffect } from 'react';

/**
 * Отключает и восстановливает скролл страницы в зависимости от состояния компонента.
 */
export const useBodyOverflow = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
};
