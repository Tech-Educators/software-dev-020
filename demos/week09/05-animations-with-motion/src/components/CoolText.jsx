'use client'
import { motion } from "motion/react"

export default function CoolText({children}) {
    return (
        <motion.div animate={{scale: 1, rotate: 180}} transition={{duration: 10, repeat: Infinity, type: 'spring', bounce: 1}} style={{width: "content"}}>
            {children}
        </motion.div>
    )
}


// eating functions allow you to control the timing of the animatoin 

// type spring - physics based animations 
// type tween - more 2d traditional based. 