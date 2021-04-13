import React, {useState} from 'react'

export default function UploadForm() {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jepg']

    function handleChange(e) {

        let selected = e.target.files[0]
        
        if (selected && types.includes(selected.type)) {
            setFile(selected)
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }

    return(
        <form>
            <input type='file' 
            onChange={handleChange}/>
        </form>
    )
}