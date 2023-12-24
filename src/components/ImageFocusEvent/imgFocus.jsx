export const ImageFocusEvent = () => {
    console.log('sou chamado');
    return (
        <>
            <button type='button' className='buttonNext' id='left'>&lt;</button>
            <div className='imageFocusContent'></div>
            <button type='button' className='close'>X</button>
            <button type='button' className='buttonNext' id='right'>&gt;</button>
        </>
    )
}