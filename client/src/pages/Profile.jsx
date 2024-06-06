import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProfilePages from '../components/ProfilePage';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

const Profile = () => {
    // const { id: userParam } = useParams();

    // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    //     variables: { _id: userParam },
    // });

    // const user = data?.me || data?.user || {};

    // if (loading) {
    //     return <div>Loading...</div>;
    // };

    return (
        <>
            <ProfilePages />
        </>
    )
}

export default Profile;