import React from 'react';
import {Redirect} from 'react-router-dom'


const SecretPage = ({isAuth}) => {
    return isAuth
        ? (
            <div>
                <h3>This page is full of secrets!!!</h3>
            </div>
        )
        : <Redirect to="/login"/>;
};

export default SecretPage;
