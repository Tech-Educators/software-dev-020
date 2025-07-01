import {useState} from "react"

export default function App() {

  // takes the inital value of what you want the varaible to be as an argument. it doesn't take anymore arguments
  // use state returns one thing : an array! 
  // in that array
  // the value 
  // a function to update the value
  const [count, setCount] = useState(5)
  const [shoppingCart, setShoppingCart] = useState([])
  // we are not allowed to modify count directly
  // count++
  // count = count + 2


  function handleClick() {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}



const [apple, pear] = [3, function() {foo}]



// bad code

// export default function App() {
//   let counter = 0;

//   // react will only re-render if state or props change
//   // react is not re-render 
//   function handleClick() {
//     console.log(counter)
//     counter += 1
//   }

//   return (
//     <div>
//      <button onClick={handleClick}>{counter}</button> 
//     </div>
//   )
// }


function sum(a) {
  return a +5
}

sum(10,34234)