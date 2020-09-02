import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route } from "react-router-dom";
import Navbar from "./components/navbar.components";
import ExerciseList from "./components/exercises-list.components";
import EditExercise from "./components/edit-exercise.components";
import CreateExercise from "./components/create-exercises.components";
import CreateUser from "./components/create-user.components";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar>
      </Navbar>
        <Route path="/"  exact component={ExerciseList}/>
        <Route path="/edit/:id" component={EditExercise}/>
        <Route path="/create"  component={CreateExercise}/>
        <Route path="/user"  component={CreateUser}/>
      
      </div>
    </Router>
  );
}

export default App;
