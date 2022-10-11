import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const SingleTopic = ({quiz}) => {

    const {id ,name , total , logo} = quiz
    return (
        <div className='shadow-lg rounded border p-4'>
            <div className='flex items-center'>
               <div className='bg-slate-100 h-72'>
                 <img className='h-72 object-cover rounded' src={logo} alt={name} />
               </div>
               <div className='ml-28'>
                   <h2 className='text-3xl font-semibold tracking-widest '>{name}</h2>
                    <h3 className='text-base font-semibold tracking-widest my-4'>Total Quiz : {total}</h3>
                    <Link to={`/topics/${id}`}>
                      <button className='btn btn-primary'> Start Project <FontAwesomeIcon className='ml-2' icon={faChevronRight} /></button>
                    </Link>
               </div>
            </div>
        </div>
    );
};

export default SingleTopic;