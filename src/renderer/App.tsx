/* eslint-disable react/no-array-index-key */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';

interface Messages {
  status: string;
}

function Hello() {
  const [messages, setMessages] = useState<string[]>([]);
  window.electron.ipcRenderer.on('update', (data) => {
    setMessages((prev) => [...prev, data.status]);
  });
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Messages</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <div className="Hello" />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
