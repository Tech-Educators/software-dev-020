import { useParams, Outlet} from "react-router"
import { findPlant } from "../stores/plantInfo"
// useparams tells us what the dynamic route parameters value is 
// is 1, or 2? after /plants/???
export default function InvividualPlantPage() {
    const params = useParams()

    const plantInfo = findPlant(params.id)
    console.log(plantInfo)

    // just regular desctructuring
    const {id, name, description, funFact, seasons, location, image} = plantInfo
    return (
        <div>
            {/* if we are in a nested route eg - platns/1/edit the Outlet component is where that element will display. It's like a placeholder */}
            <Outlet />
            <p>{name}</p>
            <img src={image} />
            <br/>
            <p>{description}</p>
            <p>{seasons}</p>
            <p>{location}</p>
        </div>
    )
}