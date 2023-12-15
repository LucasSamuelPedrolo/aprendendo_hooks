import { useEffect, useState } from 'react';
import './App.css';

//aqui aonde você pode criar o site de uma maneira mais eficiente e pratica

function App() {

  const [imagens, setImagens] = useState([])

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
      });

    setImagens(maxQuantityImage);

  }, []);

  return (
      <div>
        <div className='groupImage'>
          {imagens.map((image) => {
            return (
              <div className='imageContent' key={image.id}>
                <img src={image.url} alt={image.title}></img>
                <h2>{image.title}</h2>
                <p>Texto ficticio de teste para a imagem de nº {image.id}</p>
              </div>
            )
          })}
        </div>
        <h1>opa</h1>
      </div>
  );
}

export default App;