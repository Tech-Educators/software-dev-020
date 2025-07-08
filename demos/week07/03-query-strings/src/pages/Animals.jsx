import { Link, useSearchParams } from "react-router";

export default function Animals() {
    const [params, setSearchParams] = useSearchParams()
    console.log(params)

    console.log(`The user is trying to sort by`, params.get('sortBy'))

    const animals = [
        "Pigeon",
        "Frog",
        "Cat",
        "Honeybadger",
        "Monkey",
        "Panda",
        "Elephant",
        "Dog",
        "Lion",
        "Tiger",
        "Eagle",
        "Guinea Pig",
        "Possum",
        "apple"
      ];

    const sort = params.get('sortBy')

    if (sort == 'asc') {
        animals.sort()
    } else if (sort == 'desc') {
        animals.sort().reverse()
    }

    function handleSort(e) {
        setSearchParams({sortBy: e.target.value})
    }

    return (
        <div>
            <select onChange={(e) => {handleSort(e)}}name="sortBy" value={params.get('sortBy') || ''}>
                <option value="">undo</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            <br />
            <br />
            <Link to='/animals?sortBy=asc'>ASC</Link>
            <br></br>
            <Link to='/animals?sortBy=desc'>DESC</Link>
            <br />
            <Link to="/animals">Un sort</Link>
            <ul>
                {animals.map(animal => (
                    <li key={animal}>{animal}</li>
                ))}
            </ul>
        </div>
    )
}