import React, { useEffect, useState } from 'react';
import './App.css';
import { PostImage } from './components/PostImage';
import { ImageFocusCard } from './components/ImageFocusCard/imageFocus';


//aqui aonde você pode criar o site de uma maneira mais eficiente e pratica

function App() {

  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = 'https://jsonplaceholder.typicode.com/photos';
    const maxQuantityImage = [];
    let imageQuantity = 0;

    fetch(api)
      .then(response => response.json())
      .then(function (json) {
        while (imageQuantity < 100) {
          maxQuantityImage.push(json[imageQuantity]);
          imageQuantity++
        }
        setLoading(true);
        setImagens(maxQuantityImage);
      });

  }, []);

  return (
    <div className='content'>
      <h1 className='title'>Imagens aleatorias!</h1>
      
      <div className='imageFocus hidden'>
        <ImageFocusCard />
      </div>

      <div className='groupImage'>
        <PostImage
          loadingConfirmation={loading}
          imagensList={imagens}
        />
      </div>
    </div>
  );
}

export default App;