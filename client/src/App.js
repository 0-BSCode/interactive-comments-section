import './App.css';
import Threads from './components/Threads/Threads'
import FormDesktop from './components/FormDesktop/Form'
import FormMobile from './components/FormMobile/Form'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchComments } from './actions/comments';

function App() {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteBtnId, setDeleteBtnId] = useState(0);
  let width = window.innerWidth;

  let importantIDs = {
    "deleteBtn": {get: deleteBtnId, set: setDeleteBtnId},
  }

  useEffect(() => {
    const modal = document.querySelector(".modal");
    if (showDeleteModal) {
      modal.showModal();
    } else {
      modal.close();
    }

  })

  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch])

  return (
    <div className="app">
      <Modal 
      showDeleteModal={{get: showDeleteModal, set: setShowDeleteModal}}
      deleteBtnId={importantIDs.deleteBtn} />
      <div className="loader" />
      <main className="app__main">
        <Threads 
        showDeleteModal={{get: showDeleteModal, set: setShowDeleteModal}}
        importantIDs={importantIDs} />
        {
          width < 1024?
          <FormMobile
          importantIDs={importantIDs} />:
          <FormDesktop 
          importantIDs={importantIDs} />          
        }
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
8. Render components based on screen size
9. Stylesheets overriding each other despite not being used as an import
10. Sending objects via express patch

TO-DO:

1. Go over variables (remove duplicate ones)
2. Add loading animations
3. Work on README

*/