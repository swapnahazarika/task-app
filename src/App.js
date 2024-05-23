import React, { useState } from "react";
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import TaskManager from "./components/TaskManager";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
    <Routes>
      <Route path="/"
        element = {loggedIn ? (
          <Navigate to="/tasks" />
        ) : (
          <Login setLoggedIn={setLoggedIn} />
        )}
      />
      <Route path="/tasks"
       element = {loggedIn ? <TaskManager /> : <Navigate to="/" />}
      />
    </Routes>
    </Router>
  );
};

export default App;
