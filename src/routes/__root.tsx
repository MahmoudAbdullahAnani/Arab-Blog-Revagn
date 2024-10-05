import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { navigate } = useRouter();

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() === "z") {
      e.preventDefault();
      navigate({ to: "/" });
    }
  });

  return (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  );
}
export const Navbar = (
  <>
    <div className="p-2 flex gap-2 text-lg float-start bg-white">
     
    </div>
    <hr />
    <Outlet />
  </>
);

/*

 <Link
        to="/"
        activeProps={{
          className: "font-bold",
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{" "}
      <Link
        to="/event-loop"
        activeProps={{
          className: "font-bold",
        }}
      >
        Event-Loop
      </Link>{" "}
      <Link
        to="/about"
        activeProps={{
          className: "font-bold",
        }}
      >
        About
      </Link>
*/