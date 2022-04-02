import './App.css';
import Comments from './components/Comments/Comments'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <main className="App__main">
        <Comments />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
