import { useEffect } from "react"
import { useState } from "react"

export default function App() {
  const [state, setState] = useState(false)
  const [todos, setTodos] = useState([])


  // use effect takes a function as the first argument - what is the code you want to run
  // takes a horrible sounding second argument called the 'dependency array'
  // the empty array means - run the code inside the useEffect just once, when the component first runs.

  useEffect(() => {
    // this is were we put the code we only want to run at certain times.
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const todos = await res.json()
      setTodos(todos)
    }

    fetchData()
  }, [])

  console.log('App is (re)-rendering')

  return (
    <div>
      <button onClick={() => setState(!state)}>Click me to re-render compoennt</button>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}