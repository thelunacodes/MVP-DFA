import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export function UserProvider({children}) {
    const [name, setName] = useState("Pedro");

    return (
        <UserContext.Provider value={{ username: name, setUsername: setName }}>
            {children}
        </ UserContext.Provider>
    )
}

export function UseUserContext() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("O 'UseUserContext' deve ser usado dentro de um 'UserProvider'!")
    }

    return context;
}