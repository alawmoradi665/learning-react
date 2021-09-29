import React from 'react';
import Greeting from './Greeting.js';
import Nav from './Nav';
import Main from './Main';
import Article from './Article';

function App() {
  return(
      <div className='App'>
        <Nav />
        <Main />
        <Greeting />
        <Article />
      </div>
  )
}
export default App; 

// wrap the component in a parent div bc you can only use one parent element. Multiple children but one parent. So div is the parent and you can fill up with child components in it

// the new way is to use <React.Fragment> as the parent element to avoid having hundreds of divs 

// a div class is called className. Style in corresponding css file and connect them by importing 