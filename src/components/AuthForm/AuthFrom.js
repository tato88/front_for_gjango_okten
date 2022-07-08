import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useLocation} from "react-router-dom";

const AuthFrom = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const {pathname} = useLocation()
    useEffect(() => {
        pathname == '/register' ? setIsLogin(false):setIsLogin(true)
    }, [pathname])
    const submit = (user) => {

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <div>

            </div>
            <button>{isLogin?'login':'register'}</button>
        </form>
    );
};

export {AuthFrom};