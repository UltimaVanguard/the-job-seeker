import { VStack, Input, Button, InputRightElement, InputGroup, Select,
        FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react';

const SignupForm = ({signupState, handleChange, handleSignupSubmit, selected, show, handleClick}) => {

    const userError = signupState.username === '';
    const emailSignError = signupState.email === '';
    const pwSignError = signupState.password === '';

    return (
        <form onSubmit={handleSignupSubmit}>
            <VStack spacing={4}>
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
    )
}

export default SignupForm;