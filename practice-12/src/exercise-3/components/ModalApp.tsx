import { useState, Suspense, lazy } from "react";
import "../styles/ModalApp.css";

const Modal = lazy(() =>
  import("./Modal").then((module) => ({ default: module.Modal }))
);

export const ModalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal-app">
      <div className="modal-app__container">
        <h1 className="modal-app__title">Lazy Loaded Modal</h1>

        <button
          className="modal-app__button"
          onClick={handleOpenModal}
          type="button"
        >
          Open Modal
        </button>

        {isModalOpen && (
          <Suspense
            fallback={
              <div className="modal-app__loading">
                <div className="modal-app__spinner"></div>
                <p>Loading modal...</p>
              </div>
            }
          >
            <Modal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              title="Lazy Loaded Modal"
            >
              <div className="modal-app__content">
                <h3 className="modal-app__content-title">Modal Loaded!</h3>
              </div>
            </Modal>
          </Suspense>
        )}
      </div>
    </div>
  );
};
