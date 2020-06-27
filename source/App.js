import React, {useState} from 'react';
import './App.css';
export default function App() {
  let [count , setcount] = useState(1);
  
  return (
    <div>
     <h3>Value of counter variable is:{count}</h3>   
      <br />
      <button onClick={
        ()=> setcount (count + 1)
        }>
          update counter
          </button>
    </div>
  );
}
 