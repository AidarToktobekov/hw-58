import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Modal from './components/Modal/Modal'
import Alert from './components/Alert/Alert'


const App=()=> {

  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false);


  return (
    <>
      <Alert type="warning" onDismiss={true}>
        This is a warning type alert
      </Alert>
      <Alert type="success">
        This is a success type alert
      </Alert>
      <button className="btn btn-primary me-3" onClick={() => setShowModal(true)}>Show modal</button>
      <Modal show={showModal} onClose={cancel} title="Some kinda modal title">
        <p>This is modal content</p>
      </Modal>
    </>
  )
}

export default App
