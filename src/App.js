import { useEffect, useState } from 'react';
import './App.css';

//aqui aonde você pode criar o site de uma maneira mais eficiente e pratica

function App() {

  const [imagens, setImagens] = useState([])

  useEffect(() => {
    const api = 'https://jsonplaceholder.typicode.com/photos';
    let imagens = [];
    
    fetch(api).then(response => response.json()).then(json => json.map(value => {
      console.log(value, json.value)
      if(json.value[id] < 10){
        imagens.push(value)
      } 
    }));

}, []);


return (
  <>
    {console.log(imagens)}
    <div>
      <h1>opa</h1>
    </div>
  </>
)
};

export default App;