import React from 'react'
import UseFirestore from '../hooks/use-firestore'

export default function ImageGrid(){
    const {docs} = UseFirestore('images')
    console.log(docs)

    return(
        <div className="img-grid">
            {docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} />
                </div>
            ))}
        </div>
    )
}