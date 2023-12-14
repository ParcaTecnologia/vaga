// "use client"

import React from 'react';
import { Link } from 'react-router-dom';

interface User {
  login?: string;
  avatar_url?: string;
  name?: string;
  followers:string
}

interface UsersContainerProps {
  users: User[] | null;
}

const UsersContainer: React.FC<UsersContainerProps> = ({ users }) => {
  return (
    <div className='flex flex-wrap max-md:flex-col items-center gap-5 px-16 justify-center py-5'>
      {users && users.map((user: User | undefined, idx: number) => user?.login && (
        <div key={idx} className='flex  px-4 rounded-md w-[480px] border border-gray-500 bg-gray-900  items-center justify-between'>
          <div className='flex gap-3 items-center '>
          <img src={user?.avatar_url} className='w-12  border-4 border-slate-950 rounded-full' alt={`Avatar of ${user?.login}`} />
          <h1 className='text-xl text-teal-400 font-semibold'>{user?.login}</h1>
          </div>
          
          <h1 className='text-xs text-white font-semibold'>{user?.name}</h1>
          
          <Link to={`/${user?.login}`}>
            <span className='text-gray-200 bg-slate-800 my-3 font-semibold block px-4 py-2 tracking-wide rounded'>View</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UsersContainer;
