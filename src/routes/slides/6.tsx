import Prism from "prismjs";
import { createSignal } from "solid-js";

const code = `
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    console.log("I am logged only once per second")
  }, 1000)

  return (
    <div onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </div>
  );
}

render(() => <Counter />, document.getElementById('app')!);
`;

const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

export default function SlideSix() {
  const [step, setStep] = createSignal(0);

  const visible = (x: number) => (step() >= x ? "visible" : "invisible");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
      />
      <div onClick={() => setStep((s) => s + 1)}>
        <div class="card card-side w-[1200px] bg-base-100 shadow-xl">
          <div data-theme="night">
            <div class="mockup-code h-full pl-3">
              <pre>
                <code innerHTML={html}></code>
              </pre>
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Solid components run only once</h2>
            <div class="prose-xl prose">
              <ol>
                <li class={visible(1)}>
                  Because the code never runs more than once,{" "}
                  <span class="code">setInterval</span> is safe to call.
                </li>
                <a
                  href="https://playground.solidjs.com/anonymous/1545cfa1-7a0f-4747-82a8-b5af6612c84a"
                  target="_blank"
                  rel="noopener noreferrer"
                  class={visible(1)}
                >
                  Playground
                </a>
                <ol >
                  <li class={visible(2)}>
                    Compared to React, you don't need to remember:
                  </li>
                  <li class={visible(3)}>Cleaning up Effects</li>
                  <li class={visible(4)}>Mananging Dependency Arrays</li>
                  <li class={visible(5)}>Worry about memoizing expensive calculations that run revery re-render</li>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
