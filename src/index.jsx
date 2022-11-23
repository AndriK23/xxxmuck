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
      }
      )

  }, [] )

  console.log(name)
  

  return (
    <div className="container">
      <Homepage />

      {name.map((prvek) => {
        return (
          <>
            <h2 key={prvek.id}> {prvek.name} </h2>
          </>
        );
      })}
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
