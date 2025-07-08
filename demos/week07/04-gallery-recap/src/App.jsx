import { useState } from "react";
import { useEffect } from "react";
import Thumnails from "./components/Thumbnails";
import MainImage from "./components/MainImage";
import Search from "./components/Search";

export default function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0)
  const [query, setQuery] = useState('jungle')
  // use effect allows us to control when our fetch function runs - we don't want to refetch images each time our component re-render.
  // components re-render when state changes (and props) | and when it mounts
  useEffect(() => {

    console.log('Effect running')
    async function fetchData() {
      let res
      if (query.length > 0) {
        res = await fetch(`https://api.unsplash.com/search/photos/?client_id=LMIpfPZ7y7PH_GClYLw0JwRMTXqiIgSPDC61Xp2sV84&query=${query}`)
      } else {
        res = await fetch(`https://api.unsplash.com/search/photos/?client_id=LMIpfPZ7y7PH_GClYLw0JwRMTXqiIgSPDC61Xp2sV84&query=jungle`)
      } 
      const data = await res.json();
      console.log(data);
      setImages(data.results);
    }
    fetchData();
  }, [query]);

  function handleChangeImage(index) {
    setIndex(index)
  }


  return (
    <div>
      <h2>Gallery project app.</h2>
      <Thumnails images={images} handleChangeImage={handleChangeImage} />
      <MainImage images={images} index={index} setIndex={setIndex} />
      <Search setQuery={setQuery} />
    </div>
  );
}

// 1) fetch the data
// 2) map through images to display thme
