import  { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContest } from '../Auth';

const Register = () => {
    const { createUser } = useContext(AuthContest);
    const formRef = useRef(null);
    const [error, setError] = useState(''); 

    const handleRegisterPage = (event) => {
        event.preventDefault();       

        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const file = from.file.value;
        console.log(name, email, password, file); 

        if (password.length<6) {
            setError("Add at least 6 character password");
            return;
        }
        formRef.current.reset();
        createUser(email, password)
        .then(result => {
            const myUser = result.user;
            console.log(myUser);
            setError('');
        })
        .catch(err => {
            console.log(err.message);
            setError(err.message);
        })
}



    return (
        <form onSubmit={handleRegisterPage} ref={formRef} className='mt-20'>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-orange-950">Registration Now!</h1>

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg mt-4">Name:</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Email:</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        
                        {/* pass */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />


                            {/* url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo URL</span>
                                </label>
                                <input type="file" name='file' className="file-input file-input-bordered w-full max-w-xs" required />

                            </div>

                            <label className="label">


                                <div>
                                    <Link to="/login" className='text-indigo-800'>Have an Account? Go To Login</Link>
                                </div>
                            </label>
                        </div>
                        {/* Button */}
                        <div className="form-control mt-6">


                            <button className="btn btn-primary">Registration</button>
                        </div>
                        <p className='text-red-700'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
        </form>
       
    );
};

export default Register;