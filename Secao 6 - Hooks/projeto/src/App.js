import React, {useState, useEffect} from 'react'

function App() {
  const [tarefas, setTarefas] = useState([
    'Estudar',
    'Pagar a conta de luz',
    'Banhar o cachorro'
  ])

  const [input, setInput] = useState('')

  // const [nome, setNome] = useState('Leandro')
  const [nome, setNome] = useState('')

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')
    
    if(tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage)) // Transformar em array
    }
  
  }, []) // Quando deixa vazio automaticamente é executada a função

  useEffect(() => { 
    localStorage.setItem('tarefas', JSON.stringify(tarefas)) // Tem que transformar em string, não pode receber em array
  }, [tarefas])

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('')
  }

  function addName() {
    setNome = nome 
  }

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tarefa"></input>
      <button type="text" onClick={handleAdd}>Adicionar tarefa</button><br></br>

      <div>
        <p key={nome}>Nome: {nome}</p>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome"></input>
        <button type="text" onClick={addName}>Adicionar nome do usuário</button>
      </div>
    </div>
  )
}

export default App
