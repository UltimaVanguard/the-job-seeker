import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { useNavigate } from 'react-router-dom';

import { QUERY_ME } from '../utils/queries';
import { NEW_SEEKER_PROFILE, NEW_EMPLOYER_PROFILE } from '../utils/mutations';

import { Heading } from '@chakra-ui/react';

import EmployerForm from '../components/EmployerForm';
import JobSeekerForm from '../components/JobSeekerForm';

const CreateProfile = () => {
    // variable for differentiating between employers and job seekers
    let employer = true

    // sets the various states needed
    const [employerState, setEmployerState] = useState({ name: '', address: '', phone: '', email: '', industry: '' });
    const [jobSeekerState, setJobSeekerState] = useState({ fName: '', lName: '', address: '', phone: '' });
    const [selected, setSelected] = useState('');
    const [empProfile, { empError, empData }] = useMutation(NEW_EMPLOYER_PROFILE);
    const [jsProfile, { jsError, jsData}] = useMutation(NEW_SEEKER_PROFILE);
    const navigate = useNavigate();

    // queries the user
    const { loading, data } = useQuery(QUERY_ME)

    const user = data?.me || {};
    const id = user.id

    if (loading) {
        return <div>Loading...</div>;
    }

    // changes employer variable to false if they're a job seeker
    if (user.role === 'JOB_SEEKER') {
        employer = false;
    }

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
    const handleEmployerSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await empProfile({
                variables: {id, ...employerState},
            })
        } catch (err) {
            console.error(err);
        };
        
        setEmployerState({
            name: '',
            address: '',
            phone: '',
            email: '',
            industry: '',
        });
        setSelected('');

        navigate("/")
    }

    // handles job seeker submits
    const handleJobSeekerSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await jsProfile({
                variables: {id, ...jobSeekerState},
            })
        } catch (err) {
            console.error(err);
        };

        setJobSeekerState({
            fName: '',
            lName: '',
            address: '',
            phone: '',
        });

        navigate("/")
    } 

    return (
        <main>
            <Heading>Build Your Profile</Heading>
            {/* displays form based on employer */}
            {employer ? (
                <EmployerForm employerState={employerState} selected={selected}
                 handleChange={handleChange} handleEmployerSubmit={handleEmployerSubmit} />
            ) : (
                <JobSeekerForm jobSeekerState={jobSeekerState} handleChange={handleChange}
                 handleJobSeekerSubmit={handleJobSeekerSubmit} />
            )}
        </main>
    )
}

export default CreateProfile;