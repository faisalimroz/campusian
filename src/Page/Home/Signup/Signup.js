import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase.init';

const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';
const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
const auth = getAuth(app);

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, verifyEmail, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    console.log(data);
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
      saveUser(data.name, data.email);

    } catch (error) {
      console.log(error);
      setSignUpError(error.message);
    }
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('saveuser', data);
      });
  };

  return (
    <div>
      <div className='h-[1000px]  flex justify-center items-center '>
        <div className=' drop-shadow-xl signin-border w-96'>
          <h2 className='text-4xl text-center'>Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignup)}>

            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" {...register("name", { required: "name is required" })} className="input input-bordered w-full max-w-xs" />
              {errors.name && <p className='text-danger-600'>{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="text" {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
              {errors.email && <p className='text-rose-600'>{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password"
                {...register("password",
                  { required: "Password is required", minLength: { value: 6, message: "password must be  6character or longer" } }
                )} className="input input-bordered w-full max-w-xs" />
              {errors.password && <p className='text-rose-600'>{errors.password?.message}</p>}

              <label className="label"><span className="label-text">Forget Password?</span></label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label"><span className="label-text">Profile Picture</span></label>
              <input type="file" {...register("profilePicture")} accept="image/*" className="input input-bordered w-full max-w-xs" />
              {errors.profilePicture && <p className='text-rose-600'>{errors.profilePicture?.message}</p>}
            </div>

            <input className='btn btn-accent w-full max-w-xs' value='signup' type="submit" />
            <div>
              {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </div>
          </form>
          <p>Already have an account?<Link className='text-sky-400' to='/login'>Please Login</Link> </p>

          <div className='divider'>OR</div>
          <button className='btn btn-accent w-full max-w-xs mt-8'>Continue With Google</button>
        </div>

      </div>
    </div>
  );
};

export default Signup;
