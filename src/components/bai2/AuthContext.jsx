import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
// export { useAuthContext };