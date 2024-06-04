import { VStack, Input, Button, InputGroup, Select, FormControl, 
    FormLabel, FormErrorMessage, FormHelperText, InputLeftAddon } from '@chakra-ui/react';

const EmployerForm = ({employerState, selected, handleChange, handleEmployerSubmit}) => {
    // initializes error fields
    const empNameError = employerState.name === '';
    const empAddrError = employerState.address === '';
    const empPhoneError = employerState.phone === '';
    const emailError = employerState.email === '';

    return (
        <form onSubmit={handleEmployerSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired isInvalid={empNameError}>    
                            <FormLabel>Company Name:</FormLabel>
                            <Input
                                name='name'
                                type='text'
                                placeholder='Company Name'
                                value={employerState.name}
                                onChange={handleChange}
                            />
                            {empNameError ? (
                                <FormErrorMessage>Company name is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your company's name.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={empAddrError}>    
                            <FormLabel>Address:</FormLabel>
                            <Input
                                name='address'
                                type='text'
                                placeholder='Address'
                                value={employerState.address}
                                onChange={handleChange}
                            />
                            {empAddrError ? (
                                <FormErrorMessage>Address is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your company's address.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={empPhoneError}>    
                            <FormLabel>Phone Number:</FormLabel>
                            <InputGroup>
                                <InputLeftAddon>+1</InputLeftAddon>
                                <Input
                                    name='phone'
                                    type='text'
                                    placeholder='Phone Number'
                                    value={employerState.phone}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            {empPhoneError ? (
                                <FormErrorMessage>Phone number is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your company's phone number.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={emailError}>    
                            <FormLabel>Email Address:</FormLabel>
                            <Input
                                name='email'
                                type='text'
                                placeholder='Email Address'
                                value={employerState.email}
                                onChange={handleChange}
                            />
                            {emailError ? (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your company's email.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Industry:</FormLabel>
                            <Select value={selected} name='industry' placeholder='Select industry' onChange={handleChange}>
                                <option value='tech'>Technology</option>
                                <option value='health'>Health</option>
                                <option value='finance'>Finance</option>
                                <option value='construction'>Construction</option>
                            </Select>
                        </FormControl>
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                </form>
    )
};

export default EmployerForm;