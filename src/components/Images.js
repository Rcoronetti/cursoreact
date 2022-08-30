import stonehenge from '../assets/The_Stonehenge.jpeg'
const Images = () => {
    return (
        <div>
            {/* Imagens em public basta colocar / e o caminho da imagem. */}
            <img src="/niagara-falls.jpg" alt="Niagara Falls" />
            {/* Imagens em outras pastas, como por exemplo em assets, precisa importar e usar entre colchetes */}
            <img src={stonehenge} alt="stonehenge" />
        </div>
    )
}

export default Images