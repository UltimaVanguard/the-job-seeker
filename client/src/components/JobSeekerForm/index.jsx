import { VStack, Input, Button, InputGroup, Select, FormControl, 
        FormLabel, FormErrorMessage, FormHelperText, InputLeftAddon } from '@chakra-ui/react';

const JobSeekerForm = ({jobSeekerState, handleChange, handleJobSeekerSubmit}) => {
    // initializes error fields
    const fNameError = jobSeekerState.fName === '';
    const lNameError = jobSeekerState.lName === '';
    const jsAddrError = jobSeekerState.lName === ''; 
    const jsPhoneError = jobSeekerState.lName === '';

    return (
        <form onSubmit={handleJobSeekerSubmit}>
                    <VStack spacing={4}>
                        <FormControl isRequired isInvalid={fNameError}>    
                            <FormLabel>First Name:</FormLabel>
                            <Input
                                name='fName'
                                type='text'
                                placeholder='First Name'
                                value={jobSeekerState.fName}
                                onChange={handleChange}
                            />
                            {fNameError ? (
                                <FormErrorMessage>First name is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your first name.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={lNameError}>    
                            <FormLabel>Last Name:</FormLabel>
                            <Input
                                name='lName'
                                type='text'
                                placeholder='Last Name'
                                value={jobSeekerState.lName}
                                onChange={handleChange}
                            />
                            {lNameError ? (
                                <FormErrorMessage>Last name is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your last name.</FormHelperText>
                                )}
                        </FormControl>
                        <FormControl isRequired isInvalid={jsAddrError}>    
                            <FormLabel>Address:</FormLabel>
                            <Input
                                name='address'
                                type='text'
                                placeholder='Address'
                                value={jobSeekerState.address}
                                onChange={handleChange}
                            />
                            {lNameError ? (
                                <FormErrorMessage>Address is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your address.</FormHelperText>
                                )}
                        </FormControl>
                        <FormControl isRequired isInvalid={jsPhoneError}>    
                            <FormLabel>Phone Number:</FormLabel>
                            <InputGroup>
                                <InputLeftAddon>+1</InputLeftAddon>
                                <Input
                                    name='phone'
                                    type='text'
                                    placeholder='Phone Number'
                                    value={jobSeekerState.phone}
                                    onChange={handleChange}
                                />
                            </InputGroup>
                            {jsPhoneError ? (
                                <FormErrorMessage>Phone number is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your phone number.</FormHelperText>
                                )}
                        </FormControl>
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                </form>
    )
};
    
export default JobSeekerForm;