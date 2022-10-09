
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({});

function UserProvider({ children }) {


    const [votado, setVotado] = useState(false);
    const [votos, setVotos] = useState(1);
    const [votosComputados, setVotosComputados] = useState([])
    const [listaStorage, setListaStorage] = useState([])

    let voto;

    return (
        <UserContext.Provider value={{ votos, setVotos, voto, votado, setVotado, votosComputados, setVotosComputados, listaStorage, setListaStorage }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;