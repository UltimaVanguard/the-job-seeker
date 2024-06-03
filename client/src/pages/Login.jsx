import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

import { VStack, Input, Button, InputRightElement, InputGroup, Select} from '@chakra-ui/react';

const Login = ({ loginState, setLoginState }) => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '', role: '' });
    const [show, setShow] = useState(false)
    // const [login, { error, data }] = useMutation(LOGIN_USER);
    // const [signup, { error, data}] = useMutation(ADD_USER);

    const handleClick = () => setShow(!show);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });  
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // try {
        //     if (loginState) {
        //         const { data } = await login({
        //             variables: {email, password},
        //         })

        //         Auth.login(data.login.token);
        //     } else {
        //         const { data } = await signup({
        //             variables: {...formState},
        //         })

        //         Auth.login(data.signup.token);
        //     };
        // } catch (err) {
        //     console.error(err);
        // };

        setFormState({
            username: '',
            email: '',
            password: '',
            role: '',
        })
    }

    return (
        <main>
            <form onSubmit={handleFormSubmit}>
                {loginState ? (
                    <VStack spacing={3}>
                        <h2>Login</h2>
                        <Input
                            name='email'
                            type='text'
                            placeholder='Email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                name='password'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h="1.75rem" size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                ) : (
                    <VStack spacing={3}>
                        <h2>Signup</h2>
                        <Input
                            name='username'
                            type='text'
                            placeholder='username'
                            value={formState.username}
                            onChange={handleChange}
                        />
                        <Input
                            name='email'
                            type='text'
                            placeholder='Email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <InputGroup size='md'>
                            <Input
                                name='password'
                                type={show ? 'text' : 'password'}
                                placeholder='Password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h="1.75rem" size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Select name='role' placeholder='Select role'>
                            <option value='employer'>Employer</option>
                            <option value='jobseeker'>Job Seeker</option>
                        </Select>
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                )}
            </form>
        </main>
    )
}

export default Login;