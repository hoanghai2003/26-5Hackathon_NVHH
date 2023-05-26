import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [inputValue, setInput] = useState("");
  const [notes, setNotes] = useState("");

  console.log(notes, "---------");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    fetch("http://localhost:3000/api/v1/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Content: inputValue }),
    });
    setInput("");
    renderData();
  };

  const renderData = () => {
    fetch("http://localhost:3000/api/v1/user", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setNotes([data.users]);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/v1/user/:${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        renderData();
      });
  };

  useEffect(() => {
    renderData();
  }, []);
  return (
    <div className="container">
      <header className="app">
        <h2>NOTE APP</h2>
      </header>
      <div className="content">
        <div className="input-bt">
          <textarea
            type="text"
            placeholder="Title Take a not "
            onChange={(e) => handleChange(e)}
          ></textarea>
          <br />
          <button onClick={handleClick}>+</button>
        </div>

        {notes.data?.map((users) => (
          <>
            <div className="text-div">
              <strong>{users.user_cmt}</strong>
              <button className="delete-btn" onClick={handleDelete()}>
                {" "}
                del
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
