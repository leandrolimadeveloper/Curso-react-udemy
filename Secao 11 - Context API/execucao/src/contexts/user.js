import { useState, createContext } from 'react'

export const UserContext = createContext({})

function UserProvider({ children }) {
    const [alunos, setAlunos] = useState('Leandro Lima') 
    const [qtdAlunos, setQtdAlunos] = useState(50)

    return (
        <UserContext.Provider value={{alunos, setAlunos, qtdAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider