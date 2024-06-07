import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { Heading, Button, Flex, Box, Spacer } from '@chakra-ui/react';

const Header = ({ loginState, setLoginState}) => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    const handleClick = (event) => {
        event.preventDefault();

        setLoginState(
            !loginState,
        );
    };

    return (
        <header>
            <Flex align='center'>
                <Box>                
                    <Link to='/'>
                        <Heading size='3xl'>JobSeeker</Heading>
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/me'>
                                My Profile
                            </Link>
                            <Button colorScheme='red' variant='outline' onClick={logout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* Changes button text to Signup/Login */}
                            {loginState ? (
                                <Button colorScheme='blue' variant='outline' onClick={handleClick}>
                                    Signup
                                </Button>
                            ) : (
                                <Button colorScheme='blue' variant='outline' onClick={handleClick}>
                                    Login
                                </Button>
                            )}
                        </>
                    )}
                </Box>
            </Flex>
        </header>
    )
}

export default Header;