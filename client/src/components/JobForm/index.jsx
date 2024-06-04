import { VStack, Input, Button,  Select, FormControl, FormLabel, 
         FormErrorMessage, FormHelperText } from '@chakra-ui/react';

const JobForm = ({ formState, selected, handleChange, handleFormSubmit }) => {
    // initializes error fields
    const titleError = formState.title === '';
    const descError = formState.description === '';
    const locError = formState.location === '';
    const salaryError = formState.salaryRange === '';
    const experienceError = formState.experienceLevel=== '';

    return (
        <form onSubmit={handleFormSubmit}>
            <VStack spacing={4}>
                <FormControl isRequired isInvalid={titleError}>    
                    <FormLabel>Title:</FormLabel>
                    <Input
                        name='title'
                        type='text'                            placeholder='Title'
                        value={formState.title}
                        onChange={handleChange}
                    />
                    {titleError ? (
                        <FormErrorMessage>Title is required.</FormErrorMessage>
                    ) : (
                        <FormHelperText>Enter the job title.</FormHelperText>
                    )}
                </FormControl>
                <FormControl isRequired isInvalid={descError}>    
                    <FormLabel>Description:</FormLabel>
                    <Input
                        name='description'
                        type='text'
                        placeholder='Description'
                        value={formState.description}
                        onChange={handleChange}
                    />
                    {descError ? (
                        <FormErrorMessage>Description is required.</FormErrorMessage>
                    ) : (
                        <FormHelperText>Enter the job description.</FormHelperText>
                    )}
                </FormControl>
                <FormControl isRequired isInvalid={locError}>    
                    <FormLabel>Location:</FormLabel>
                    <Input
                        name='location'
                        type='text'
                        placeholder='Location'
                        value={formState.location}
                        onChange={handleChange}
                    />
                    {locError ? (
                        <FormErrorMessage>Location is required.</FormErrorMessage>
                    ) : (
                        <FormHelperText>Enter the job location.</FormHelperText>
                    )}
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Job Type:</FormLabel>
                    <Select value={selected} name='jobType' placeholder='Select job type' onChange={handleChange}>
                        <option value='onsite'>On Site</option>
                        <option value='hybrid'>Hybrid</option>
                        <option value='remote'>Remote</option>
                    </Select>
                </FormControl>
                <FormControl isRequired isInvalid={salaryError}>    
                    <FormLabel>Salary:</FormLabel>
                    <Input
                        name='salaryRange'
                        type='text'
                        placeholder='Salary'
                        value={formState.salaryRange}
                        onChange={handleChange}
                    />
                    {salaryError ? (
                        <FormErrorMessage>Salary is required.</FormErrorMessage>
                    ) : (
                        <FormHelperText>Enter the job salary.</FormHelperText>
                    )}
                </FormControl>
                <FormControl isRequired isInvalid={experienceError}>    
                    <FormLabel>Experience Level:</FormLabel>
                    <Input
                        name='experienceLevel'
                        type='text'
                        placeholder='Experience'
                        value={formState.experienceLevel}
                        onChange={handleChange}
                    />
                    {experienceError ? (
                        <FormErrorMessage>Experience level is required.</FormErrorMessage>
                    ) : (
                        <FormHelperText>Enter the job experience level.</FormHelperText>
                    )}
                </FormControl>
                <Button colorScheme='green' variant='outline' type='submit'>
                    Submit
                </Button>
            </VStack>
        </form>
    )
}

export default JobForm;