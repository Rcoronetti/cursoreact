//Hooks são utilizados para determinadas ações no sistema,normalmente utilizam como inicio de nomemclatura a palavra use. exe: use.state
import { useState, useEffect } from 'react'

const Hooks = () => {
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40); // Dentro do state valor default. No state sempre tenho a possibilidade de consultar e alterar.

    const changeAge = () => {

        idade = 31;
        console.log(idade);
    };

    const changeNewAge = () => {
        setNovaIdade(45);
    };

    useEffect(() => {
        console.log('Testando');

    });
    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>

        </div>
    )

}
export default Hooks