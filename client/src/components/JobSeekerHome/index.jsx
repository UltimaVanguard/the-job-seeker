import { useQuery, useMutation, ApolloError } from '@apollo/client';
import { QUERY_USER, QUERY_ALL_JOBS } from '../../utils/queries';
import { ADD_APPLICATION } from '../../utils/mutations';
import {
    Flex, Button, Card, CardHeader, CardBody, CardFooter, Text,
    Heading, Box, SimpleGrid, Spinner, Center, useToast
} from '@chakra-ui/react';

const JobSeekerHome = ({ id }) => {
    const toast = useToast();

    const [addApplication, { error: applicationError }] = useMutation(ADD_APPLICATION, {
        onError: (err) => {
            console.error('Mutation Error:', err);
            toast({
                title: "Error",
                description: `Failed to submit application: ${err.message}`,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    });

 
    const { loading: userLoading, data: userData, error: userError } = useQuery(QUERY_USER, { variables: { id } });
    const { loading, data, error: jobsError } = useQuery(QUERY_ALL_JOBS);

    if (userError) {
        console.error('User Query Error:', userError);
        toast({
            title: "Error",
            description: `Failed to load user data: ${userError.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        return <Center h="100vh"><Heading>Error loading user data</Heading></Center>;
    }

    if (jobsError) {
        console.error('Jobs Query Error:', jobsError);
        toast({
            title: "Error",
            description: `Failed to load jobs: ${jobsError.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        return <Center h="100vh"><Heading>Error loading jobs</Heading></Center>;
    }

    const jobs = data?.getJobs || [];
    const user = userData?.getUser || {};

   
    const onClickApply = async (event) => {
        const jobId = event.currentTarget.getAttribute('data-key');
        if (!user || !user.seekerProfile) {
            toast({
                title: "Error",
                description: "User profile data is missing.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        const seekerId = user.id;
        const { fName, lName } = user.seekerProfile;

        console.log('Applying for job:', { jobId, seekerId, fName, lName });

        try {
            const response = await addApplication({ variables: { jobId, seekerId, fName, lName } });
            console.log('Application Response:', response);
            toast({
                title: "Application Sent",
                description: "Your application has been submitted successfully.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (err) {
            console.error('Application Submission Error:', err);
            toast({
                title: "Error",
                description: `Failed to submit application: ${err.message}`,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };

    if (loading || userLoading) {
        return (
            <Center h="100vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    if (!jobs.length) {
        return (
            <Center h="100vh">
                <Heading>No jobs posted yet!</Heading>
            </Center>
        );
    }

    return (
        <Box p={5}>
            <Heading mb={5} textAlign="center">Current Job Postings</Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                {jobs.map((job) => (
                    <Card key={job.id} className='card' boxShadow="lg" borderRadius="md" p={4}>
                        <CardHeader>
                            <Heading size='md'>{job.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text><strong>Location:</strong> {job.location}</Text>
                            <Text><strong>Salary:</strong> ${job.salaryRange}</Text>
                            <Text><strong>Job Type:</strong> {job.jobType}</Text>
                        </CardBody>
                        <CardFooter justifyContent="space-between">
                            <Button variant='outline' colorScheme='blue'>View Job</Button>
                            <Button 
                                key={job.id} 
                                data-key={job.id} 
                                variant='outline' 
                                colorScheme='green' 
                                onClick={onClickApply}
                            >
                                Apply
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default JobSeekerHome;
