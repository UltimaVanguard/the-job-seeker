import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries';

import { VStack, Input, Button, InputRightElement, InputGroup, Select,
    FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react';

const CreateProfile = () => {
    const employer = false
    const [employerState, setEmployerState] = useState({ name: '', industry: '' });
    const [jobSeekerState, setJobSeekerState] = useState({ fName: '', lName: '' });
    const [selected, setSelected] = useState('');

    // const { loading, data } = useQuery(QUERY_ME)

    // const user = data?.me

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (user.role === 'JOB-SEEKER') {
    //     employer = false;
    // }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (employer === true) {
            setEmployerState({
                ...employerState,
                [name]: value,
            });

            if (name === 'industry') {
                setSelected(value);
            }
        } else {
            setJobSeekerState({
                ...jobSeekerState,
                [name]: value,
            });
        };
    }

    const handleEmployerSubmit = (event) => {
        event.preventDefault();

        setEmployerState({
            name: '',
            industry: '',
        });
        setSelected('');
    }

    const handleJobSeekerSubmit = (event) => {
        event.preventDefault();

        setJobSeekerState({
            fName: '',
            lName: '',
        });
    }

    const empNameError = employerState.name === '';
    const fNameError = jobSeekerState.fName === '';
    const lNameError = jobSeekerState.lName === ''; 

    return (
        <main>
            <h2>Build Your Profile</h2>
            {employer ? (
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
                                <FormErrorMessage>Username is required.</FormErrorMessage>
                            ) : (
                                <FormHelperText>Enter your company name.</FormHelperText>
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
            ) : (
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
                        <Button colorScheme='green' variant='outline' type='submit'>
                            Submit
                        </Button>
                    </VStack>
                </form>
            )}
        </main>
    )
}

export default CreateProfile;