import { useState } from 'react';
import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';
import { Button} from '@chakra-ui/react';

const Header = ({ loginState, setLoginState}) => {
    // const [loginState, setLoginState] = useState(true);
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
            <div>                
                <Link to='/'>
                    <h1>JobSeeker</h1>
                </Link>
            </div>
            <div>
                {/* {Auth.loggedIn() ? ( */}
                    {/* <>
                        <Link to='/me'>
                            My Profile
                        </Link>
                        <Button colorScheme='red' variant='outline' onClick={logout}>
                            Logout
                        </Button>
                    </> */}
                {/* ) : ( */}
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
                {/* )} */}
            </div>
        </header>
    )
}

export default Header;