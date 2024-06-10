import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';


import { Heading, Alert } from '@chakra-ui/react';

import Auth from '../utils/auth';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm'; 

const Login = ({ loginState, setLoginState }) => {
    const [logState, setLogState] = useState({ email: '', password: '' });
    const [signupState, setSignupState] = useState({ username: '', email: '', password: '', role: '' });
    const [selected, setSelected] = useState('');
    const [show, setShow] = useState(false);
    const [login, { lError, lData }] = useMutation(LOGIN_USER);
    const [createUser, { sError, sData}] = useMutation(ADD_USER);

    const handleClick = () => setShow(!show);

    const handleChange = (event) => {
        const { name, value } = event.target;


        if (loginState) {
            setLogState({
                ...logState,
                [name]: value,
            });
        } else {
            setSignupState({
                ...signupState,
                [name]: value,
            });
            
            if (name === 'role') {
                setSelected(value)
            }
        }
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: {...logState},
            })

            console.log(data.login.token)
            Auth.login(data.login.token);
        } catch (err) {
            alert
            console.error(err);
        };

        setLogState({
            email: '',
            password: '',
        })
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        console.log(signupState)
        try {
            const { data } = await createUser({
                variables: {...signupState},
            })

            console.log(data)
            Auth.signup(data.createUser.token);
        } catch (err) {
            console.error(err);
            return (
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Error:</AlertTitle>
                    <AlertDescription>There was an error, please try again!</AlertDescription>
                </Alert>
            )
        };

        setSignupState({
            username: '',
            email: '',
            password: '',
            role: '',
        })
        setSelected('');
    }

    return (
        <main>
            {loginState ? (
                <div>
                    <Heading>Login</Heading>
                    <LoginForm logState={logState} handleChange={handleChange}
                     handleLoginSubmit={handleLoginSubmit} show={show} 
                     handleClick={handleClick}/>
                </div>
            ) : (
                <div>
                    <Heading>Signup</Heading>
                    <SignupForm signupState={signupState} handleChange={handleChange}
                     handleSignupSubmit={handleSignupSubmit} selected={selected}
                     show={show} handleClick={handleClick}/>
                </div>
            )}
        </main>
    )
}

export default Login;