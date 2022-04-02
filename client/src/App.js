import './App.css';
import Comments from './components/Comments/Comments'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'

function App() {

  return (
    <div className="app">
      <Modal />
      <main className="app__main">
        <Comments />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// Reply -> Replies -> Comment -> Comments