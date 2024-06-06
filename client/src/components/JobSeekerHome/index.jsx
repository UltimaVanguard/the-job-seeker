import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries';
// import { QUERY_JOBS } from '../../utils/queries';

import { Flex, Button, Card, CardHeader, CardBody, CardFooter, Text,
         Heading, Box, SimpleGrid, Spacer, ButtonGroup} from '@chakra-ui/react';

const JobSeekerHome = () => {
    // const { loading, data } = useQuery(QUERY_JOBS})

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
                                <ButtonGroup gap='225'>
                                    <Button variant='outline' colorScheme='blue'>View Job</Button>
                                    <Button variant='outline' colorScheme='green'>Apply</Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    )
                )}
            </SimpleGrid> */}
            <SimpleGrid className='grid' minChildWidth='400px' spacing={10}>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <Flex>
                            <Box>
                                <Button>View Job</Button>
                            </Box>
                            <Spacer />
                            <Box>
                                <Button>Apply</Button>
                            </Box>
                        </Flex>
                    </CardFooter>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Heading>Software Engineer</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Full Stack Software Engineer to lead projects</Text>
                        <Text>$80,0000/yr</Text>
                    </CardBody>
                    <CardFooter className='card-footer'>
                        <ButtonGroup gap='225'>
                            <Button variant='outline' colorScheme='blue'>View Job</Button>
                            <Button variant='outline' colorScheme='green'>Apply</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    )
};

export default JobSeekerHome;