export default function Search({setQuery}) {
    return (
      <input className="my-10" placeholder="enter a search term" onChange={(e) => setQuery(e.target.value)}/>
    )
}