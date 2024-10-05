import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "./__root";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

// Images
// @ts-ignore
import coverEventLoop from "/src/Topics/Event-loop/assets/topic-eventLoopCover.png";
const topics = [
  {
    name: "Event Loop",
    path: "/event-loop",
    cover: coverEventLoop,
  },
];
function HomeComponent() {
  return (
    <>
      {/* {Navbar} */}
      <div className="p-2 ">
        <div className={`mt-[150px] text-center`}>
          <h1 className="text-5xl font-bold text-white">Topics</h1>

          <div className={`mt-[2rem] flex justify-center gap-5`}>
            {topics.map((topic) => (
              <div
                className={`mt-[2rem] flex justify-center items-center`}
                key={`${topic.name}-${Math.random()}`}
              >
                <Link
                  to={topic.path}
                  activeProps={{
                    className: "font-bold",
                  }}
                  activeOptions={{ exact: true }}
                >
                  <img
                    src={topic.cover}
                    className={`w-[300px] rounded-2xl`}
                    alt={topic.name}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
