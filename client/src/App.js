import './App.css';
import Threads from './components/Threads/Threads'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'

function App() {
  return (
    <div className="app">
      <Modal />
      <main className="app__main">
        <Threads />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// Reply -> Replies -> Comment -> Comments
// BRUH IT'S THE YT COMMENT SYSTEM NOT REDDIT

/*

LEARNINGS:
1. Dynamic image imports (place them in public folder)
2. Dialog tag in HTML for modals

*/