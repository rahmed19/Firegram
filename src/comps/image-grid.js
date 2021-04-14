import React from 'react'
import UseFirestore from '../hooks/use-firestore'

export default function ImageGrid(){
    const {docs} = UseFirestore('images')
    console.log(docs)

    return(
        <div className="img-grid">
            images
        </div>
    )
}