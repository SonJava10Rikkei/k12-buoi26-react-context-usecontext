import React from 'react';
import { useAuthContext } from './AuthContext';

function Home() {
    const { isLoggedIn } = useAuthContext();

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome to the Home Page!</h2>
                    <p>You are logged in.</p>
                </div>
            ) : (
                <div>
                    <h2>Welcome to the Home Page!</h2>
                    <p>Please login to access the content.</p>
                </div>
            )}
        </div>
    );
}

export default Home;
