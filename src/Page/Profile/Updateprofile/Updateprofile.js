import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Updateprofile.css';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    blogno: 0,
    newsno: 0,
    eventno: 0,
    scholarshipno: 0,
    jobsno: 0,
    researchpaperno: 0,
  });

  useEffect(() => {
    if (user) {
      // Fetch admin stats based on user's email
      fetch(`http://localhost:5000/admin-statss?email=${user.email}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch admin stats');
          }
          return response.json();
        })
        .then(data => {
          setStats(data);
        })
        .catch(error => {
          console.error('Error fetching admin stats:', error);
        });
    }
  }, [user]);

  return (
    <>
      <div className='bg-amber-400 p-4 rounded-lg'>
        <h1 className='text-center'>User Profile</h1>
        {user && (
          <>
            <h1>Name: {user.displayName}</h1>
            <h1>Email: {user.email}</h1>
            <img className='ml-[10px]' id='updateprofile' src={user.photoURL} alt="User" />
          </>
        )}
      </div>

      {/* Display user stats */}
      <div className="adminhome-container mt-4">
        <div className="stats-container">
          <div className="adminhome-container">
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8' src="https://i.ibb.co/zGv0jNF/content-writing.png" alt="Blogs" />
                </div>
                <div className="stat-title">Blogs</div>
                <div className="stat-value">{stats.blogno}</div>
              </div>
            </div>

            {/* Placeholder for News */}
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8' src="https://i.ibb.co/GVWwRYw/news.png" alt="News" />
                </div>
                <div className="stat-title">News</div>
                <div className="stat-value">{stats.newsno}</div>
              </div>
            </div>

            {/* Placeholder for Events */}
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8' src="https://i.ibb.co/sPvGs89/calendar.png" alt="Events" />
                </div>
                <div className="stat-title">Events</div>
                <div className="stat-value">{stats.eventno}</div>
              </div>
            </div>

            {/* Placeholder for Scholarship */}
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8' src="https://i.ibb.co/ZgYCy1B/scholarship.png " alt="Scholarship" />
                </div>
                <div className="stat-title">Scholarship</div>
                <div className="stat-value">{stats.scholarshipno}</div>
              </div>
            </div>

            {/* Placeholder for Jobs */}
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8' src="https://i.ibb.co/gybz3P3/job.png" alt="Jobs" />
                </div>
                <div className="stat-title">Jobs</div>
                <div className="stat-value">{stats.jobsno}</div>
              </div>
            </div>

            {/* Placeholder for Research Papers */}
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8' src="https://i.ibb.co/qYbmtvw/analysis.png" alt="Research" />
                </div>
                <div className="stat-title">Research</div>
                <div className="stat-value">{stats.researchpaperno}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
