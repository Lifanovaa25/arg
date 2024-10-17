import Modal from 'react-modal';
import Title from '@/src/shared/ui/Title/Title';
import Button from '@/src/shared/ui/Button/Button';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';
import Close from '/public/svg/close.svg';
import { CartModalProps } from './types';
import styles from './Modal.module.scss';

export const CartModal = (props: CartModalProps) => {
  const {
    isModalOpen,
    setIsModalOpen,
    setIdProduct,
    handleClearCart,
    handleRemoveCart,
    idProduct,
  } = props;

  useBodyOverflow(isModalOpen);

  const handleDispatch = () => {
    if (idProduct) {
      handleRemoveCart();
    } else {
      handleClearCart();
    }
  };

  const hadnelCloseModal = () => {
    setIsModalOpen(false);
    setIdProduct(null);
  };

  const modalTitle = idProduct ? 'Remove product' : 'Remove products';
  const modalText = idProduct
    ? 'Are you sure you want to remove this product from your cart?'
    : 'Are you sure you want to remove these products from your cart?';

  return (
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={hadnelCloseModal}
      contentLabel={modalTitle}
    >
      <Title size="h4" variant="secondary">
        {modalTitle}
      </Title>
      <button onClick={hadnelCloseModal} aria-label="Close">
        <Close width="24" height="24" color="var(--black)" />
      </button>
      <div className={styles.line}></div>
      <p className={styles.text}>{modalText}</p>
      <Button className={styles.btn} onClick={handleDispatch} aria-label="Remove">
        Remove
      </Button>
    </Modal>
  );
};
