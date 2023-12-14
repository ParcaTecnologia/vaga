import React from "react";

interface TabsProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabsProps> = ({ type, setType }) => {
  return (
    <>
    <div className="flex gap-6">
      <button
        className={`${type === "repos" && "text-teal-400"}`}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
     
      <button
        className={`${type === "followers" && "text-teal-400"}`}
        onClick={() => setType("followers")}
      >
        followers
      </button>
      </div>
    </>
  );
};

export default Tabs;
