import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

interface Event {
  actor: {
    login: string;
    avatar_url: string;
  };
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
}

interface EventsProps {
  data: Event[];
}

const Events: React.FC<EventsProps> = ({ data }) => {
  return (
    <>
      {data?.map((ev, i) => (
        <div key={i} className="flex gap-x-4 items-center">
          <Link to={`/${ev.actor?.login}`}>
            <img src={ev.actor?.avatar_url} className="w-16 rounded-full" alt={`Avatar of ${ev.actor?.login}`} />
          </Link>
          <h1 className="break-words">
            {ev?.actor?.login} {ev?.type}
            <br />
            {ev?.repo?.name}
            <br />
            <span className="text-sm">{format(ev?.created_at)}</span>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Events;
