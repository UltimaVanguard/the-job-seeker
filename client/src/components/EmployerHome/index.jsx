import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_COMPANY_JOBS } from '../../utils/queries';

import { HStack, Card, CardHeader, CardBody, CardFooter, Text,
         Heading, Wrap, WrapItem, SimpleGrid, Box, Button} from '@chakra-ui/react';

const EmployerHome = (employerId) => {
    const names = ['John Doe', 'Jane Doe', 'Joe Schmoe', 'John John', 'Jimmy John', 'Jacob Doomer', 'Cool Guy', 'Tom Tom']

    console.log(employerId);
    const { loading, data } = useQuery(QUERY_COMPANY_JOBS, {
        variables: { employerId: employerId.id }
    })

    if (loading) {
        return <div>Loading...</div>;
    } 

    console.log(data)
    const jobs = data?.getCompanyJobs || []

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
                                <SimpleGrid columns={4} spacing={10}>
                                    {job.applications.map((application) => (
                                        <Card key={application.seekerId}>
                                            <Link to={`/profile/${application.seekerId}`}>
                                                <Text>{application.fName} {application.lName}</Text>
                                            </Link>
                                        </Card>
                                    ))}
                                </SimpleGrid>
                            </CardFooter>
                        </Card>
                    )
                )}
            </SimpleGrid>
        </Box>
    )
};

export default EmployerHome;