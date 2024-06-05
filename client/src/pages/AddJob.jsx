import { useState } from 'react';
import { useQuery } from '@apollo/client';

// import { QUERY_ME } from '../utils/queries';

import JobForm from '../components/JobForm';

const AddJob = () => {
    // sets the various states needed
    const [formState, setFormState] = useState({ title: '', description: '', location: '', jobType: '', salaryRange: '', experienceLevel: '' });
    const [selected, setSelected] = useState('');

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
    const handleFormSubmit = (event) => {
        event.preventDefault();

        setFormState({
            title: '',
            description: '',
            location: '',
            jobType: '',
            salaryRange: '',
            experienceLevel: '',
        });
        setSelected('');
    }

    return (
        <main>
            <h2>Create your new job post</h2>
            <JobForm formState={formState} selected={selected}
             handleChange={handleChange} handleFormSubmit={handleFormSubmit}/>
        </main>
    )
}

export default AddJob;