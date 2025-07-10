import {useState, useEffect} from "react"
import { Link } from "react-router"

export default function Animals() {
    const [animals, seetAnimals] = useState([])    

    useEffect(() => {
        console.log('useEffect running')
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/animals`)
            const animalsRes = await res.json()
            seetAnimals(animalsRes)
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-row flex-wrap w-full gap-5">
            <h2>test</h2>
           {animals.map((animal) => ( 
            <div key={animal.id} className="">
                <Link to={`/animals/${animal.id}`}>
                    <img className="w-2xl" src={animal.image} />
                </Link>
            </div>
           ))} 
        </div>
    )
}