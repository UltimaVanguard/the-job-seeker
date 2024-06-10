import { Heading, Text, Box } from "@chakra-ui/react";

const ProfilePage = (user) => {
    let employer = true
    
    if (user.user.role === 'JOB_SEEKER') {
        employer = false
    }

    return (
        <main>
            <Heading className="home-heading">Viewing {user.user.username}'s Profile</Heading>
            {employer ? (
                <Box>
                    <Text>Company Name: {user.user.employerProfile.companyName}</Text>
                    <Text>Address: {user.user.employerProfile.address}</Text>
                    <Text>Email: {user.user.employerProfile.email}</Text>
                    <Text>Phone: {user.user.employerProfile.phone}</Text>
                    <Text>Industry: {user.user.employerProfile.industry}</Text>
                </Box>
            ) : (
                <Box>
                    <Text>Name: {user.user.seekerProfile.fName} {user.user.seekerProfile.lName}</Text>
                    <Text>Address: {user.user.seekerProfile.address}</Text>
                    <Text>Phone: {user.user.seekerProfile.phone}</Text>
                    <Text>Email: {user.user.email}</Text>
                </Box>
            )}
        </main>
    )
}

export default ProfilePage;