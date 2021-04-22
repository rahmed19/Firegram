import React, { useEffect } from 'react'
import UseStorage from '../hooks/use-storage'
import {motion} from 'framer-motion'

export default function ProgressBar({file, setFile}) {

    const {url, progress} = UseStorage(file)
    
    useEffect(()=>{
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return(
        <>
        <motion.div className="progress-bar" 
        intial={{width: 0}}
        animate={{width: progress + '%'}}
        >progress</motion.div>
        </>
    )
}