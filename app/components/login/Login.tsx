import React, {FC, useState} from 'react';
import ButtonGreen from "../ui/button/ButtonGreen";
import Input from "../ui/input/Input";
import {useActions} from "../../hooks/useAction";

const Login: FC = () => {

    const { login } = useActions();

    const [loginVal, setLoginVal] = useState<string>('');
    const [passwordVal, setPasswordVal] = useState<string>('');

    return (
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Войти</h3>
                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш логин</label>
                        <Input type="text"
                               placeholder="Логин" isRequired={true} value={loginVal} setValue={setLoginVal}/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                        <Input type="password"
                               placeholder="••••••••" isRequired={true} value={passwordVal} setValue={setPasswordVal}/>
                    </div>
                    <div className="flex justify-between">
                        <a href="app/components/login/Login#"
                           className="text-primary-700 hover:underline">Забыли пароль?</a>
                    </div>
                    <div className='text-center'>
                    <ButtonGreen
                        onClick={() => login({login: loginVal, password: passwordVal})}
                    >Войти в аккаунт</ButtonGreen>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Нет аккаунта? <a href="app/components/login/Login#"
                                           className="text-primary-700 hover:underline"> Создать аккаунт</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;