export default function PlantCard({details}) {
    const {id, name, description, funFact, seasons, location, image} = details
    return (
        <div className="bg-blue-500 flex flex-col w-1/3 h-1/2">
            <p className="text-2xl text-center">{name}</p>
            <img src={image} />
        </div>
    )
}