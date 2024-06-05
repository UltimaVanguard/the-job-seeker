import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries';
// import { QUERY_JOBS } from '../../utils/queries';

import { HStack, Button, Card, CardHeader, CardBody, CardFooter, Text,
         Heading } from '@chakra-ui/react';

const JobSeekerHome = () => {
    const names = ['John Doe', 'Jane Doe']

    // const { loading, data } = useQuery(QUERY_JOBS})

    // const jobs = data?.jobs || []

    // if (!jobs.length) {
    //     return <h3>No jobs posted yet!</h3>
    // }

    return (
        <div>
            <Heading>Current Job Postings</Heading>
            {/* {jobs &&
                jobs.map((job) => (
                    <Card>
                        <CardHeader>
                            <h4>{job.title}</h4>
                        </CardHeader>
                        <CardBody>
                            <p>{job.description}</p>
                            <p>{job.Salary}</p>
                        </CardBody>
                        <CardFooter>
                            <Button>
                            </Button>
                            <Button>
                            </Button>
                        </CardFooter>
                    </Card>
                )
            )} */}
            <Card>
                <CardHeader>
                    <Heading size='lg'>Software Engineer</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Full Stack Software Engineer to lead projects</Text>
                    <Text>$80,0000/yr</Text>
                </CardBody>
                <CardFooter>
                    <HStack>
                        <Button>View Job</Button>
                        <Button>Apply</Button>
                    </HStack>
                </CardFooter>
            </Card>
        </div>
    )
};

export default JobSeekerHome;