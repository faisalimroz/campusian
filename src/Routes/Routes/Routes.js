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
import Mycart from "../../Page/Profile/Mycart/Mycart";
import Postblog from "../../Page/Profile/Postblog/Postblog";
import Postjob from "../../Page/Profile/Postjob/Postjob";
import Postevent from "../../Page/Profile/Postevent/Postevent";
import Postnews from "../../Page/Profile/Postnews/Postnews";
import Postscholarship from "../../Page/Profile/Postscholarship/Postscholarship";
import Postresearch from "../../Page/Profile/Postresearch/Postresearch";
import Updateprofile from "../../Page/Profile/Updateprofile/Updateprofile";



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
                path:'/career',
                element:<Career></Career>
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
                path:'/news/:id',
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
                path:'/event/:id',
                element: <Eventdetails></Eventdetails>
            },
            {
                path:'/career',
                element: <Career></Career>
            },
            {
                path:'/career/:id',
                element: <CareerDetails></CareerDetails>
            },
            {
                path:'/scholarship',
                element: <Scholarship></Scholarship>
            },
            {
                path:'/scholarship/:id',
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
          
        ]
    },
    {
        path: 'profile',
        element: <Profile></Profile>,
        children: [
            {
                path:'mycart',
                element:<Mycart></Mycart>
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
                path:'updateprofile',
                element:<Updateprofile></Updateprofile>
            }
        
        ]
    }

])
export default router;