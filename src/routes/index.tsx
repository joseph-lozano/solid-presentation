import { A } from "@solidjs/router";

export default function Home() {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src="/solid-logo.svg" class="h-72 rounded-lg" />
        <div>
          <h1 class="text-5xl font-bold">SolidJS</h1>
          <p class="py-6">
            Simple and performant reactivity for building user interfaces.
          </p>
          <A href="/slides/1" class="btn-primary btn">Get Started</A>
        </div>
      </div>
    </div>
  );
}
