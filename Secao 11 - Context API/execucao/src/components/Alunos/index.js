import { useContext } from 'react';

import Nome from '../Nome';

import { UserContext } from '../../contexts/user'

function Alunos() {
  const { alunos, qtdAlunos } = useContext(UserContext)
  return (
    <div>
      <h2>Component Alunos: {alunos}</h2>
      <h2>Qtd. de alunos: {qtdAlunos}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;
