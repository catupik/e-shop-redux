function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button className="modalBtn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
