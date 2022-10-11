import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    let activeStyle = {
        color: 'white',
        backgroundColor: '#4f46e5',
      };

      
    let activeClassName = "underline";

    
    return (
        <header className='shadow py-5'>
              <nav className='container mx-auto'>
                 <div className="nav-items-wrapper flex justify-between items-center">
                 <div className="logo">
                    <Link className='text-3xl font-bold text-indigo-600' to={'/'}>
                    Quiz App
                    </Link>
                 </div>
                 <div className="nav-items flex list-none gap-6 items-center">
             
                    <NavLink 
                    style={({ isActive }) =>
                     isActive ? activeStyle : undefined
                     }
                    className='text-base font-medium uppercase mx-2 tracking-widest p-2 rounded hover:bg-indigo-500 hover:text-white' to={'/topics'}> 
                    Topics 
                    </NavLink>
             
            
                    <NavLink 
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                     className='text-base font-medium uppercase mx-2 tracking-widest p-2 rounded hover:bg-indigo-500 hover:text-white' to={'/statistic'}>
                         Statistic 
                         </NavLink>
   
           
                    <NavLink  
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                    className='text-base font-medium uppercase mx-2 tracking-widest p-2 rounded hover:bg-indigo-500 hover:text-white' to={'/blog'}> 
                    Blog 
                    </NavLink>
                 </div>
                 </div>
              </nav>
        </header>
    );
};

export default Header;