import React from 'react'
import UseFirestore from '../hooks/use-firestore'

export default function ImageGrid({setSelectedImage}){
    const {docs} = UseFirestore('images')
    console.log(docs)

    return(
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                onClick={()=> setSelectedImage(doc.url)}
                >
                    <img src={doc.url} alt=""/>
                </div>
            ))}
        </div>
    )
}