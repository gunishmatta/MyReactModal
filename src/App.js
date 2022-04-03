import { useState } from "react";
import Modal from "./components/Modal";
import "./styles.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowModal(!showModal)}>Show Modal </button>
      <Modal
        title="My Modal"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <h5> This is my modal </h5>
      </Modal>
    </div>
  );
}
