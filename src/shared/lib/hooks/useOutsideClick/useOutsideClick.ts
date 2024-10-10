import { useEffect, MutableRefObject } from 'react';

/**
 * Выполняет коллбэк при клике за пределами указанного элемента.
 */
export const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => unknown
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref?.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};
