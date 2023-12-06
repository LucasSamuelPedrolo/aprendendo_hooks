import './App.css';

//aqui aonde você pode criar o site de uma maneira mais eficiente e pratica

function App() {

  const ApiConection = async () => {
    const api = 'https://jsonplaceholder.typicode.com/photos';

    fetch(api).then(response => {response.json()}).then(json => console.log(json))
  }


  return (
    <>
      <div className=''>
        <h1>opa</h1>
      </div>
    </>
  )
}

export default App;