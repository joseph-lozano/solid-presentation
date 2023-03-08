import { A } from "solid-start";

export default function NotFound() {
  return (
    <main class="mx-auto min-h-screen bg-base-200 p-4 text-center">
      <h1 class="max-6-xs my-16 text-6xl uppercase text-primary">Not Found</h1>
      <p class="my-4">
        <A href="/" class="link-primary link">
          Home
        </A>
      </p>
    </main>
  );
}
