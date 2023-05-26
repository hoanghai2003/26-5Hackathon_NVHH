import "./Home.css";

function Home() {
  return (
    <div className="container">
      <header className="app">
        <h2>NOTE APP</h2>
      </header>
      <div className="content">
        <div className="input-bt">
          <input type="text" placeholder="Title Take a not " />
          <br />
          <button>+</button>
        </div>

        <div className="text-div">
          <strong>aaaaaaaaaaaaa</strong>
          <button className="delete-btn"> del</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
