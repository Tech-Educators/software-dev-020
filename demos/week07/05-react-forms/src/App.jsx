import SimpleForm from "./components/SimpleForm"
import ComplexForm from "./components/ComplexForm"
export default function App() {
  return (
    <div>
      <ComplexForm />
      {/* <SimpleForm /> */}
    </div>
  )
}


// 1) - Create our form component
// 2) Listen for a change event on the input - so we can store the value in our state variable

// Our state will be updatated each time the user types