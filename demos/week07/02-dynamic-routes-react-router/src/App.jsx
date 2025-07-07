import {Route, Routes} from "react-router"
import PlantsPage from "./pages/PlantsPage"
import InvividaulPlantPage from "./pages/IndividaulPlantPage"

export default function App() {
  return (
    <div>
    <Routes>
      {/* The below route is static */}
      <Route path="/plants" element={<PlantsPage />} />   
    
    {/* /plants/3 */}
    {/* plants/2 */}
    {/* dynamic route parameter : id */}
      {/* we can think of it a little like conditional rendering - if they're on /plants/1/edit, show this */}
      <Route path="/plants/:id" element={<InvividaulPlantPage />}> 
        {/* /plants/1/photos */}
        <Route path="/plants/:id/photos" element={<p>Lots of photos of that plant</p>} />
        {/* plants/1/edit */}
        <Route path="/plants/:id/edit" element={<p>Edit your plant infromation</p>} />
      </Route>
    </Routes>      
    </div>
  )
}