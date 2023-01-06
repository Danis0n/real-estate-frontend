import { Inter } from '@next/font/google'
import { useActions } from '../app/hooks/useAction';
import {useAuth} from "../app/hooks/useAuth";
import {useEffect} from "react";

export default function Home() {

    const {accessToken, refreshToken, user} = useAuth();

    const {login, refresh} = useActions();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            refresh();
        }
    },  [])

    console.log(accessToken)
    console.log(user)

    // console.log(accessToken)
    // console.log(refreshToken)

    const handleLogin = () => {
        login({login: 'danis0n', password: 'sopriko31!'})
    }

  return (
    <div>
        {!!user ?
            <div>
            </div>
            :
            <div>
                <button onClick={handleLogin} >Войти</button>
            </div>
        }
    </div>
  )
}
