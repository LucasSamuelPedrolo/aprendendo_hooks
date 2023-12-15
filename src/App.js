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
    <div className='content'>
      <h1 className='title'>opa</h1>
      <div className='groupImage'>
        {imagens.map(img => {
          return (
            <div className='imageContent' key={img.id}>
              {console.log(img.id)}
              <img src={img.url} alt={img.title}></img>
              <h2>{img.title}</h2>
              <p>Texto ficticio de teste para a imagem de nº {img.id}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;