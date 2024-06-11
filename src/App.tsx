import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Modal from './components/Modal/Modal'
import Alert from './components/Alert/Alert'


const App=()=> {

  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false);

  const buttons = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel')},
    {type: 'light', label: 'Hello!', onClick: () => console.log('clicked Hello')},
    {type: 'dark', label: 'World', onClick: () => console.log('clicked World')},
    {type: 'success', label: 'I am green', onClick: () => console.log('I am green')},
  ]

  return (
    <>
      <Alert type="warning" onDismiss={true}>
        This is a warning type alert
      </Alert>
      <Alert type="success">
        This is a success type alert
      </Alert>
      <button className="btn btn-primary me-3" onClick={() => setShowModal(true)}>Show modal</button>
      <Modal show={showModal} onClose={cancel} title="Some kinda modal title" buttons={buttons}>
        <p>This is modal content</p>
      </Modal>
    </>
  )
}

export default App
