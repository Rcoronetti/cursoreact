//Aqui temos uma amostra de como usar a lógica dentro de um parágrafo para implementarmos uma condição. Caso a varíavel atenda o requisito, ela será impressa.

const RenderCond = ({ x, y }) => { // props são propriedades passadas do componente pai para o componente filho

    return (
        <div>
            {x > 5 && <p>X é maior que 5</p>}
            {/* Utilizando if else ternário. Se x for maior que 5, imprimo algo, se a expressão for falsa, imprimo o cod em sequência */}
            {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}
            <p>O valor de y é: {y}</p>
        </div>
    );
}

export default RenderCond;