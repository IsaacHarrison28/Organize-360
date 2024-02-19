import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TodosHome from "./components/Todos/TodosHome";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TodosHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
