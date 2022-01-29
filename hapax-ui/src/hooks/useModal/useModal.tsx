import { Modal, Text} from "@nextui-org/react";
import { FC, useState } from "react";

export type ModalState = {
  selectedModal?: string;
}

export type ModalContent = Record<string, FC>

export type UseModalOptions = {
  selectedModal?: string;
}

export const useModal = (modalContent: ModalContent, options: UseModalOptions = {}) => {
  const { selectedModal } = options;

  const [modalState, setModalState] = useState<ModalState>({ selectedModal });

  const setSelectedModal = (selectedModal: ModalState['selectedModal']) => setModalState({
    ...modalState,
    selectedModal,
  })

  const SelectedComponent = !!modalState.selectedModal ? modalContent[modalState.selectedModal] : () => (<></>)
  const DisplayedModal = () => (
    <Modal
      closeButton
      open={!!modalState.selectedModal}
      onClose={() => setSelectedModal(undefined)}
    >
      <Modal.Header>
        <Text size={25} h2 transform="capitalize">{modalState.selectedModal}</Text>
      </Modal.Header>
      <SelectedComponent />
    </Modal>
  )

  return {
    modalState,
    setSelectedModal,
    DisplayedModal
  }
};

export default useModal;