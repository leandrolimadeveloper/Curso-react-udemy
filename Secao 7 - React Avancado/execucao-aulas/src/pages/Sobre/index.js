import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div>
      <h1>Sobre a empresa...</h1>
      <Link to='/'>Home</Link><br></br>
      <Link to='/contato'>Contato</Link>
    </div>
  );
}

export default Sobre;