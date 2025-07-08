import {useState, useEffect} from "react"

export default function UseEffectTimer() {
    const [cookies, setCookies] = useState(0) 

  useEffect(() => {
    // setInterval returns a intervalID which we're storing in interval to refer back to later.
   const interval = setInterval(() => {
        console.log(`Interval running`)
        setCookies(cookies => cookies + 1)
   }, 1000)

//    this returned function runs when the component unmounts 
   return () => {
    clearInterval(interval)
   }

  }, []) 

    return (
        <div>{cookies}</div>
    )
}