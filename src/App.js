import React, { useState } from 'react';
import ImageGrid from './comps/image-grid';
import Modal from './comps/modal';
import Title from './comps/title';
import UploadForm from './comps/upload-form';

function App() {
const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage}/>
      {selectedImage ? <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> :null }
    </div>
  );
}

export default App;
