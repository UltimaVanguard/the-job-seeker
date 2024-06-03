import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);

    return (
        <p>This is the login page</p>
    )
}

export default Login;