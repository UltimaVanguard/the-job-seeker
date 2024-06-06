import { useQuery } from '@apollo/client';

// import { QUERY_COMPANY_JOB } from '../../utils/queries';

import { HStack, Card, CardHeader, CardBody, CardFooter, Text,
         Heading, Wrap, WrapItem, SimpleGrid, Box} from '@chakra-ui/react';

const EmployerHome = (id) => {
    const names = ['John Doe', 'Jane Doe', 'Joe Schmoe', 'John John', 'Jimmy John', 'Jacob Doomer', 'Cool Guy', 'Tom Tom']

    // const { loading, data } = useQuery(QUERY_COMPANY_JOB, {
    //     variables: { employerId: id }
    // })

    // const jobs = data?.jobs || []

    // if (!jobs.length) {
    //     return <h3>No jobs posted yet!</h3>
    // }

    return (
        <Box>
            <Heading className='home-heading'>Current Job Postings</Heading>
            {/* <SimpleGrid columns={4} spacing={10}>
                {jobs &&
                    jobs.map((job) => (
                        <Card className='card>
                            <CardHeader>
                                <Heading>{job.title}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>Description: {job.description}</Text>
                                <Text>Location: {job.location}</Text>
                                <Text>Salary: {job.Salary}</Text>
                            </CardBody>
                            <CardFooter>
                                <HStack>
                                    {job.applications.map((application) => (
                                        <Wrap spacing={3}>
                                            <WrapItem>
                                                <Card>
                                                    <Text>{application.seekerId}</Text>
                                                </Card>
                                            </WrapItem>
                                        </Wrap>
                                    ))}
                                </HStack>
                            </CardFooter>
                        </Card>
                    )
                )}
            </SimpleGrid> */}
            <SimpleGrid className='grid' minChildWidth='400px' spacing={10}>
                <Card maxW='md' colorScheme='red'>
                    <CardHeader>
                        <Heading size='lg'>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>Salary: $80,0000/yr</Text>
                    </CardBody>
                    <CardFooter>
                        <HStack>
                            {names.map((name) => (
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
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
                                <Wrap spacing={3}>
                                    <WrapItem>
                                        <Card>
                                            <Text>{name}</Text>
                                        </Card>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </HStack>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    )
};

export default EmployerHome;