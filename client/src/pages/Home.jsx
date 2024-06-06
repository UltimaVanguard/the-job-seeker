import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries;

import EmployerHome from '../components/EmployerHome';
import JobSeekerHome from '../components/JobSeekerHome';

const Home = () => {
    // variable for differentiating between employers and job seekers
    const employer = false

    // queries the user
    // const { loading, data } = useQuery(QUERY_ME)

    // const user = data?.me

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // changes employer variable to false if they're a job seeker
    // if (user.role === 'JOB-SEEKER') {
    //     employer = false;
    // }


    return (
        <main>
            {employer ? (
                <EmployerHome />
                // <EmployerHome id={user._id}/>
            ) : (
                <JobSeekerHome />
            )}
        </main>
    )
}

export default Home;