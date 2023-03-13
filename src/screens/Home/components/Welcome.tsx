import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_WELCOME } from '../../../graphql/Query/Welcome';

const Welcome = () => {
    const { data, loading, error } = useQuery(GET_WELCOME);
    if (loading) {
        return <div>Loading</div>
    }
    return (
        <div>{data?.welcome}</div>
    )
}

export default Welcome