import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.jsx';
import Quiz from './components/Quiz.jsx';

class App extends Component {
  render() {
    return (
	  <div>
	    <div id="header">
	       <div id="logo">
				<img class="imagelogo" src="https://www.connecteducation.com.au/assets/logo_black-97c14e77ecec2c4624b560c20c53df78b1d81159eb0fd1f2ca7040f4e289a209.png" alt="Connect App"></img>
		   </div>
			<div id="login">
				<img class="profile" src="https://www.mathlearningcenter.org/sites/default/files/images/profile-blank.png" alt="Profile Picture"></img>
			</div>
		</div>
		<Menu />
		<Quiz />
	  </div>
    );
  }
}

export default App;
