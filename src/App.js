import {useEffect, useState} from "react";
import './App.css';

function App() {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [output, setOutput] = useState("");
    
    useEffect(() => {
      if ( currentNumber % 3 === 0 & currentNumber % 5 === 0) {
        setOutput("fizzbuz")
      } else if (currentNumber % 3 === 0) {
        setOutput("fizz")
      } else if (currentNumber % 5 === 0) {
        setOutput("buzz")
      } else {
        setOutput(currentNumber);
      }
    }, [currentNumber])


    const handleInc = () => {
      setCurrentNumber(currentNumber + 1);
      
    }


  return(
      <><button onClick={handleInc}>Click Me</button><br></br>
      {currentNumber}<br></br>
      {output}
      </>
  );
}

export default App;


// MVP
// Your app should:

// keep track of the "current number" in the game
// display the correct corresponding output for the current number
// allow the user to increment the current number.
// You should implement React's useEffect hook in order to work out the intended output.


