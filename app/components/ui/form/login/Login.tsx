import React, {FC, useState} from 'react';
import ButtonGreen from "../../button/ButtonGreen";
import Input from "../../input/Input";
import {LoginRequest} from "../../../../types/auth/auth.request";

interface LoginType {
    login: (data: LoginRequest) => void
}

const Login: FC<LoginType> = (props: LoginType) => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Войти</h3>
                <form className="space-y-6" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш логин</label>
                        <Input type="text"
                               placeholder="Логин" isRequired={true} value={login} setValue={setLogin}/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                        <Input type="password"
                               placeholder="••••••••" isRequired={true} value={password} setValue={setPassword}/>
                    </div>
                    <div className="flex justify-between">
                        <a href="#"
                           className="text-primary-700 hover:underline">Забыли пароль?</a>
                    </div>
                    <div className='text-center'>
                    <ButtonGreen
                        onClick={() => props.login({login: login, password: password})}
                    >Войти в аккаунт</ButtonGreen>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Нет аккаунта? <a href="#"
                                           className="text-primary-700 hover:underline"> Создать аккаунт</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;