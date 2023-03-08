import Account from "./components/Account/Account";
import Course from "./components/Courses/Course/Course";
import Home from "./components/Home/Home";

const routes = [
    {path: '/' , element : <Home />},
    {path: '/account' , element : <Account />},
    {path: '/course/:courseID' , element : <Course />},
]

export default routes