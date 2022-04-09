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
      deleteBtnId={{get: deleteBtnId, set: setDeleteBtnId}} />
      <main className="app__main">
        <Threads 
        newCommentId={{get: newCommentId, set: setNewCommentId}}
        showDeleteModal={{get: showDeleteModal, set: setShowDeleteModal}}
        deleteBtnId={{get: deleteBtnId, set: setDeleteBtnId}} />
        <Form 
        newCommentId={{get: newCommentId, set: setNewCommentId}} />
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

TO-DO:
1. Popup delete modal
2. Delete functionality
3. Edit functionality
4. Responsive design
5. Clean props and states (remove redundant ones)
6. Modularize code (export some component functions for cleaner code)
7. Form validation (prevent empty comments, delete whole username or prevent it from being deleted)
*/