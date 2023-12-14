import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Events from "../components/Events";
import Loading from "../components/Loading";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UsersContainer from "../components/UsersContainer";

interface UserInfo {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  html_url: string;
}

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<UserInfo[]>([]);
  const [type, setType] = useState<string>("repos");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const EndPoint = "https://api.github.com/users";
  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data: UserInfo = await res.json();
    setUser([data]);
  }

  async function GetUrls() {
    setUsers([]);
    setLoading(true);
    const res = await fetch(EndPoint + pathname + `/${type}`);
    const data = await res.json();
    setUsers(data);
    setLoading(null);
  }

  useEffect(() => {
    GetUserInfo();
    GetUrls();
  }, [pathname, type]);

  return (
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-6 py-1 font-medium mx-1 my-4 bg-slate-800  ml-4 rounded text-gray-200"
      >
        BACK
      </button>
      {user &&
        user.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center  text-white md:flex-row md:px-0 px-4  items-center flex-col"
          >
            
            <img
              src={uinfo.avatar_url}
              
              alt="Avatar"
              className=" border-4 border-slate-950 rounded-md md:mx-0 mx-auto"
            />
            <div className="text-lg leading-10 px-3">
              <h1 className="text-3xl pb-4">{uinfo.name}</h1>
              <h1>
                <span className=" text-teal-400">Login name</span>: {uinfo.login}
              </h1>
              <h1>
                <span className= "text-teal-400">followers</span>: {uinfo.followers}
              </h1>
              <h1>
                <span className=" text-teal-400">following : </span>
                {uinfo.following}
              </h1>
              <h1>
                <span className="text-teal-400">public repositories : </span>
                {uinfo.public_repos}
              </h1>
              <h1>
                <span className="text-teal-400">Join : </span>
                {new Date(uinfo.created_at).toLocaleDateString()}
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 justify-center flex rounded cursor-pointer px-4 py-1  my-3 font-bold hover:bg-gray-700 bg-slate-800"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      <div className="flex items-center text-white border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl ">
        <Tabs type={type} setType={setType} />
      </div>
      {loading && <Loading />}
      {type === "repos" && (
        <div className="flex flex-wrap items-center max:md-flex-col gap-5 justify-center py-5">
          {users && <Repo users={users} />}
        </div>
      )}
      {type === "followers" && <UsersContainer users={users} />}
    </div>
  );
};

export default UserInfo;
