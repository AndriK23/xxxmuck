import React from 'react';
import { createRoot } from 'react-dom/client';
import Homepage from './components/Homepage';
import './style.css';
import { useState,useEffect } from 'react';





const App = () => {

  const [name,setName] = useState([])

  
 

  useEffect ( ( ) => {
      fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      .then( response => response.json())
      .then( (apiData) => {
          setName(apiData)
      })

  }, [] )

  console.log(name)

  return (
    <div className="container">

    { name && 
    <p> blah </p>
    }   
   
    <Homepage />

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
