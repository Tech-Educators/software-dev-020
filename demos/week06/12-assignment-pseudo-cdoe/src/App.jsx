import "./App.css"

export default function App() {
// some state:
// what is currently the 'bigImage'
// also need one to store our images in (from the API) 
const apiKey = import.meta.env.VITE_API_KEY

console.log(apiKey)
// effects
// useEffect to fetch the image API data
// use setState to update your array of images once fetch

// some sort of function to update the state of the image we just clicked on.

// we can pass props to components
// we can pass functions/state variables as props.

  return (
    <div>
      <div className="thumbnails-container">

      </div>
      <img className="theBigImage" />
    </div>
  )
}



// get the data!