import { plants } from "../stores/plantInfo"
import PlantCard from "../componenets/PlantCard"
import { Link } from "react-router"

export default function PlantsPage() {
    return (
        <div className="">
            <h2>A list of all our plants:</h2>
        <div className="flex flex-wrap">
            {plants.map(plant => (
                <Link to={`/plants/${plant.id}` } key={plant.id}>
                    <PlantCard details={plant}  />
                </Link>
            ))}
        </div>
        </div>

    )
}


// {
//     details: {
//         id: 
//         adfsdf

//     }
// }