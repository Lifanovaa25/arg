import { ReactNode } from 'react';

interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};
