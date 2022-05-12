import "./Modal.css";
import Overlay from "components/Overlay/Overlay";
import close from "assets/icons/close.svg"

function Modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) closeModal();
  };

  return (
    <Overlay overlayClick={closeModal}>
      <div className="Modal" onClick={handleClick}>
        <span className="Modal__close" onClick={(e) => handleClick(e, true)}>
          <img src={close} width="40px" alt="Fechar Modal" />
        </span>
        <div className="Modal__body">{children}</div>
      </div>
    </Overlay>
  );
}

export default Modal;
