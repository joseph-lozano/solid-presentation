import { A } from "@solidjs/router";
import fs from "fs";
import { createEffect } from "solid-js";
import { useRouteData } from "solid-start";
import { Outlet, useLocation, useNavigate } from "solid-start/router";
import { createServerData$ } from "solid-start/server/server";
import { NextIcon, PrevIcon } from "~/components/Heroicons";

export function routeData() {
  return createServerData$(() => {
    let max = fs.readdirSync("./src/routes/slides").length;
    return max;
  });
}

export default function SlidesLayout() {
  const max = useRouteData<typeof routeData>();
  const location = useLocation();
  const slideNumber = () => Number(location.pathname.split("/").at(-1));

  let nextPage = () => {
    const maxSlides = max();
    return maxSlides && slideNumber() < maxSlides ? slideNumber() + 1 : null;
  };

  let prevPage = () => (slideNumber() === 0 ? null : slideNumber() - 1);

  return (
    <div class="flex h-screen w-screen flex-col overflow-hidden bg-base-200">
      <progress
        class="progress progress-primary w-full"
        value={slideNumber()}
        max={max()}
      ></progress>
      <div class="hero grow bg-base-200">
        <div class="flex h-full w-full items-center justify-center">
          <div class="flex h-full w-full flex-col items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <button
          class="btn-ghost btn rounded-none bg-base-200"
          disabled={!prevPage()}
        >
          <A href={`/slides/${prevPage()}`}>
            <span class="flex flex-col">
              <PrevIcon />
              <span class="btm-nav-label">Prev</span>
            </span>
          </A>
        </button>
        <button
          class="btn-ghost btn rounded-none bg-base-200"
          disabled={!nextPage()}
        >
          <A href={`/slides/${nextPage()}`}>
            <span class="flex flex-col">
              <NextIcon />
              <span class="btm-nav-label">Next</span>
            </span>
          </A>
        </button>
      </div>
    </div>
  );
}
