import {useParams} from "react-router"
import {useState, useEffect} from "react"

export default function IndividualAnimal() {
    const [animal, setAnimal] = useState('')


    const {id} = useParams()
    console.log(animal)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8080/animals/${id}`)
            const final = await res.json()
            setAnimal(final[0])
        }

        fetchData()
    }, [])

    return (
        <div>
            <p>{animal.name}</p>
            <p>{animal.scientfic_name}</p>

            <p>{animal.description}</p>

            <img src={animal.image} />
        </div>
    )
}