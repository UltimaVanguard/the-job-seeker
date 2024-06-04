import { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { LOGIN_USER, ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

import { VStack, Input, Button, InputRightElement, InputGroup, Select,
         FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react';

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

        // try {
        //     const { data } = await login({
        //         variables: {...logState},
        //     })

        //     Auth.login(data.login.token);
        // } catch (err) {
        //     console.error(err);
        // };

        setLogState({
            email: '',
            password: '',
        })
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        // try {
        //     const { data } = await signup({
        //         variables: {...signupState},
        //     })

        //     Auth.login(data.signup.token);
        // } catch (err) {
        //     console.error(err);
        // };

        setSignupState({
            username: '',
            email: '',
            password: '',
            role: '',
        })
        setSelected('');
    }

    const userError = signupState.username === '';
    const emailSignError = signupState.email === '';
    const pwSignError = signupState.password === '';

    return (
        <main>
            {loginState ? (
                <form onSubmit={handleLoginSubmit}>
                    <VStack spacing={4}>
                        <h2>Login</h2>
                        <FormControl>
                            <FormLabel>Email:</FormLabel>
                            <Input
                                name='email'
                                type='text'
                                placeholder='Email'
                                value={logState.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                        <FormLabel>Password:</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    name='password'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    value={logState.password}
                                    onChange={handleChange}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h="1.75rem" size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                </form>
            ) : (
                <form onSubmit={handleSignupSubmit}>
                    <VStack spacing={4}>
                        <h2>Signup</h2>
                        <FormControl isRequired isInvalid={userError}>    
                            <FormLabel>Username:</FormLabel>
                            <Input
                                name='username'
                                type='text'
                                placeholder='username'
                                value={signupState.username}
                                onChange={handleChange}
                            />
                            {userError ? (
                                <FormErrorMessage>Username is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your username.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={emailSignError}>
                            <FormLabel>Email:</FormLabel>
                            <Input
                                name='email'
                                type='text'
                                placeholder='Email'
                                value={signupState.email}
                                onChange={handleChange}
                            />
                            {emailSignError ? (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your email.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={pwSignError}>
                            <FormLabel>Password:</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    name='password'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    value={signupState.password}
                                    onChange={handleChange}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h="1.75rem" size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            {pwSignError ? (
                                <FormErrorMessage>Password is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your password.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Role:</FormLabel>
                            <Select value={selected} name='role' placeholder='Select role' onChange={handleChange}>
                                <option value='EMPLOYER'>Employer</option>
                                <option value='JOB_SEEKER'>Job Seeker</option>
                            </Select>
                        </FormControl>
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                 </form>
            )}
        </main>
    )
}

export default Login;