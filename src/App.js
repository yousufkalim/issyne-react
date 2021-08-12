import React from 'react';
import "./App.css";
import Home from './screens/Home/Home';
import CGU from "./screens/CGU/CGU";
import { Switch, Route } from 'react-router-dom';

// const nums = [
//   5,
//   10,
//   15,
//   20,
//   25,
//   4,
//   8,
//   12,
//   16,
//   20,
//   3,
//   6,
//   9,
//   12,
//   15,
//   2,
//   4,
//   6,
//   8,
//   10,
//   1,
//   2,
//   3,
//   4,
//   5,
// ];


const App = () => {

//   const numbers = [
//     [5, 10,15,20,25],
//     [ 4, 8, 12, 16, 20],
//     [3,6,9,12,15],
//     [2,4, 6,8,10],
//     [1, 2,3,4,5], 
//   ];
  

  // useEffect(() => {
  //   const matrix = new Array(5).fill(0).map(() => new Array(5).fill(nums));
  //   console.log(matrix);
  // },[])
  return (
    <div className="app">

      {/* hello

     
            <TableChart score="20" /> */}
       
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cgu" exact component={CGU} />
      </Switch>
    </div>
  )
}

export default App
