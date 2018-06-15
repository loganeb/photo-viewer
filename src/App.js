import React, { Component } from 'react';
import Photo from './Photo';
import './App.css';

class App extends Component {
  renderPhoto(){
    var photoPath = "./photos";
    return( <Photo path={photoPath}/>); 
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <h1>Photo Viewer</h1>
        </div>
        <div className="Photo-block">
          {this.renderPhoto()}
        </div>
      </div>
    );
  }
}

export default App;
