import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Page/Home/Blog/Blog";
import Blogdetails from "../../Page/Home/Blog/Blogdetail/Blogdetails/Blogdetails";
import Blogshow from "../../Page/Home/Blog/Blogshow/Blogshow";
import Career from "../../Page/Home/Career/Career";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Home/Login/Login";
import Signup from '../../Page/Home/Signup/Signup'
import News from "../../Page/Home/News/News";
import NewsDetails from "../../Page/Home/News/NewsDetail/NewsDetails/NewsDetails";
import Event from "../../Page/Home/Events/Event";
import Eventdetails from "../../Page/Home/Events/Eventdetail/Eventdetails/Eventdetails";
import CareerDetails from "../../Page/Home/Career/CareerDetail/CareerDetails/CareerDetails";
import Scholarship from "../../Page/Home/Scholarship/Scholarship";
import ScholarshipDetails from '../../Page/Home/Scholarship/ScholarshipDetail/ScholarshipDetails/ScholarshipDetails'
import ResearchPaper from "../../Page/Home/ResearchPaper/ResearchPaper";
import Profile from "../../Layout/Profile";

import Postblog from "../../Page/Profile/Postblog/Postblog";
import Postjob from "../../Page/Profile/Postjob/Postjob";
import Postevent from "../../Page/Profile/Postevent/Postevent";
import Postnews from "../../Page/Profile/Postnews/Postnews";
import Postscholarship from "../../Page/Profile/Postscholarship/Postscholarship";
import Postresearch from "../../Page/Profile/Postresearch/Postresearch";
import Updateprofile from "../../Page/Profile/Updateprofile/Updateprofile";
import AllUsers from "../../Page/Profile/AllUsers/AllUsers";
import Aboutus from "../../Page/Aboutus/Aboutus";
import MyPost from "../../Page/Profile/MyPost/MyPost";
import Adminhome from "../../Page/Profile/Adminhome/Adminhome";
import Myblog from "../../Page/Profile/Myblog/Myblog";
import Alljobs from "../../Page/Profile/Alljobs/Alljobs";
import Allnews from "../../Page/Profile/Allnews/Allnews";
import Allresearch from "../../Page/Profile/Allresearch/Allresearch";
import Allscholarship from "../../Page/Profile/Allscholarship/Allscholarship";
import Allevents from "../../Page/Profile/Allevents/Allevents";






 const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/research',
                element:<ResearchPaper></ResearchPaper>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/blogs',
                element: <Blogshow></Blogshow>
            },
            {
                path:'/blog/:bid',
                element: <Blogdetails></Blogdetails>
            },
            {
                path:'/news',
                element: <News></News>
            },
            {
                path:'/news/:nid',
                element: <NewsDetails></NewsDetails>
            },
            {
                path:'/research',
                element: <ResearchPaper></ResearchPaper>
            },
            {
                path:'/event',
                element: <Event></Event>
            },
            {
                path:'/event/:eid',
                element: <Eventdetails></Eventdetails>
            },
            {
                path:'/career',
                element: <Career></Career>
            },
            {
                path:'/career/:cid',
                element: <CareerDetails></CareerDetails>
            },
            {
                path:'/scholarship',
                element: <Scholarship></Scholarship>
            },
            {
                path:'/scholarship/:sid',
                element: <ScholarshipDetails></ScholarshipDetails>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <Signup></Signup>
            },
            {
                path:'/aboutus',
                element: <Aboutus></Aboutus>
            },
           
           
          
        ]
    },
    {
        path: 'profile',
        element: <Profile></Profile>,
        children: [
            {
                path:'mypost',
                element:<MyPost></MyPost>
            },
            {
                path:'postblog',
                element:<Postblog></Postblog>
            },
            {
                path:'postjob',
                element: <Postjob></Postjob>
            },
            {
                path:'postevent',
                element:<Postevent></Postevent>
            },
            {
                path:'postresearchpaper',
                element:<Postresearch></Postresearch>
            },
            {
                path:'postnews',
                element:<Postnews></Postnews>
            },
            {
                path:'postscholarship',
                element:<Postscholarship></Postscholarship>
            },
            {
                path:'allblog',
                element:<Myblog></Myblog>
            },
            {
                path:'alljobs',
                element:<Alljobs></Alljobs>
            },
            {
                path:'allnews',
                element:<Allnews></Allnews>
            },
            {
                path:'allresearch',
                element:<Allresearch></Allresearch>
            },
            {
                path:'allevents',
                element:<Allevents></Allevents>
            },
            {
                path:'allscholarship',
                element:<Allscholarship></Allscholarship>
            },
            {
                path:'updateprofile',
                element:<Updateprofile></Updateprofile>
            },
            {
                path:'adminhome',
                element:<Adminhome></Adminhome>
            },
            {
                path:'alluser',
                element:<AllUsers></AllUsers>
            }

        
        ]
    }

])
export default router;