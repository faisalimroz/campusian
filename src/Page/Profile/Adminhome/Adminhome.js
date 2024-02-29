import React, { useState, useEffect } from 'react';
import './Adminhome.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Adminhome = () => {
  const [stats, setStats] = useState({
    blogno: 0,
    newsno: 0,
    eventno: 0,
    scholarshipno: 0,
    jobsno: 0,
    researchpaperno: 0,
  });

  const data = [
    { name: 'Blogs', value: stats.blogno },
    { name: 'News', value: stats.newsno },
    { name: 'Events', value: stats.eventno },
    { name: 'Scholarship', value: stats.scholarshipno },
    { name: 'Jobs', value: stats.jobsno },
    { name: 'Research Papers', value: stats.researchpaperno },
  ];

  useEffect(() => {
    fetch('http://localhost:5000/admin-stats')
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
  }, []);

  return (
    <>
      <div className="adminhome-container">
        <div className="stats-container">
          <div className="adminhome-container">
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8 ' src="https://i.ibb.co/zGv0jNF/content-writing.png" alt="Blogs" />
                </div>
                <div className="stat-title">Blogs</div>
                <div className="stat-value">{stats.blogno}</div>
              </div>
            </div>
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8 ' src="https://i.ibb.co/gybz3P3/job.png" alt="Jobs" />
                </div>
                <div className="stat-title">Jobs</div>
                <div className="stat-value">{stats.jobsno}</div>
              </div>
            </div>
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8 ' src="https://i.ibb.co/sPvGs89/calendar.png" alt="Events" />
                </div>
                <div className="stat-title">Events</div>
                <div className="stat-value">{stats.eventno}</div>
              </div>
            </div>
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8 ' src="https://i.ibb.co/ZgYCy1B/scholarship.png " alt="Scholarship" />
                </div>
                <div className="stat-title">Scholarship</div>
                <div className="stat-value">{stats.scholarshipno}</div>
              </div>
            </div>
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8 ' src="https://i.ibb.co/GVWwRYw/news.png" alt="News" />
                </div>
                <div className="stat-title">News</div>
                <div className="stat-value">{stats.newsno}</div>
              </div>
            </div>
            <div className="stats shadow bg-yellow-300">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img className='h-8 w-8 ' src="https://i.ibb.co/qYbmtvw/analysis.png" alt="Research" />
                </div>
                <div className="stat-title">Research</div>
                <div className="stat-value">{stats.researchpaperno}</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div>
          <h1 className='text-center mt-5'>The Graph</h1>
          <ResponsiveContainer width={600} height={300}>
            <BarChart
              width={500}
              height={300}
              data={data}
             
            >
              <CartesianGrid strokeDasharray="" />
              <XAxis dataKey="name"  />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#FFA07A" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </>
  );
};

export default Adminhome;
