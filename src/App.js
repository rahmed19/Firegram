import React from 'react';
import ImageGrid from './comps/image-grid';
import Title from './comps/title';
import UploadForm from './comps/upload-form';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
