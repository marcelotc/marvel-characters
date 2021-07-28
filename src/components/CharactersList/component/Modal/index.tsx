import Modal from 'react-modal';
import { Container, Content, Deitails } from './styles';
import { FaTimes } from 'react-icons/fa';
import { CharactersInterface } from '../../component/types';
import './styles.css';
interface ModalInterface {
  modalIsOpen: boolean;
  closeModal: () => void;
  characterDetails: CharactersInterface | undefined;
}

export function ModalComponent({ modalIsOpen, closeModal, characterDetails }: ModalInterface) {
    return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-responsive"
      >
        <Content>
          <FaTimes onClick={closeModal} />
          <h1>Detalhes do personagem</h1>
          <h5>{characterDetails?.name}</h5>
          <Deitails>
            <h4>Aparições</h4>
            {characterDetails?.series.items.map(serie => (
              <p>{serie.name}</p>
            ))}
          </Deitails>
          <Deitails>
            <h4>Quadrinhos</h4>
            {characterDetails?.stories.items.map(storie => (
              <p>{storie.name}</p>
            ))}
          </Deitails>
        </Content>
      </Modal>
    </Container>
    )
}
