import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from './Navbar';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const user={name,email}
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                fetch(`http://localhost:5000/users`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>console.log(data))           
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
       <div>
        <Navbar></Navbar>
         <div className="hero  min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl mb-4 font-bold">Sign Up Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
    );
};

export default SignUp;