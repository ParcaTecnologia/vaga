
"use client";

import Loading from "../components/Loading";
import UsersContainer from '@/components/UsersContainer';
import React, { useEffect, useRef, useState } from 'react';

interface User {
  login: string;
  avatar_url: string;
  name?: string;
 
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null); 
  let BaseURL = 'https://api.github.com/users';
  const user = useRef<HTMLInputElement>(null); 

  // Encontrar todos usuários
  async function allUsers() {
    if (user.current?.value === "") {
      setLoading(true);
      const res = await fetch(BaseURL);
      const data: User[] = await res.json();
      setUsers(data);
      setLoading(null);
    }
  }

  async function FindUser() {
    setLoading(true);
    if (user.current?.value !== '') {
      setUsers([]);
      const res = await fetch(BaseURL + '/' + user.current?.value);
      const data: User = await res.json();
      setUsers([data]);
      user.current.value = "";
    } else {
      allUsers();
    }
    setLoading(null);
  }

  useEffect(() => {
    allUsers();
  }, []); 

  return (
    <div className='flex flex-col  mt-8 '>
      <br />
      <div className='flex items-center  dark:text-white px-16  justify-center my-5'>
        <br />
        <input
          type="text"
          placeholder="Search or jump to…"
          className="border border-gray-300  py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 flex-grow bg-slate-950 "
          ref={user}
        />
        <button
          onClick={FindUser}
          className='bg-slate-800 text-white rounded-md px-6 py-2 ml-2 hover:bg-slate-700 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300'
        >
          Search
        </button>
      </div>
      <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
    </div>
  );
};

export default Users;
