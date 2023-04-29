import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const chilki = 5
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetch('https://date.nager.at/api/v2/publicholidays/2023/US')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>hi this is my text {chilki}</p>
      <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.localName}</h2>
               <p className="post-body">{post.date}</p>
            </div>
         );
      })}
   </div>
    </div>
  );
}

export default App;
