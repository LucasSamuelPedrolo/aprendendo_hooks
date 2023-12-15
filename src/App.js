import React, { useEffect, useState } from 'react';
import './App.css';


//aqui aonde você pode criar o site de uma maneira mais eficiente e pratica

function App() {

  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('pai renderizou')

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

    console.log(loading);
  }, []);

  return (
    <div className='content'>
      <h1 className='title'>opa</h1>
      <div className='groupImage'>
        {loading && imagens.map((img) => (
          <div className='imageContent' key={img.id}>
            <img src={img.url} alt={img.title}></img>
            <h2>{img.title}</h2>
            <p>Texto ficticio de teste para a imagem de nº {img.id}</p>
          </div>
        ))}

        {loading === false < 0 &&
          <h2>Ocorreu um erro</h2>
        }
      </div>
    </div>
  );
}

export default App;