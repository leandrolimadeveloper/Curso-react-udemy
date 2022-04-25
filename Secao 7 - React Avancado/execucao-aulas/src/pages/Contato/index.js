import { Link } from 'react-router-dom'

function Contato() {
  return (
    <div>
      <h1>Página de contatos</h1>
      <Link to='/'>Home</Link><br></br>
      <Link to='/sobre'>Sobre</Link>
    </div>
  );
}

export default Contato;