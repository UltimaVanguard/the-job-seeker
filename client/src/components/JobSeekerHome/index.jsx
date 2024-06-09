import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USER, QUERY_ALL_JOBS } from '../../utils/queries';
import { ADD_APPLICATION } from '../../utils/mutations';

import { Flex, Button, Card, CardHeader, CardBody, CardFooter, Text,
         Heading, Box, SimpleGrid, Spacer, ButtonGroup} from '@chakra-ui/react';

const JobSeekerHome = (id) => {
    // adds application to job
    const [addApplication, { error } ] = useMutation(ADD_APPLICATION)
    const userData = useQuery(QUERY_USER, {
        variables: { id: id.id },
    })
    const { loading, data } = useQuery(QUERY_ALL_JOBS)

    const jobs = data?.getJobs || [];

    if (loading || userData.loading) {
        return <div>Loading...</div>;
    } 

    const user = userData.data.getUser || {};

    if (!jobs.length) {
        return <Heading>No jobs posted yet!</Heading>
    }

    const onClickApply = async (event) => {
        const jobId = event.target.getAttribute('data-key');

        const seekerId = user.id
        const fName = user.seekerProfile.fName
        const lName = user.seekerProfile.lName

        try {
            const { data } = await addApplication({
                variables: {jobId, seekerId, fName, lName  },
            })
        } catch (err) {
            console.error(err);
        };
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
                                    <Button key={job.id} data-key={job.id} variant='outline' colorScheme='green' onClick={onClickApply}>Apply</Button>
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