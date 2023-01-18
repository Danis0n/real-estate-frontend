import React, { useState } from 'react';
import Layout from "../../../layout/Layout";
import {useAuth} from "../../../../hooks/useAuth";
import {useActions} from "../../../../hooks/useAction";
import ButtonGreen from "../../../ui/button/ButtonGreen";

const CreateUser = () => {

    const { error } = useAuth();
    const { register } = useActions();

    const [role, setRole] = useState<string>('user');
    const handleRole = (event: any) => setRole(event.target.value);

    const [inn, setInn] = useState<string>('');
    const [site, setSite] = useState<string>('');

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    console.log(password != password2)
    const handleSubmit = () => {
        if (password != password2) return;

        register({
            email: email, password: password,
            login: login, phone: phone,
            firstName: name, lastName: lastName,
            dateOfBirth: date, inn: inn,
            link: site, role: role,
        })
    }

    return <Layout title={'Регистрация'}>
        <div className={'w-[850px] mr-auto ml-auto'}>
            <form>
                <div className={'shadow-xl mt-[100px] mb-2 p-10 bg-white'}>
                    <div className={'text-2xl mb-5'}>Аккаунт</div>
                    <div onChange={handleRole} className={'flex gap-5 mb-5'}>
                        <div className={'text-gray-500'}>Тип аккаунта:</div>
                        <div><input required={true} type="radio" value="user" name="role"/> Собственник</div>
                        <div><input required={true} type="radio" value="company" name="role"/> Застройщик</div>
                    </div>
                </div>
                { role === 'company' ? (
                    <div className={'shadow-xl mb-2 p-10 bg-white'}>
                        <div className={'text-2xl mb-5'}>Данные для застройщика</div>
                        <div className={'flex gap-5 mb-5'}>
                            <div className={'mt-2.5'}>Сайт:</div>
                            <input
                                type={'text'}
                                className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                                placeholder={'Укажите сайт вашей компании'}
                                required={true}
                                value={site}
                                onChange={(e) => setSite(e.target.value)}
                            />
                        </div>
                        <div className={'flex gap-5'}>
                            <div className={'mt-2.5'}>ИНН:</div>
                            <input
                                type={'number'}
                                className={'p-3 mb-2 ring-black ring-1 rounded-sm w-[400px]'}
                                placeholder={'Укажите ИНН вашей компании'}
                                required={true}
                                value={inn}
                                onChange={(e) => setInn(e.target.value)}
                            />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <div className={'shadow-xl mb-2 p-10 bg-white'}>
                    <div className={'text-2xl mb-5'}>Личные данные</div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-3'}>Эл. почта:</div>
                        <input
                            type={'text'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'email'}
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5'}>Номер тел.:</div>
                        <input
                            type={'number'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'8-900-000-00-00'}
                            required={true}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-12'}>Имя:</div>
                        <input
                            type={'text'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'Иван'}
                            required={true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-3'}>Фамилия:</div>
                        <input
                            type={'text'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'Иванов'}
                            required={true}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-3'}>Дата рождения:</div>
                        <input
                            type={'date'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[355px]'}
                            placeholder={'31.12.2001'}
                            required={true}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className={'shadow-xl mb-2 p-10 bg-white'}>
                    <div className={'text-2xl mb-5'}>Авторизация</div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-3'}>Логин:</div>
                        <input
                            type={'text'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'linko'}
                            required={true}
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-3'}>Пароль:</div>
                        <input
                            type={'password'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'••••••••'}
                            required={true}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={'flex gap-5 mb-5'}>
                        <div className={'mt-2.5 mr-3'}>Повторите пароль:</div>
                        <input
                            type={'password'}
                            className={'p-3 mb-2 ring-gray-500 ring-1 rounded-sm w-[400px]'}
                            placeholder={'••••••••'}
                            required={true}
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </div>
                </div>
                <div className={'p-2'}>
                    <ButtonGreen onClick={handleSubmit}>
                        <p className={'text-xl'}>Создать</p>
                    </ButtonGreen>
                </div>
            </form>
        </div>
    </Layout>
};

export default CreateUser;