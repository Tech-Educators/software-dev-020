import {useState} from "react"

export default function App() {
  console.log('App is rendering..')
  const [modal, setShowModal] = useState(false)
  // conditional rendering
  // based on some variable being true or false, render a piece of UI.

  function handleClick() {
    setShowModal(!modal)
  }


  // this approach is fine in some cases - if there is very different code between each. However you might want to consider just creating two different components and doing the conditional rendering in the parent component.
  // if (modal) {

  //   return (
  //    <div>
  //     <button onClick={handleClick}>toggle modal</button>
  //    </div>
  //   ) 
  // } else {
  //   return (
  //     <div>Foo</div>
  //   )
  // }

  return (
    <div>
      <button onClick={handleClick}>toggle modal</button>
      {modal && <p>This is the modal</p>}

{/* is modal true? if it is, display the first thing before the : if its not display the second */}
      {modal ? <p>:D</p> : <p>Modal not showing</p>}
    </div>
  )
}