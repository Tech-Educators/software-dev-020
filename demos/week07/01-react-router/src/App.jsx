import {Routes, Route} from "react-router"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { Header } from "./components/Header"
export default function App() {
  return (
    <div>
      <p>Otters R Us</p>
      <Header />
      <Routes>
        <Route path={'/'} element={<p>On the home page</p>} />
        {/* with the {}'s / is not required infront of the route eg about and /about both work fine */}
        <Route path="about" element={<p>This is the about path</p>} />
        <Route path={'/contact'} element={<Contact />} />

        {/* if they try to access some non specified path */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </div>
  )
}