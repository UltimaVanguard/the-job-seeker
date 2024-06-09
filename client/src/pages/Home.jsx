import { useQuery, useMutation } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import { ADD_APPLICATION } from '../utils/mutations';

import EmployerHome from '../components/EmployerHome';
import JobSeekerHome from '../components/JobSeekerHome';

const Home = () => {
    // variable for differentiating between employers and job seekers
    let employer = true

    // queries the user
    const { loading, data } = useQuery(QUERY_ME)

    const user = data?.me

    if (loading) {
        return <div>Loading...</div>;
    } 

    // changes employer variable to false if they're a job seeker
    if (user.role === 'JOB_SEEKER') {
        employer = false;
    } 

    return (
        <main>
            {employer ? (
                <EmployerHome id={user.id}/>
            ) : (
                <JobSeekerHome id={user.id}/>
            )}
        </main>
    )
}

export default Home;