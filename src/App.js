import React, { useState, useEffect } from 'react';
import Footer from './comps/footer';
import ImageGrid from './comps/image-grid';
import Modal from './comps/modal';
import Title from './comps/title';
import UploadForm from './comps/upload-form';
import HandleDelete from './hooks/handle-delete';
import UseFirestore from './hooks/use-firestore'


function App() {
const [selectedImage, setSelectedImage] = useState(null)
const [newUpload, setNewUpload] = useState(false)
const [docIndex, setDocIndex] = useState(0)
const {docs} =  UseFirestore('images') 

//run first time

useEffect(()=>{
    setTimeout(()=>{
      document.getElementById("handleDeleteButton").click()
      
  }, 3000)

  
}, [])

//run after new upload
useEffect(()=>{
  setTimeout(()=>{
    document.getElementById("handleDeleteButton").click()
    
}, 8000)


}, [newUpload])

  return (
    <div className="App">
      <Title/>
      <UploadForm newUpload={newUpload} setNewUpload={setNewUpload} />
      <ImageGrid setSelectedImage={setSelectedImage} docs={docs} setDocIndex={setDocIndex}/>
      {selectedImage ? 
      <Modal 
      selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage} 
      docs={docs} 
      docIndex={docIndex}
      setDocIndex={setDocIndex} />
      :null }
      <button style={{display: "none"}}id="handleDeleteButton" onClick={()=>HandleDelete({docs})}>{newUpload}</button>
      {/* <HandleDelete docs={docs}/> */}
      <Footer />
    </div>

  );
}

export default App;
