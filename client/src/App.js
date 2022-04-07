import './App.css';
import Threads from './components/Threads/Threads'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import {useState} from 'react'

function App() {
  const [commentId, setCommentId] = useState(5);

  return (
    <div className="app">
      <Modal />
      <main className="app__main">
        <Threads 
        commentId={commentId}
        setCommentId={setCommentId} />
        <Form 
        commentId={commentId}
        setCommentId={setCommentId}/>
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

TO-DO:
1. Popup delete modal
2. Delete functionality
3. Edit functionality
4. Styling textarea during user input
5. Responsive design
6. Clean props and states (remove redundant ones)
7. Modularize code (export some component functions for cleaner code)
*/