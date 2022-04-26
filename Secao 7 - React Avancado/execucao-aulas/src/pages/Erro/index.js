import { Link } from 'react-router-dom'

function Erro() {
  return (
    <div>
      <h1>Error 404 — Página não encontrada</h1><br></br>
      <span>Tente um desses links:</span><br></br>
      <Link to="/">Home</Link><br></br>
      <Link to="/sobre">Sobre</Link><br></br>
      <Link to='/contato'>Contatos</Link><br></br>
    </div>
  );
}

export default Erro;