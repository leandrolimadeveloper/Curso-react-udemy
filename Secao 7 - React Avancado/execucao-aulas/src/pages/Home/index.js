import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Página HOME</h1>
      <Link to="/sobre">Sobre</Link><br></br>
      <Link to='/contato'>Contatos</Link>
    </div>
  );
}

export default Home;