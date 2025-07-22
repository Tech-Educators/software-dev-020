'use client'

import {motion} from "motion/react"
export default function ScrollToShow() {
    return (
       <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}}>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 H 90 V 90 H 10 L 10 10" />
</svg>
       </motion.div> 
    )
}