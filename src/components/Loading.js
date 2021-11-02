import React, { Component } from 'react';
import '../styles/styles.css';

class Loading extends Component {
  render() {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loading;
