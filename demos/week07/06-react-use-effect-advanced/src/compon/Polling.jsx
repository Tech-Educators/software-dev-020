import {useState, useEffect} from "react"

export default function Polling() {
    const [imgData, setImgData] = useState('')

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://randomfox.ca/floof/`) 
            const imgData = await res.json()
            setImgData(imgData)
        }

        // When our page first runs
        fetchData()
        // I want to fetch/get a different fox every 3 second. 

        const intervalID = setInterval(fetchData, 3000)

        // clear the previous interval before creating a new one
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <div>
            <img src={imgData.image} alt="something" />
        </div>
    )
}