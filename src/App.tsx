import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Modal from './components/Modal/Modal'


const App=()=> {

  const [showModal, setShowModal] = useState(false);
  const cancel = () => setShowModal(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show modal</button>
      <Modal show={showModal} onClose={cancel} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>
    </>
  )
}

export default App
