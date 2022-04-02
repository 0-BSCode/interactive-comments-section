import './App.css';
import profileImg from './images/avatars/image-amyrobson.png';
import addImg from './images/icon-plus.svg';
import subtractImg from './images/icon-minus.svg';
import replyImg from './images/icon-reply.svg';

function App() {

  return (
    <div className="App">
      <section>
        <article>
          <header>
            <img src={profileImg} />
            <h3>
              amyrobson
            </h3>
            <p>
              1 month ago
            </p>
          </header>
          <p>
          Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
          </p>
          <div>
            <span>
              <button>
                <img src={addImg} />
              </button>
              <p>12</p>
              <button>
                <img src={subtractImg} />
              </button>
            </span>
            <button>
              <img src={replyImg} />
              <p>Reply</p>
            </button>
          </div>
        </article>  
      </section>
      <section>
        <article>
          <header>
            <img src={profileImg} />
            <h3>
              amyrobson
            </h3>
            <p>
              1 month ago
            </p>
          </header>
          <p>
          Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
          </p>
          <div>
            <span>
              <button>
                <img src={addImg} />
              </button>
              <p>12</p>
              <button>
                <img src={subtractImg} />
              </button>
            </span>
            <button>
              <img src={replyImg} />
              <p>Reply</p>
            </button>
          </div>
        </article>  
      </section>
      <section>
        <article>
          <header>
            <img src={profileImg} />
            <h3>
              amyrobson
            </h3>
            <p>
              1 month ago
            </p>
          </header>
          <p>
          Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
          </p>
          <div>
            <span>
              <button>
                <img src={addImg} />
              </button>
              <p>12</p>
              <button>
                <img src={subtractImg} />
              </button>
            </span>
            <button>
              <img src={replyImg} />
              <p>Reply</p>
            </button>
          </div>
        </article>
        <div>
          <section>
            <article>
              <header>
                <img src={profileImg} />
                <h3>
                  amyrobson
                </h3>
                <p>
                  1 month ago
                </p>
              </header>
              <p>
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
              </p>
              <div>
                <span>
                  <button>
                    <img src={addImg} />
                  </button>
                  <p>12</p>
                  <button>
                    <img src={subtractImg} />
                  </button>
                </span>
                <button>
                  <img src={replyImg} />
                  <p>Reply</p>
                </button>
              </div>
            </article>  
          </section>
        </div>
      </section>
      <form>
        <input type="text" />
        <div>
          <img src={profileImg} />
          <button type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
