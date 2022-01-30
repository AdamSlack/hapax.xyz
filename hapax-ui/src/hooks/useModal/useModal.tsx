import { Modal, Text} from "@nextui-org/react";
import { FC, useState } from "react";

export type ModalState = {
  selectedModal?: string;
}

export type ModalContent = Record<string, FC>

export type UseModalOptions = {
  selectedModal?: string;
  showTitle?: boolean
}

const defaultModalOptions: UseModalOptions = {
  selectedModal: undefined,
  showTitle: true,
}


export const useModal = (modalContent: ModalContent, options: UseModalOptions = defaultModalOptions) => {
  const { selectedModal, showTitle } = options;

  const [modalState, setModalState] = useState<ModalState>({ selectedModal });

  const setSelectedModal = (selectedModal: ModalState['selectedModal']) => {
    console.log(selectedModal)
    setModalState({
      ...modalState,
      selectedModal,
    })
  }

  const closeModal = () => setSelectedModal(undefined)

  const SelectedComponent = !!modalState.selectedModal ? modalContent[modalState.selectedModal] : () => (<></>)
  const DisplayedModal = () => (
    <Modal
      closeButton
      open={!!modalState.selectedModal}
      onClose={closeModal}
    >
      {
        showTitle && <Modal.Header>
          <Text size={25} h2 transform="capitalize">{modalState.selectedModal}</Text>
        </Modal.Header>
      }
      <SelectedComponent />
    </Modal>
  )

  return {
    modalState,
    closeModal,
    setSelectedModal,
    Modal: DisplayedModal
  }
};

export default useModal;