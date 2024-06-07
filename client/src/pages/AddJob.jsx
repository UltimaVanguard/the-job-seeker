import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { Heading } from '@chakra-ui/react';

import { QUERY_ME } from '../utils/queries';
import { NEW_JOB_POST } from '../utils/mutations';

import JobForm from '../components/JobForm';

const AddJob = () => {
    // sets the various states needed
    const [formState, setFormState] = useState({ title: '', description: '', location: '', jobType: '', salaryRange: '', experienceLevel: '' });
    const [selected, setSelected] = useState('');
    const [jobPost, { error, jData }] = useMutation(NEW_JOB_POST)
    const navigate = useNavigate();

    // queries the user
    const { loading, data } = useQuery(QUERY_ME)

    const user = data?.me || {};
    const id = user.id
    
    if (loading) {
        return <div>Loading...</div>;
    }

    // handler for input fields
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        if (name === 'jobType') {
            setSelected(value);
        }
    }

    // handles employer submits
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await jobPost({
                variables: {id, ...formState}
            })
        } catch (err) {
            console.error(err);
        };

        setFormState({
            title: '',
            description: '',
            location: '',
            jobType: '',
            salaryRange: '',
            experienceLevel: '',
        });
        setSelected('');

        navigate("/")
    }

    return (
        <main>
            <Heading>Create your new job post</Heading>
            <JobForm formState={formState} selected={selected}
             handleChange={handleChange} handleFormSubmit={handleFormSubmit}/>
        </main>
    )
}

export default AddJob;