export interface CartModalProps {
  isModalOpen: boolean;
  idProduct: number | null;
  handleRemoveCart: () => void;
  handleClearCart: () => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setIdProduct: (idProduct: null) => void;
}
