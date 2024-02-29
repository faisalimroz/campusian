import './Profile.css';
import { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext)

  // const isAdmin = user && user.role === 'admin';
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to fetch the user role from MongoDB
        const response = await fetch(`http://localhost:5000/users/${user.email}`);
        const data = await response.json();

        if (data && data.role === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };

    // Fetch the user's role when the component mounts
    if (user && user.uid) {
      fetchUserRole();
    }
  }, [user]);
  console.log('user', user);
  console.log('isAdmin', isAdmin);
  console.log('user.role', user && user.role);
  return (
    <div className=''>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label  id="my-drawer-2" htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side overflow-auto ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full bg-yellow-300 text-base-content ">
            {/* Sidebar content here */}
            {isAdmin && (
              <>
                <li>
                  <Link to='alluser'>
                    <img className='h-6 w-6' src="https://i.ibb.co/stssN8z/image.png" alt="All Users" />
                    All user
                  </Link>
                </li>
                <li>
                  <Link to='adminhome'>
                    <img className='h-6 w-6' src="https://i.ibb.co/3frnPGp/image-removebg-preview-3.png" alt="Admin Home" />
                    Admin Home
                  </Link>
                </li>
                <li><Link to='allblog'><img className='h-6 w-6 ' src="https://i.ibb.co/zGv0jNF/content-writing.png " alt="salary" />All blog</Link></li>
            <li><Link to='alljobs'><img className='h-6 w-6 ' src="https://i.ibb.co/gybz3P3/job.png " alt="salary" />All job</Link></li>
            <li><Link to='allnews'><img className='h-6 w-6 ' src="https://i.ibb.co/GVWwRYw/news.png " alt="salary" />All News</Link></li>
            <li><Link to='allevents'><img className='h-6 w-6 ' src="https://i.ibb.co/sPvGs89/calendar.png " alt="salary" />All Events</Link></li>
            <li><Link to='allresearch'><img className='h-6 w-6 ' src="https://i.ibb.co/qYbmtvw/analysis.png " alt="salary" />All Research paper</Link></li>
            <li><Link to='allscholarship'><img className='h-6 w-6 ' src="https://i.ibb.co/ZgYCy1B/scholarship.png  " alt="salary" />All Scholarship</Link></li>
            
              </>
            )}
               {!isAdmin && (
              <>
                  <li><Link to='updateprofile'><img className='h-6 w-6 ' src="https://i.ibb.co/mhq2T4p/update-user.png" alt="salary" />User Profile</Link></li>
            
              </>
            )}

            <li><Link to='postjob'><img className='h-6 w-6 ' src="https://i.ibb.co/gybz3P3/job.png" alt="salary" />Post a Job</Link></li>
            <li><Link to='postresearchpaper'><img className='h-6 w-6 ' src="https://i.ibb.co/qYbmtvw/analysis.png " alt="salary" />Post a Research Paper</Link></li>
            <li><Link to='postblog'><img className='h-6 w-6 ' src="https://i.ibb.co/zGv0jNF/content-writing.png" alt="salary" />Post a blog</Link></li>
            <li><Link to='postnews'><img className='h-6 w-6 ' src="https://i.ibb.co/GVWwRYw/news.png " alt="salary" />Post a news</Link></li>
            <li><Link to='postevent'> <img className='h-6 w-6 ' src="https://i.ibb.co/sPvGs89/calendar.png " alt="salary" />Post a events</Link></li>
            <li><Link to='postscholarship'><img className='h-6 w-6 ' src="https://i.ibb.co/ZgYCy1B/scholarship.png " alt="salary" />Post a scholarship</Link></li>
          
          
            <li><Link to='/'><img className='h-6 w-6 ' src="https://i.ibb.co/g9vWDd6/image.png" alt="salary" />Exit</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;