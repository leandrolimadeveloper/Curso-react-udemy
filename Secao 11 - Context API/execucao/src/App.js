import { useState } from 'react';
import Alunos from './components/Alunos';

import UserProvider from './contexts/user'

function App() {
  const [nomeAluno, setNomeAluno] = useState('LUCAS OLIVEIRA');


  return (
    <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <Titulo>
          <strong>Bem-vindo à Escola</strong>
        </Titulo>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;

function Titulo({ children }) {
  return(
    <div>
      {children}
    </div>
  )
}

