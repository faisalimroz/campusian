import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signIn, forgetPassword, signInWithGoogle } = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (data) => {
    setLoginError('')
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        navigate('/')
      })
      .catch(error => {
        setLoginError(error.message)
      })
  }

  const handleForgetPassword = () => {
    const email = document.getElementById('email').value;
    forgetPassword(email)
      .then(() => {
        console.log('Password reset email sent');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
      })
  }

  return (
    <div className='login-container'>
      <div className='drop-shadow-xl login-border'>
        <h2 className='text-4xl text-center'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="text" {...register("email", { required: "Email address is required" })} id='email' className="input input-bordered" />
            {errors.email && <p className='text-rose-600'>{errors.email?.message}</p>}
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input
              type="password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer" } })}
              className="input input-bordered"
            />
            {errors.password && <p className='text-rose-600'>{errors.password?.message}</p>}
            <button type="button" className="btn btn-link" onClick={handleForgetPassword}>Forget Password?</button>
          </div>

          <input className='btn btn-accent' value='Login' type="submit" />
        </form>

        {/* Additional content, links, and buttons */}
        <p>New to Our site? <Link className='text-sky-400' to='/signup'>Please Signup</Link></p>
        {/* <div className='divider'>OR</div>
        <button onClick={() => handleGoogle()} className='btn btn-accent btn-google'>Continue With Google</button> */}

        {/* Display login error */}
        {loginError && <p className='text-rose-600'>{loginError}</p>}
      </div>
    </div>
  );
};

export default Login;
