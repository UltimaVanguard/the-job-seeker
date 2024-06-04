import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries';

import EmployerForm from '../components/EmployerForm';
import JobSeekerForm from '../components/JobSeekerForm';

const CreateProfile = () => {
    // variable for differentiating between employers and job seekers
    const employer = true

    // sets the various states needed
    const [employerState, setEmployerState] = useState({ name: '', address: '', phone: '', email: '', industry: '' });
    const [jobSeekerState, setJobSeekerState] = useState({ fName: '', lName: '', address: '', phone: '' });
    const [selected, setSelected] = useState('');

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

    // handler for input fields
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (employer === true) {
            setEmployerState({
                ...employerState,
                [name]: value,
            });

            if (name === 'industry') {
                setSelected(value);
            }
        } else {
            setJobSeekerState({
                ...jobSeekerState,
                [name]: value,
            });
        };
    }

    // handles employer submits
    const handleEmployerSubmit = (event) => {
        event.preventDefault();

        setEmployerState({
            name: '',
            address: '',
            phone: '',
            email: '',
            industry: '',
        });
        setSelected('');
    }

    // handles job seeker submits
    const handleJobSeekerSubmit = (event) => {
        event.preventDefault();

        setJobSeekerState({
            fName: '',
            lName: '',
            address: '',
            phone: '',
        });
    } 

    return (
        <main>
            <h2>Build Your Profile</h2>
            {/* displays form based on employer */}
            {employer ? (
                <EmployerForm employerState={employerState} selected={selected}
                 handleChange={handleChange} handleEmployerSubmit={handleEmployerSubmit}/>
            ) : (
                <JobSeekerForm jobSeekerState={jobSeekerState} handleChange={handleChange}
                 handleJobSeekerSubmit={handleJobSeekerSubmit}/>
            )}
        </main>
    )
}

export default CreateProfile;