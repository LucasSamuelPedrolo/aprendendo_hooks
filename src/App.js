import React, { useEffect, useState } from 'react';
import './App.css';


//aqui aonde você pode criar o site de uma maneira mais eficiente e pratica

const clickElement = (props) => {
  console.log(props.id)
}

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

  }, []);

  return (
    <div className='content'>
      <h1 className='title'>opa</h1>
      <div className='imageFocus'>
        <button type='button' className='buttonNext' id='left'>&lt;</button>
        <div className='imageFocusContent'></div>
        <button type='button' className='close'>X</button>
        <button type='button' className='buttonNext' id='right'>&gt;</button>
      </div>
      <div className='groupImage'>
        {loading && imagens.map((img) => (
          <div className='imageContent' key={img.id} props={img} onClick={clickElement}>
            <img src={img.url} alt={img.title}></img>
            <h2>{img.title}</h2>
            <p>Texto ficticio de teste para a imagem de nº {img.id}</p>
          </div>
        ))}

        {(loading === false) < 0 &&
          <h2>Carregando imagens...</h2>
        }
      </div>
    </div>
  );
}

export default App;