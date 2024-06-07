import { VStack, Input, Button, InputRightElement, InputGroup, Select,
    FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react';

const LoginForm = ({logState, handleChange, handleLoginSubmit, show, handleClick}) => {
    return (
        <form onSubmit={handleLoginSubmit}>
            <VStack spacing={4}>
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
                <Button colorScheme='green' type='submit'>
                    Submit
                </Button>
            </VStack>
        </form>
    )
}

export default LoginForm;