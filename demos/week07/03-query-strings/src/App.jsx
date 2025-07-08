import {Route, Routes, Link} from "react-router"
import Animals from "./pages/Animals"

export default function App() {
  return (
    <div>
      <Link to="/animals">Animals</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/animals" element={<Animals />} ></Route>
      </Routes>
    </div>
  )
}