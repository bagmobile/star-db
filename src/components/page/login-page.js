import React from 'react';

const LoginPage = ({isAuth, onLogin}) => {
    return isAuth
        ? <p>You have already authenticated</p>
        : (
            <div>
                <p>Login to secret page</p>
                <button className="btn btn-primary"
                        onClick={onLogin}
                >Login
                </button>
            </div>
        );
};

export default LoginPage;
