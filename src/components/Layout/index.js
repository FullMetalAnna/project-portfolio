/* its easier for later on imports */
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
/* all of our components are going to be functional components */

const Layout = () => {
    return (
    <div>
         {/* Import sidebar componenet */}

    <Sidebar />

   <div className='page'>
       <span className='tags top-tags'>&lt;body&gt;</span>

       <Outlet />
   <span className='tags bottom-tags'>
   &lt;body&gt;
   <br />
   <span className='bottom-tag-html'>&lt;/html&gt;</span>
   </span>

   </div>


    </div>
    
    )
}

export default Layout