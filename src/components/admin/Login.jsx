import { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { observer } from "mobx-react"
import { CheckLogin } from "../../data/loginServer"
import Header from '../design/Header';



const Login = (observer(() => {

    const [name, setName] = useState('');
    const [password, setPasword] = useState('');

    const CheckLoginServer = () => {
        CheckLogin(name, password)
            .catch(() => {
                setName('');
                setPasword('');
            })
    }

    return (
        <>
            <Header></Header>
            <div id='lab'>
                <label>
                    <TextField type='text' value={name} onChange={(e) => setName(e.target.value)} />:שם
                </label >
                <br />
                <label>
                    <TextField type='password' value={password} onChange={(e) => setPasword(e.target.value)} />:סיסמה
                </label>
                <br />

                <Button onClick={CheckLoginServer} id='loginButton'>התחברות</Button>
            </div>
        </>
    )
}))

export default Login
