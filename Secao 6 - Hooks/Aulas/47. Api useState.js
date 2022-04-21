import React, { useState } from 'react'

function App() {
    const [tarefas, setTarefas] = useState([
        'Pagar a conta de luz', 
        'Pagar o aluguel'
    ]) // 
    /* 
    O segundo param é qual é a função que será chamada para atualizar o valor da state

    Antes era: this.state.nomeDaState (para acessar)
               this.setState.nomeDaState (atualizar o valor da state)  

    Tarefas: nome da state
    */

    // State nome - Ter states separadas em funções 
    const [nome, setNome] = useState('Leandro') // Leandro = valor padrão da state

    // State do Input
    const [input, setInput] = useState('')

    function handleAdd() {
        setTarefas([...tarefas, input]) // Pegar todos os itens da state tarefas = ... (JS)
    }
    return(
        <div>
            <h1>Hooks</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            
            <input type='text' value={input} onChange={e => setInput(e.target.value)}></input>
            <button type='button' onClick={handleAdd}>Adicionar</button> 
            
            <h2>{nome}</h2>
            {/* Não é necessário passar this na função handleAdd, por estar utilizando function */}
        </div>
    )
}

export default App
