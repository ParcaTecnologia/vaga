import React from "react";

interface RepoProps {
  users: {
    html_url: string;
    full_name: string;
    language: string;
    forks: number;
    stargazers_count: number;
  }[];
}

const Repo: React.FC<RepoProps> = ({ users }) => {
  return (
    <>
      {users.map((s, idx) => (
        <div key={idx} className="bg-gray-800  hover:bg-gray-700 border rounded-md w-[480px] border-slate-800 px-16 mt-4 py-6 leading-8">
          <a
            href={s.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 break-words flex items-center justify-center font-semibold hover:underline"
          >
            {s.full_name}
          </a>
          <div className="flex gap-x-5 flex-col items-center text-white ">
            <h1 className="text-sm font-semibold"> {"🟢" + s.language}</h1>
            <h1 className="text-sm font-semibold">forks : {s.forks}</h1>
            <h1 className="text-sm font-semibold">stars : {s.stargazers_count}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repo;
