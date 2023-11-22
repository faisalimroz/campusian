import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import app from '../../../firebase.init';
import { getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signIn, forgetPassword,signInWithGoogle } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const auth = getAuth(app)
    const provider=new GoogleAuthProvider()
    const navigate=useNavigate()
    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;  
                navigate('/')
                console.log(user)

            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }
    const handleForgetPassword = () => {
        const email = document.getElementById('email').value;
        forgetPassword(email)
          .then(() => {
            console.log('Password reset email sent');
         
            // history.push('/login')
            // Display a success message or navigate to a password reset page
          })
          .catch((error) => {
            console.log(error);
            // Handle error sending password reset email
          });
      };

    // const [data, setData] = useState('')
    const handleGoogle = () => {
        console.log('smritee')
        signInWithGoogle()
        .then((result) => {
          
            
            const user = result.user;
            console.log(user)
          
          })
    }
    return (
        <div>

            <div className='h-[800px]  flex justify-center items-center '>
                <div className=' drop-shadow-xl login-border w-96'>
                    <h2 className='text-4xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" {...register("email", { required: "Email address is required" })} id='email' className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-rose-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password",
                                    { required: "Password is required", minLength: { value: 6, message: "password must be  6character or longer" } }
                                )} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-rose-600'>{errors.password?.message}</p>}

                            <button type="button" className="btn btn-link" onClick={handleForgetPassword}>Forget Password?</button>
                        </div>


                        <input className='btn btn-accent w-full max-w-xs' value='login' type="submit" />
                        <div>
                            {loginError && <p>{loginError}</p>}
                        </div>
                    </form>
                   
                    <p>New to Our site?<Link className='text-sky-400' to='/signup'>Please Signup</Link> </p>

                    <div className='divider'>OR</div>
                    <button onClick={() => handleGoogle()} className='btn btn-accent w-full max-w-xs mt-8'>Continue With Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;