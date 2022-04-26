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
    async function getData() {
      const loader = document.querySelector(".app__loader")
      await dispatch(fetchComments())
      loader.style.display = 'none';
    }

    getData()
  }, [dispatch])

  return (
    <div className="app">
      <Modal 
      showDeleteModal={{get: showDeleteModal, set: setShowDeleteModal}}
      deleteBtnId={importantIDs.deleteBtn} />
      <main className="app__main">
        <div className="app__loader" />
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