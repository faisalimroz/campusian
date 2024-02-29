import React, { useEffect, useState } from 'react';
import './NewsDetails.css';
import { useParams } from 'react-router-dom';
import Socialmedia from '../../../Socialmedia/Socialmedia';

const NewsDetails = () => {
  const { nid } = useParams();
  console.log(nid)
  const [newsPost, setNewsPost] = useState();
  useEffect(() => {
    console.log('idd', nid)
    fetch(`http://localhost:5000/news/${nid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        return response.json();
      })
      .then(data => {
        console.log('big', data)
        setNewsPost(data);
      })
      .catch(error => {
        console.log(error);
        // Handle the error, such as showing an error message
      });
  }, [nid]);
  return (
    <div>
      {newsPost && newsPost.title ? (
        <div id='' className="news  mx-auto ">

          <div className="news-div">
            <img className='news-img' src={newsPost.img} alt="Shoes" />
            <h1 className="news-title">{newsPost.title}</h1>
            <p className='news-p'>{newsPost.description}</p>


          </div>
        </div>

      ) : (
        <div>Loading...</div>
      )}

      <div className='ml-[350px]'>
        <Socialmedia></Socialmedia>
      </div>
    </div>
  );
};

export default NewsDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './NewsDetails.css';

// const NewsDetails = () => {
//   const { nid } = useParams();
//   console.log(nid);

//   const [newsPost, setNewsPost] = useState(null);

//   useEffect(() => {
//     console.log('idd', nid);
//     fetch(`http://localhost:5000/news/${nid}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch news details');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('news', data);
//         setNewsPost(data);
//       })
//       .catch(error => {
//         console.log(error);
//         // Handle the error, such as showing an error message
//       });
//   }, [nid]);

//   return (
//     <div id='news-details-container' className="news-details-container mx-auto">
//       {newsPost && newsPost.title ? (
//         <div id='news-details' className="news-details">
//           <div className="news-div">
//             <img className="news-img" src={newsPost.img} alt="News" />
//             <h1 className="news-title">{newsPost.title}</h1>
//             <p className="news-p">{newsPost.description}</p>
//             <h2>Posted by: {newsPost.postedby}</h2>
//           </div>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default NewsDetails;
