import { A } from "solid-start";

export default function NotFound() {
  return (
    <main class="text-center min-h-screen mx-auto bg-base-200 p-4">
      <h1 class="max-6-xs text-6xl text-primary uppercase my-16">
        Not Found
      </h1>
      <p class="my-4">
        <A href="/" class="link link-primary">
          Home
        </A>
      </p>
    </main>
  );
}
