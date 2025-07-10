import NavBar from "./components/NavBar"
import {Route, Routes} from "react-router"
import Animals from "./pages/Animals"
import IndividualAnimal from "./pages/IndividualAnimal"

export default function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<p>Home page</p>} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/animals/:id' element={<IndividualAnimal />} />
      </Routes>
    </div>
  )
}