import React, {useEffect} from 'react'
import { motion } from 'framer-motion'

export default function Modal({selectedImage, setSelectedImage, docIndex, docs, setDocIndex}) {

    useEffect(() => {
        document.addEventListener("keydown", handleChange) 
        
        return document.addEventListener("keydown", handleChange)
    },[])


    function handleClick(e) {
        if (e.target.classList.contains('backdrop')){
            setSelectedImage(null)
        }
        
    }

    function handleChange(e){
        
        if (e.keyCode === 39 ) {
            if (docIndex < docs.length-1){
                setSelectedImage(docs[docIndex+1].url)
                setDocIndex(docIndex++) 
            } 
        }

        if (e.keyCode === 37 ) {
            if (docIndex > 0){
                setSelectedImage(docs[docIndex-1].url)
                setDocIndex(docIndex--) 
            } 
        }

        if (e.keyCode === 27){
            setSelectedImage(null)
        }
    }


    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        >
            <motion.img src={selectedImage} alt="" 
                initial={{ y: "-100vh"}}
                animate={{y: "0"}}
                />
        </motion.div>
    )
}