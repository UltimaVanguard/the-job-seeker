import { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { LOGIN_USER, ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm'; 

const Login = ({ loginState, setLoginState }) => {
    const [logState, setLogState] = useState({ email: '', password: '' });
    const [signupState, setSignupState] = useState({ username: '', email: '', password: '', role: '' });
    const [selected, setSelected] = useState('');
    const [show, setShow] = useState(false)
    // const [login, { error, data }] = useMutation(LOGIN_USER);
    // const [signup, { error, data}] = useMutation(ADD_USER);

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

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        };

        setLogState({
            email: '',
            password: '',
        })
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await signup({
                variables: {...signupState},
            })

            Auth.signup(data.signup.token);
        } catch (err) {
            console.error(err);
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
                    <h2>Login</h2>
                    <LoginForm logState={logState} handleChange={handleChange}
                     handleLoginSubmit={handleLoginSubmit} show={show} 
                     handleClick={handleClick}/>
                </div>
            ) : (
                <div>
                    <h2>Signup</h2>
                    <SignupForm signupState={signupState} handleChange={handleChange}
                     handleSignupSubmit={handleSignupSubmit} selected={selected}
                     show={show} handleClick={handleClick}/>
                </div>
            )}
        </main>
    )
}

export default Login;