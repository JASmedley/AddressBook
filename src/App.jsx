import React from 'react';
import './App.css';
import Users from './Users.jsx'

export default class App extends React.Component {
  constructor(props) {
    console.log('In constructor');
    super(props);
  }

  render() {
    console.log('In render');
    return (
      <Users/>
    );
  }
}


