import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_COMPANY_JOBS } from '../../utils/queries';

import { HStack, Card, CardHeader, CardBody, CardFooter, Text,
         Heading, Wrap, WrapItem, SimpleGrid, Box, Button} from '@chakra-ui/react';

const EmployerHome = (employerId) => {
    const names = ['John Doe', 'Jane Doe', 'Joe Schmoe', 'John John', 'Jimmy John', 'Jacob Doomer', 'Cool Guy', 'Tom Tom']

    const { loading, data } = useQuery(QUERY_COMPANY_JOBS, {
        variables: { employerId: employerId.id }
    })

    const jobs = data?.getCompanyJobs || []

    if (loading) {
        return <div>Loading...</div>;
    } 

    if (!jobs.length) {
        return (
            <Box>
                <Heading>No jobs posted yet!</Heading>
                <Button className="job-button" colorScheme='green'><Link to="/newJob">Post new job</Link></Button>
            </Box>
        ) 
    }

    return (
        <Box>
            <Heading className='home-heading'>Your Posted Jobs</Heading>
            <Button className="job-button" colorScheme='green'><Link to="/newJob">Post new job</Link></Button>
            <SimpleGrid columns={4} spacing={10}>
                {jobs &&
                    jobs.map((job) => (
                        <Card key={job.id} className='card'>
                            <CardHeader>
                                <Heading size='md'>{job.title}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Location: {job.location}</Text>
                                <Text>Salary: ${job.salaryRange}</Text>
                                <Text>Job Type: {job.jobType}</Text>
                            </CardBody>
                            <CardFooter>
                                {/* <HStack>
                                    {job.applications.map((application) => (
                                        <Wrap spacing={3}>
                                            <WrapItem>
                                                <Card>
                                                    <Text>{application.seekerId}</Text>
                                                </Card>
                                            </WrapItem>
                                        </Wrap>
                                    ))}
                                </HStack> */}
                            </CardFooter>
                        </Card>
                    )
                )}
            </SimpleGrid>
        </Box>
    )
};

export default EmployerHome;