import React from 'react';
import {AuthFrom} from "../../components";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <AuthFrom/>
            <Link to={'/register'}>registration</Link>
        </div>
    );
};

export {LoginPage};