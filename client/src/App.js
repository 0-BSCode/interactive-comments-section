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

*/