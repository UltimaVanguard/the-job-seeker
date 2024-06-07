import { useQuery } from '@apollo/client';

import { QUERY_ME, QUERY_ALL_JOBS } from '../../utils/queries';

import { Flex, Button, Card, CardHeader, CardBody, CardFooter, Text,
         Heading, Box, SimpleGrid, Spacer, ButtonGroup} from '@chakra-ui/react';

const JobSeekerHome = () => {
    const { loading, data } = useQuery(QUERY_ALL_JOBS)

    const jobs = data?.getJobs || [];

    if (loading) {
        return <div>Loading...</div>;
    } 

    if (!jobs.length) {
        return <Heading>No jobs posted yet!</Heading>
    }

    return (
        <Box>
            <Heading className='home-heading'>Current Job Postings</Heading>
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
                                <ButtonGroup gap='210'>
                                    <Button variant='outline' colorScheme='blue'>View Job</Button>
                                    <Button variant='outline' colorScheme='green'>Apply</Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                )}
            </SimpleGrid>
        </Box>
    )
};

export default JobSeekerHome;