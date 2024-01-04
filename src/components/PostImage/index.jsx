export const PostImage = ({ loadingConfirmation, imagensList }) => {

  const loading = loadingConfirmation;
  const imagens = imagensList;

  return (
    <>
      {loading && imagens.map((img) => (
        <div className='imageContent' key={img.id}>
          <img src={img.url} alt={img.title}></img>
          <h2>{img.title}</h2>
          <p>Texto ficticio de teste para a imagem de nº {img.id}</p>
        </div>
      ))}

      {
        (loading === false) < 0 &&
        <h2>Carregando imagens...</h2>
      }
    </>
  )
}


