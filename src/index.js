import React from 'react';
import ReactDom from 'react-dom';

// create new component. this component should 
// produce some html
const App = () => {
  return <div>Hi!</div>;
}

// take this components html generated and put it
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));