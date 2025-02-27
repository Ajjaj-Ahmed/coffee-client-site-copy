import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    // console.log(users)
    const handleDelte=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {            
            fetch(`http://localhost:5000/users/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
              });

            }
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
            })
            }
          });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>                            
                            <th>Action</th>                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user =>  
                            <tr key={user._id} className="bg-base-200">
                                <th>{user._id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>                               
                                <td className='flex gap-2'>
                                <button className='btn bg-gray-200'>E</button>
                                <button onClick={()=>handleDelte(user._id)}  className='btn bg-gray-200'>X</button>
                                </td>                               
                            </tr>)
                           

                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default Users;