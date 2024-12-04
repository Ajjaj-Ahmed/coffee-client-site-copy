import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        <tr>
                            <td>{user._id}</td>
                            <td>{user?.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default Users;