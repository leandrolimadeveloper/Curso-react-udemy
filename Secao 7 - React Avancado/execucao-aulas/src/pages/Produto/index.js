import { useParams } from "react-router-dom"

export default function Produto() {
    const { id } = useParams()
    
    return (
        <div>
            <h1>Produtos</h1>
            <span>Produto selecionado: {id}</span>
        </div>
    )
}