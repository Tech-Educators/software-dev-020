import CoolButton from "./components/CoolButton";
import PropButton from "./components/PropButton";

export default function App() {
  function sayHello() {
    console.log("Hello!");
  }

  function message(aMessage) {
    console.log(aMessage);
  }

  function sayHi() {
    console.log("Hi!");
  }

  function sayHey() {
    console.log("Hey!");
  }

  return (
    <>
      <button onClick={sayHello}>Click this button, please</button>
      <button
        onClick={() => {
          console.log("I'm a button!");
        }}
      >
        Another button to click!
      </button>
      <button
        onClick={() => {
          message("Goodbye!");
        }}
      >
        Click me!
      </button>
      <CoolButton />
      <PropButton buttonHandler={sayHi} />
      <PropButton buttonHandler={sayHey} />
      <div
        onMouseEnter={() => {
          console.log("Mouse has entered the div!");
        }}
        onMouseLeave={() => {
          console.log("Mouse has left the div!");
        }}
      >
        <h1>HOVER OVER THIS TEXT PLEASE AND THANK YOU!!!</h1>
      </div>
    </>
  );
}
