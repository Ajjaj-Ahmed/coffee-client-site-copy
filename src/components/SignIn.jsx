import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignIn = () => {
    const {SignInUser} = useContext(AuthContext)
    const handleSignInUser=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        SignInUser(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>error.message)
    }
    return (
        <div>
        <Navbar></Navbar>
         <div className="hero  min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl mb-4 font-bold">Sign In Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignInUser} className="card-body">
                        
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
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
    );
};

export default SignIn;