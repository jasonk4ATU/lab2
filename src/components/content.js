import React from 'react'; //import library

const Content = () => { {/*arrow function to create content component*/} 
  return (
    <div>
      <h1>Hello World!</h1> 
      <h2>It is {new Date().toLocaleTimeString()}</h2>  {/*get local time and display*/} 
    </div> 
  );
}

export default Content; //send off content to be displayed in App.js