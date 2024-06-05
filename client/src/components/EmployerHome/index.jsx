import { useQuery } from '@apollo/client';

// import { QUERY_COMPANY_JOB } from '../../utils/queries';

import { HStack, Card, CardHeader, CardBody, CardFooter, Text,
         Heading } from '@chakra-ui/react';

const EmployerHome = (id) => {
    const names = ['John Doe', 'Jane Doe']

    // const { loading, data } = useQuery(QUERY_COMPANY_JOB, {
    //     variables: { employerId: id }
    // })

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
                            {job.applications.map((application) => (
                                <p>{application.seekerId}</p>
                            ))}
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
                        {names.map((name) => (
                            <Card>
                                <Text>{name} </Text><br/>
                            </Card>
                        ))}
                    </HStack>
                </CardFooter>
            </Card>
        </div>
    )
};

export default EmployerHome;