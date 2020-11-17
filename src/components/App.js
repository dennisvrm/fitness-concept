import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import NotFound from './NotFound.js';
import Dashboard from './Dashboard.js';
import Register from './Register.js';
import Login from './Login.js';
import Friends from './Friends.js';
import Workouts from './workouts/Workouts.js';
import AddWorkout from './workouts/AddWorkout.js';
import Workout from './workouts/Workout.js';

const App = () => (
  <Container className="App">
    <Header />

    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>

      <Route path="/registreren">
        <Register />
      </Route>

      <Route path="/inloggen">
        <Login />
      </Route>

      <Route path="/vrienden">
        <Friends />
      </Route>

      <Route path="/workouts">
        <Workouts />
      </Route>

      <Route path="/workouts/toevoegen">
        <AddWorkout />
      </Route>

      <Route path="/workout">
        <Workout />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>

    <Footer />
  </Container>
);

export default App;
