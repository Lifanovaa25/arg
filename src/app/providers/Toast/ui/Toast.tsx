import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ModalProviderProps) => {
  return (
    <>
      {children}
      <ToastContainer draggable hideProgressBar />
    </>
  );
};
