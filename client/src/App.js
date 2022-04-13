import './App.css';
import Threads from './components/Threads/Threads'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import {useState, useEffect} from 'react'

function App() {
  const [newCommentId, setNewCommentId] = useState(5);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteBtnId, setDeleteBtnId] = useState(0);
  let importantIDs = {
    "deleteBtn": {get: deleteBtnId, set: setDeleteBtnId},
    "newComment": {get: newCommentId, set: setNewCommentId}
  }

  useEffect(() => {
    const modal = document.querySelector(".modal");
    if (showDeleteModal) {
      modal.showModal();
    } else {
      modal.close();
    }
  })

  return (
    <div className="app">
      <Modal 
      showDeleteModal={{get: showDeleteModal, set: setShowDeleteModal}}
      deleteBtnId={importantIDs.deleteBtn} />
      <main className="app__main">
        <Threads 
        showDeleteModal={{get: showDeleteModal, set: setShowDeleteModal}}
        importantIDs={importantIDs} />
        <Form 
        importantIDs={importantIDs} />
        </main>
      <Footer />
    </div>
  );
}

export default App;


/*

LEARNINGS:
1. Dynamic image imports (place them in public folder)
2. Dialog tag in HTML for modals
3. Managing complicated data in redux (updating object = overriding old object instead of changing specific properties)
4. Complex conditional rendering
  - Elements can be stored in a variable and that's what's passed in render
  - See Footer component
5. How to use textarea
6. Access global redux states from non-component functions
7. Pass states to utility functions for clean code

TO-DO:

1. Responsive design
2. Integrate moment for accurate time stamps
*/