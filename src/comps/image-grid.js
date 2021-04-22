import React from 'react'
import {motion} from 'framer-motion'

export default function ImageGrid({setSelectedImage, setDocIndex, docs}){
    // const {docs} = UseFirestore('images')


    return(
        <div className="img-grid">
            {docs && docs.map((doc, index) => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity: 1}}
                onClick={()=> {
                    setSelectedImage(doc.url)
                    setDocIndex(index)
                }
            }
                >
                    <motion.img src={doc.url} alt=""
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1}}
                    / >
                </motion.div>
            ))}
        </div>
    )
}