import { useLazyQuery, useQuery } from '@apollo/client';
import { memo, useState } from 'react';
import { GET_USERS, GET_USERSBYID } from '../../../graphql/Query/Welcome';

const UserData = () => {
    const [value, setValue] = useState("");
    const { data: dataUsers, loading: loadingUsers } = useQuery(GET_USERS);
    const [getUser, { data: dataById, loading: loadingById }] = useLazyQuery(GET_USERSBYID, {
        variables: {
            prmId: 1
        }
    });


    if (loadingUsers || loadingById) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <select value={value} onChange={(e) => {
                setValue(e.target.value)
                getUser({
                    variables: {
                        prmId: parseInt(e.target.value)
                    }
                });
            }}>
                {dataUsers?.users.map((item) => (
                    <option key={item.id} value={item.id}>{item.id} - {item.userdesc}</option>
                ))}
            </select>
            <div>
                {dataById?.users[0].id} - {dataById?.users[0].userdesc}

            </div>
        </div>
    )
}

export default memo(UserData);