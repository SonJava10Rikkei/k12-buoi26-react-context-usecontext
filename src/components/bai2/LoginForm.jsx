import React, { useState } from 'react';
import { useAuthContext } from './AuthContext';

function LoginForm() {
    const { isLoggedIn, setIsLoggedIn } = useAuthContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAuthentication = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            <h2>{isLoggedIn ? 'Logout Form' : 'Login Form'}</h2>
            {!isLoggedIn && (
                <>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </>
            )}
            <button onClick={handleAuthentication}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default LoginForm;
