import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAZwh3BG7evVXgCPte72EeebIzrryyKJKg';

// create new component. this component should 
// produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// take this components html generated and put it
// on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));