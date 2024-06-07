import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { Heading, Button, Flex, Box, Spacer, ButtonGroup } from '@chakra-ui/react';

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
                    {/* if they're logged in, changes what is accessible on the header */}
                    {Auth.loggedIn() ? (
                        <>
                            <ButtonGroup>
                                <Button colorScheme='blue'>
                                <Link to='/me'>
                                    My Profile
                                </Link>
                                </Button>
                                <Button colorScheme='red' onClick={logout}>
                                    Logout
                                </Button>
                            </ButtonGroup>
                        </>
                    ) : (
                        <>
                            {/* Changes button text to Signup/Login */}
                            {loginState ? (
                                <Button colorScheme='blue' onClick={handleClick}>
                                    Signup
                                </Button>
                            ) : (
                                <Button colorScheme='blue' onClick={handleClick}>
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