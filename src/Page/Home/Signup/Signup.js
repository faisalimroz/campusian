import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase.init';

const Signup = () => {
  const auth = getAuth(app);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, verifyEmail, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();
  const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const handleSignup = async (data) => {
    setSignUpError('');

    try {
      // Create user in Firebase
      const user = await createUser(data.email, data.password);

      // Verify email
      await verifyEmail(user);

      // Navigate to home page
      navigate('/');

      console.log('Email verified');

      // Create user info for Firebase update
      const userInfo = {
        displayName: data.name,
      };

      // Update Firebase user profile
      await updateUser(userInfo);

      // Upload image to imgBB
      if (data.profilePicture) {
        const formData = new FormData();
        formData.append('image', data.profilePicture[0]);

        const response = await fetch(img_hosting_url, {
          method: 'POST',
          body: formData,
        });

        const imgBBData = await response.json();

        // Update Firebase user profile with image URL
        await updateProfile(auth.currentUser, { photoURL: imgBBData.data.url });
      }

      // Save user data to your server
      saveUser(data.name, data.email, data.photoURL);

    } catch (error) {
      console.log(error);
      setSignUpError(error.message);
    }
  };

  const saveUser = async (name, email, photoURL) => {
    const user = { name, email, photoURL };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Failed to save user data on the server');
      }

      const data = await response.json();
      console.log('saveUser', data);
    } catch (error) {
      console.error('Error saving user data:', error.message);
    }
  };

  return (
    <div className='signup-container'>
      <div className='drop-shadow-xl signin-border'>
        <h2 className='text-4xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered" />
            {errors.name && <p className='text-danger-600'>{errors.name?.message}</p>}
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input
              type="text"
              placeholder="xyz@diu.edu.bd"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@diu\.edu\.bd$/,
                  message: "Invalid email format. Please use a @diu.edu.bd email address",
                },
              })}
              className="input input-bordered"
            />
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
            <label className="label"><span className="label-text">Forget Password?</span></label>
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Profile Picture</span></label>
            <input type="file" {...register("profilePicture")} accept="image/*" className="input input-bordered" />
            {errors.profilePicture && <p className='text-rose-600'>{errors.profilePicture?.message}</p>}
          </div>

          <input className='btn btn-accent mt-4' value='Sign Up' type="submit" />
          <div>
            {signUpError && <p className='text-red-600'>{signUpError}</p>}
          </div>
        </form>

        {/* Additional content, links, and buttons */}
        <p>Already have an account? <Link className='text-sky-400' to='/login'>Please Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
